import path from "path";
import express from "express"
import { saveEvent, allEvents, deleteEvent, getEventById } from "../controllers/eventController.js"
import { authProtect } from "../middleware/authMiddleware.js"
const router = express.Router();

router.route("/").post(authProtect, saveEvent)
router.get("/all-events", allEvents)
router.get("/:id", getEventById)



export default router