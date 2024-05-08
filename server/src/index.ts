import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import financialRecordRouter from "./routes/financial-records";

dotenv.config({ path: "config.env" });

const app: Express = express();
const PORT = process.env.PORT || 3002;
const DB: string = process.env.DATABASE || "";
console.log(DB);
app.use(express.json());

const mongoURI: string = DB;

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.listen(PORT, () => {
  console.log("Server Running on PORT " + PORT);
});
