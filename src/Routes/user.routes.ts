import { Router } from "express";
import {validateToken} from "../middleware/auth.middleware.js"
import { profile,loginUser,registerUser } from "../controller/user.controller.js";

const userRoutes = Router();

userRoutes.route("/create").post(registerUser);
userRoutes.route("/login").post(loginUser);
userRoutes.route("/").get(validateToken,profile);


export default userRoutes;