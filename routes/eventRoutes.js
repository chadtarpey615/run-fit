import path from "path";
import express from "express"
import { saveEvent } from "../controllers/eventController.js"
const router = express.Router();

router.route("/").post(saveEvent)

export default router