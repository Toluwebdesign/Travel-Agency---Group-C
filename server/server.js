
import express from 'express';
import 'dotenv/config';
import pg from 'pg';
import cors from 'cors';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './auth.js';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();
const PORT = process.env.PORT || 3000;

// Allow the React frontend to use authentication cookies
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
  })
);

// Better Auth routes — this syntax is for Express 5
app.all('/api/auth/{*any}', toNodeHandler(auth));

// Get tour packages from Neon
app.get('/api/packages', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM packages ORDER BY id'
    );
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Failed to fetch packages',
    });
  }
});

// Check the database connection
app.get('/api/db-check', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ databaseTime: result.rows[0].now });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Database connection failed',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
