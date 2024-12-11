import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  numeric,
} from 'drizzle-orm/pg-core';

// Users Table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: varchar('role', { length: 20 }).notNull().default('customer'), // corrected 'costumer' typo
  profile_image_url: text('profile_image_url'), // URL de la imagen de perfil
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

// Posts Table
export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  author: integer('author').references(() => users.id), // changed numeric to integer
  createdAt: timestamp('created_at').defaultNow(),
});

// Available Appointments Table
export const availableAppointments = pgTable('available_appointments', {
  id: serial('id').primaryKey(),
  appointmentDate: timestamp('appointment_date').notNull(),
  status: text('status').notNull(),
});

// Appointments Table
export const appointments = pgTable('appointments', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(), // changed numeric to integer
  appointmentDate: timestamp('appointment_date').notNull(),
  serviceType: text('service_type').notNull(),
  status: text('status').notNull(),
});

// Services Table
export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  category: text('category').notNull(),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(), // keeping numeric for prices
});

// Reviews Table
export const reviews = pgTable('reviews', {
  name: text('name').notNull(),
  rating: text('rating').notNull(), // keeping numeric for rating
  body: text('body').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Type Inference
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;

export type Appointment = typeof appointments.$inferSelect;
export type NewAppointment = typeof appointments.$inferInsert;

export type AvailableAppointments = typeof availableAppointments.$inferSelect;
export type NewAvailableAppointments = typeof availableAppointments.$inferInsert;

export type Service = typeof services.$inferSelect;
export type NewService = typeof services.$inferInsert;

export type Review = typeof reviews.$inferSelect;
export type NewReview = typeof reviews.$inferInsert;

// Enum for activity types
export enum ActivityType {
  SIGN_UP = 'SIGN_UP',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
  UPDATE_PASSWORD = 'UPDATE_PASSWORD',
  DELETE_ACCOUNT = 'DELETE_ACCOUNT',
  UPDATE_ACCOUNT = 'UPDATE_ACCOUNT',
  CREATE_TEAM = 'CREATE_TEAM',
  REMOVE_TEAM_MEMBER = 'REMOVE_TEAM_MEMBER',
  INVITE_TEAM_MEMBER = 'INVITE_TEAM_MEMBER',
  ACCEPT_INVITATION = 'ACCEPT_INVITATION',
}
