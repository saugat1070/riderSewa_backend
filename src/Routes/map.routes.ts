import { Router } from "express";
import { validateToken } from "../middleware/auth.middleware.js";
import { query } from "express-validator";
import {
  getDistanceTime,
  getCoordinate,
  getAutoSuggestion,
} from "../controller/map.controller.js";
const mapRoutes = Router();

mapRoutes
  .route("/get-coordinates")
  .post(
    validateToken,
    getCoordinate,
  );
mapRoutes.route("/get-distance-time").post(
    query("origin").isString().isLength({ min: 3 }),
    query("destination").isString().isLength({min:3}),
    validateToken,
    getDistanceTime);

mapRoutes.route("/auto-suggestion").post(
  query("address").isString(),
  getAutoSuggestion
);

export default mapRoutes;
