import dotenv from 'dotenv';
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

dotenv.config();

const db = drizzle(sql);

export default db;


