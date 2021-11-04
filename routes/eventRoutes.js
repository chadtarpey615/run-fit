import path from "path";
import express from "express"
import { saveEvent, allEvents, deleteEvent, getEventById, updateEvent } from "../controllers/eventController.js"
import { authProtect } from "../middleware/authMiddleware.js"
const router = express.Router();

router.route("/").post(authProtect, saveEvent)
router.get("/all-events", allEvents)
router.get("/:id", deleteEvent)
router.route("/:id").get(getEventById).patch(updateEvent)



export default router