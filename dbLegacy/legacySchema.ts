import {
  pgTable,
  serial,
  text,
  varchar,
  numeric,
  timestamp,
  boolean,
  date,
} from "drizzle-orm/pg-core";
import { Phone } from "lucide-react";

// Definir la tabla de usuarios
export const users = pgTable('users', {
  user_id: varchar('user_id', { length: 256 }).primaryKey(), // id del usuario desde Clerk
  first_name: text('first_name').notNull(), // Nombre
  last_name: text('last_name').notNull(), // Apellido
  email: text('email').notNull(), // Dirección de correo principal
  profile_image_url: text('profile_image_url'), // URL de la imagen de perfil
  gender: text('gender'), // Género (puede estar vacío)
  id: serial('id'),
  Phone: text('phone'),
});


// Posts Table
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title"),
  content: text("content"),
  author: varchar("author", { length: 256 }).references(() => users.user_id),
  createdAt: timestamp("created_at").defaultNow(),
});

// Portfolio Table
export const portfolio = pgTable("portfolio", {
  id: serial("id").primaryKey(),
  imageUrl: text("image_url"),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Appointments Table
export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 256 }).references(() => users.user_id),
  appointmentDate: timestamp("appointment_date"),
  serviceType: text("service_type"),
  status: text("status"),
});

// Services Table
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  price: numeric("price"),
});

// Reviews Table
export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id", { length: 256 }).references(() => users.user_id),
  rating: numeric("rating"),
  comment: text("comment"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Gallery Table
export const gallery = pgTable("gallery", {
  id: serial("id").primaryKey(),
  imageUrl: text("image_url"),
  caption: text("caption"),
  createdAt: timestamp("created_at").defaultNow(),
});


// Payments Table
export const payments = pgTable('payments', {
  id: serial('id').primaryKey(),
  createdTime: timestamp('created_time').defaultNow(),
  stripeId: varchar('stripe_id', { length: 256 }),
  email: varchar('email', { length: 256 }),
  amount: varchar('amount', { length: 256 }),
  paymentTime: timestamp('payment_time'),
  paymentDate: date('payment_date').defaultNow(),
  currency: varchar('currency', { length: 256 }),
  userId: varchar('user_id', { length: 256 }).references(() => users.user_id),
  customerDetails: varchar('customer_details', { length: 256 }),
  paymentIntent: varchar('payment_intent', { length: 256 }),
});

// Subscriptions Table
export const subscriptions = pgTable('subscriptions', {
  id: serial('id').primaryKey(),
  createdTime: timestamp('created_time').defaultNow(),
  subscriptionId: varchar('subscription_id', { length: 256 }),
  stripeUserId: varchar('stripe_user_id', { length: 256 }),
  status: varchar('status', { length: 256 }),
  startDate: date('start_date').defaultNow(),
  endDate: date('end_date'), // Nullable date
  planId: varchar('plan_id', { length: 256 }),
  defaultPaymentMethodId: varchar('default_payment_method_id', { length: 256 }),
  email: varchar('email', { length: 256 }),
  userId: varchar('user_id', { length: 256 }).references(() => users.user_id),
});

// Subscription Plans Table
export const subscriptionPlans = pgTable('subscriptions_plans', {
  id: serial('id').primaryKey(),
  createdTime: timestamp('created_time').defaultNow(),
  planId: varchar('plan_id', { length: 256 }),
  name: varchar('name', { length: 256 }),
  description: text('description'),
  amount: varchar('amount', { length: 256 }),
  currency: varchar('currency', { length: 256 }),
  interval: varchar('interval', { length: 256 }),
});

// Invoices Table
export const invoices = pgTable('invoices', {
  id: serial('id').primaryKey(),
  createdTime: timestamp('created_time').defaultNow(),
  invoiceId: varchar('invoice_id', { length: 256 }),
  subscriptionId: varchar('subscription_id', { length: 256 }),
  amountPaid: varchar('amount_paid', { length: 256 }),
  amountDue: varchar('amount_due', { length: 256 }),
  currency: varchar('currency', { length: 256 }),
  status: varchar('status', { length: 256 }),
  email: varchar('email', { length: 256 }),
  userId: varchar('user_id', { length: 256 }).references(() => users.user_id),
});

// Type Inference
export type SelectUser = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export type SelectPost = typeof posts.$inferSelect;
export type InsertPost = typeof posts.$inferInsert;

export type SelectPortfolio = typeof portfolio.$inferSelect;
export type InsertPortfolio = typeof portfolio.$inferInsert;

export type SelectAppointment = typeof appointments.$inferSelect;
export type InsertAppointment = typeof appointments.$inferInsert;

export type SelectService = typeof services.$inferSelect;
export type InsertService = typeof services.$inferInsert;

export type SelectReview = typeof reviews.$inferSelect;
export type InsertReview = typeof reviews.$inferInsert;

export type SelectGallery = typeof gallery.$inferSelect;
export type InsertGallery = typeof gallery.$inferInsert;

export type SelectPayment = typeof payments.$inferSelect;
export type InsertPayment = typeof payments.$inferInsert;

export type SelectSubscription = typeof subscriptions.$inferSelect;
export type InsertSubscription = typeof subscriptions.$inferInsert;

export type SelectSubscriptionPlan = typeof subscriptionPlans.$inferSelect;
export type InsertSubscriptionPlan = typeof subscriptionPlans.$inferInsert;

export type SelectInvoice = typeof invoices.$inferSelect;
export type InsertInvoice = typeof invoices.$inferInsert;