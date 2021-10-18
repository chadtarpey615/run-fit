import path from "path";
import express from "express"
import { saveEvent, allEvents } from "../controllers/eventController.js"
import { authProtect } from "../middleware/authMiddleware.js"
const router = express.Router();

router.route("/").post(authProtect, saveEvent)
router.route("/all-events").get(allEvents)

export default router