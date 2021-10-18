import path from "path";
import express from "express"
import { saveEvent, allEvents } from "../controllers/eventController.js"
import { authProtect } from "../middleware/authMiddleware.js"
const router = express.Router();

router.route("/").post(authProtect, saveEvent)
router.get("/all-events", allEvents)

export default router