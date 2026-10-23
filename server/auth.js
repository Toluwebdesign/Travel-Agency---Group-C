import 'dotenv/config';
import { betterAuth } from 'better-auth';
import pg from 'pg';

const { Pool } = pg;

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
  }),

  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  trustedOrigins: [process.env.FRONTEND_URL || 'http://localhost:5173'],

  emailAndPassword: {
    enabled: true,
  },
});