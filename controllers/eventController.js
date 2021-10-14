import Event from "../models/eventModel.js"
import asyncHandler from "express-async-handler"

const saveEvent = asyncHandler(async (req, res) => {
    const { name, date, distance } = req.body

    const event = new Event({
        name,
        date,
        distance
    })

    const createdEvent = await event.save()
    res.status(201).json(createdEvent)
})

export { saveEvent }