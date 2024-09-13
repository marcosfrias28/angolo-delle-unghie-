import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Load environment variables from .env.local
config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema.ts", // Adjust path to schema if needed
  out: "./drizzle/migrations",
  dialect: "postgresql", // Specify PostgreSQL dialect
  dbCredentials: {
    url: process.env.DATABASE_URL // Use connectionString instead of url
  },
});