import {
  pgTable,
  serial,
  text,
  uuid,
  varchar,
  numeric,
  timestamp,
} from "drizzle-orm/pg-core";

// Users Table
export const users = pgTable("users", {
  id: uuid("id").primaryKey(),
  email: varchar("email", { length: 256 }),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
  password: text("password"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Posts Table
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title"),
  content: text("content"),
  author: uuid("author").references(() => users.id),
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
  userId: uuid("user_id").references(() => users.id),
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
  userId: uuid("user_id").references(() => users.id),
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
  amount: varchar('amount', { length: 256 }), // You can adjust this based on how you store the amount
  paymentTime: varchar('payment_time', { length: 256 }), // Consider converting to `timestamp`
  paymentDate: varchar('payment_date', { length: 256 }), // Consider converting to `date`
  currency: varchar('currency', { length: 256 }),
  userId: varchar('user_id', { length: 256 }),
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
  startDate: varchar('start_date', { length: 256 }), // Consider converting to `date`
  endDate: varchar('end_date', { length: 256 }), // Nullable date
  planId: varchar('plan_id', { length: 256 }),
  defaultPaymentMethodId: varchar('default_payment_method_id', { length: 256 }),
  email: varchar('email', { length: 256 }),
  userId: varchar('user_id', { length: 256 }),
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
  userId: varchar('user_id', { length: 256 }),
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