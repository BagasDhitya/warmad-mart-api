import express, { Application, Request, Response } from "express";
import { pool, query } from "./config/db.js";

const app: Application = express();
const port: number = 3000;

app.use(express.json());

app.use("/api/products", async (req: Request, res: Response) => {
  const sql = `SELECT * FROM warmad_products.product WHERE deleted_at IS NULL ORDER BY id ASC`;
  const result = await query(sql);

  res.status(200).send({
    message: "success",
    data: result.rows,
  });
});

app.listen(port, () => {
  console.log("Server running on http://localhost:", port);
});
