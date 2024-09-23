CREATE TABLE IF NOT EXISTS "appointments" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(256),
	"appointment_date" timestamp,
	"service_type" text,
	"status" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "gallery" (
	"id" serial PRIMARY KEY NOT NULL,
	"image_url" text,
	"caption" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invoices" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_time" timestamp DEFAULT now(),
	"invoice_id" varchar(256),
	"subscription_id" varchar(256),
	"amount_paid" varchar(256),
	"amount_due" varchar(256),
	"currency" varchar(256),
	"status" varchar(256),
	"email" varchar(256),
	"user_id" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "payments" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_time" timestamp DEFAULT now(),
	"stripe_id" varchar(256),
	"email" varchar(256),
	"amount" varchar(256),
	"payment_time" timestamp,
	"payment_date" date DEFAULT now(),
	"currency" varchar(256),
	"user_id" varchar(256),
	"customer_details" varchar(256),
	"payment_intent" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "portfolio" (
	"id" serial PRIMARY KEY NOT NULL,
	"image_url" text,
	"description" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text,
	"content" text,
	"author" varchar(256),
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reviews" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" varchar(256),
	"rating" numeric,
	"comment" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "services" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"price" numeric
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subscriptions_plans" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_time" timestamp DEFAULT now(),
	"plan_id" varchar(256),
	"name" varchar(256),
	"description" text,
	"amount" varchar(256),
	"currency" varchar(256),
	"interval" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "subscriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_time" timestamp DEFAULT now(),
	"subscription_id" varchar(256),
	"stripe_user_id" varchar(256),
	"status" varchar(256),
	"start_date" date DEFAULT now(),
	"end_date" date,
	"plan_id" varchar(256),
	"default_payment_method_id" varchar(256),
	"email" varchar(256),
	"user_id" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" varchar(256) PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"profile_image_url" text,
	"gender" text,
	"id" serial NOT NULL,
	"phone" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "appointments" ADD CONSTRAINT "appointments_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "invoices" ADD CONSTRAINT "invoices_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "payments" ADD CONSTRAINT "payments_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts" ADD CONSTRAINT "posts_author_users_user_id_fk" FOREIGN KEY ("author") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reviews" ADD CONSTRAINT "reviews_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
