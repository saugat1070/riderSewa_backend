import express from "express";
import connectDb from "./Config/dbConnect.js";
import cors from "cors";

export const app = express();
app.use(express.json());
app.use(cors({
    origin : "*",
    credentials : true
}))
connectDb(); // Database Connection
