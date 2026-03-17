import { Router } from "express";
import {validateToken} from "../middleware/auth.middleware.js"
import { profile,loginUser,registerUser, logoutUser } from "../controller/user.controller.js";

const userRoutes = Router();

userRoutes.route("/create").post(registerUser);
userRoutes.route("/login").post(loginUser);
userRoutes.route("/logout").get(validateToken,logoutUser);
userRoutes.route("/").get(validateToken,profile);


export default userRoutes;
