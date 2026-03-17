import express from "express";
import connectDb from "./Config/dbConnect.js";
import cors from "cors";
import userRoutes from "./Routes/user.routes.js";
import mapRoutes from "./Routes/map.routes.js";

export const app = express();
app.use(express.json());
app.use(cors({
    origin : "*",
    credentials : true
}))
app.use("/api/user", userRoutes);
app.use("/api/map", mapRoutes);
connectDb(); // Database Connection
