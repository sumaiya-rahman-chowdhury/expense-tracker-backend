import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
connectDB()


export default app;
