import { Router } from "express";

const userRoutes = Router();

userRoutes.route("/create").post();
userRoutes.route("/login").post();
userRoutes.route("/").get();