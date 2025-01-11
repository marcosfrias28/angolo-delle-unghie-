'use server';

import { z } from 'zod';
import {
  User,
  users,
  type NewUser,
  ActivityType,
} from '@/lib/db/schema';
import { comparePasswords, hashPassword, setSession, verifyToken } from '@/lib/auth/session';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import {
  validatedAction,
  validatedActionWithUser,
} from '@/lib/auth/middleware';
import db from '@/lib/db/drizzle';
import { and, eq, isNull, sql } from 'drizzle-orm';


export async function getUser() {
  const sessionCookie = cookies().get('session');
  if (!sessionCookie || !sessionCookie.value) {
    return null;
  }

  const sessionData = await verifyToken(sessionCookie.value);
  if (
    !sessionData ||
    !sessionData.user ||
    typeof sessionData.user.id !== 'number'
  ) {
    return null;
  }

  if (new Date(sessionData.expires) < new Date()) {
    return null;
  }

  const [user] = await db
    .select()
    .from(users)
    .where(and(eq(users.id, sessionData.user.id), isNull(users.deletedAt)))
    .limit(1);

  if (!user) {
    return null;
  }

  return user as User;
}

const signInSchema = z.object({
  email: z.string().email().min(3).max(255),
  password: z.string().min(8).max(100),
});


export const signIn = validatedAction(signInSchema, async (data, formData) => {
  const { email, password } = data;

  const user = await db
    .select({
      user: users,
    })
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (user.length === 0) {
    return { error: 'Invalid email or password. Please try again.' };
  }

  const { user: foundUser } = user[0];

  const isPasswordValid = await comparePasswords(
    password,
    foundUser.passwordHash
  );

  if (!isPasswordValid) {
    return { error: 'Invalid email or password. Please try again.' };
  }

  await setSession(foundUser);

  redirect('/dashboard');
});

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  name: z.string().min(1),
});

export const signUp = validatedAction(signUpSchema, async (data, formData) => {
  const { email, password, confirmPassword, name } = data;

  console.log(data);

  if (password !== confirmPassword) {
    return { error: "Le password non coincidono." };
  }

  if (!name) {
    return { error: 'Il nome e\' richiesto.' };
  }

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { error: 'E` possibile che questo utente sia in uso.' };
  }

  const passwordHash = await hashPassword(password);

  const newUser: NewUser = {
    email,
    passwordHash,
    role: 'costumer',
    name
  };

  try {
    const [createdUser] = await db.insert(users).values(newUser).returning();

    if (!createdUser) {
      return { error: 'Error interno creando utente...' };
    }
    await setSession(createdUser);

  } catch (error) {
    console.error('Errore durante la creazione dell\'utente:', error);
    return { error: 'Errore interno: impossibile creare l\'utente.' };
  }

  redirect('/dashboard');
});

export async function signOut() {
  cookies().delete('session');
}

const updatePasswordSchema = z
  .object({
    currentPassword: z.string().min(8).max(100),
    newPassword: z.string().min(8).max(100),
    confirmPassword: z.string().min(8).max(100),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export const updatePassword = validatedActionWithUser(
  updatePasswordSchema,
  async (data, _, user) => {
    const { currentPassword, newPassword } = data;

    const isPasswordValid = await comparePasswords(
      currentPassword,
      user.passwordHash
    );

    if (!isPasswordValid) {
      return { error: 'Current password is incorrect.' };
    }

    if (currentPassword === newPassword) {
      return {
        error: 'New password must be different from the current password.',
      };
    }

    const newPasswordHash = await hashPassword(newPassword);

    await Promise.all([
      db
        .update(users)
        .set({ passwordHash: newPasswordHash })
        .where(eq(users.id, user.id)),
    ]);

    return { success: 'Password updated successfully.' };
  }
);

const deleteAccountSchema = z.object({
  password: z.string().min(8).max(100),
});

export const deleteAccount = validatedActionWithUser(
  deleteAccountSchema,
  async (data, _, user) => {
    const { password } = data;

    const isPasswordValid = await comparePasswords(password, user.passwordHash);
    if (!isPasswordValid) {
      return { error: 'Incorrect password. Account deletion failed.' };
    }

    // Soft delete
    await db
      .update(users)
      .set({
        deletedAt: sql`CURRENT_TIMESTAMP`,
        email: sql`CONCAT(email, '-', id, '-deleted')`, // Ensure email uniqueness
      })
      .where(eq(users.id, user.id));

    cookies().delete('session');
    redirect('/login');
  }
);

const updateAccountSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
});

export const updateAccount = validatedActionWithUser(
  updateAccountSchema,
  async (data, _, user) => {
    const { name, email } = data;

    await Promise.all([
      db.update(users).set({ name, email }).where(eq(users.id, user.id)),
    ]);

    return { success: 'Account updated successfully.' };
  }
);