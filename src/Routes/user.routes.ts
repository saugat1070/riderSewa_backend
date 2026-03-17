import { Router } from "express";
import rateLimit from "express-rate-limit";
import {validateToken} from "../middleware/auth.middleware.js"
import { profile,loginUser,registerUser, logoutUser } from "../controller/user.controller.js";

const userRoutes = Router();
const userAuthRateLimit = rateLimit({
    windowMs: 60 * 1000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false
});

userRoutes.route("/create").post(registerUser);
userRoutes.route("/login").post(loginUser);
userRoutes.route("/logout").get(userAuthRateLimit, validateToken, logoutUser);
userRoutes.route("/").get(userAuthRateLimit, validateToken, profile);


export default userRoutes;
