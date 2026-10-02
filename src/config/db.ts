import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export async function query(text: string) {
  const start = Date.now();
  const res = await pool.query(text);
  const duration = Date.now() - start;
  console.log(`Executed query `, { text, duration, rows: res.rowCount });
  return res;
}
