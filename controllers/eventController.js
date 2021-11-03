import Event from "../models/eventModel.js"
import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"
import Mongoose from "mongoose"



const saveEvent = asyncHandler(async (req, res) => {
    const { name, date, distance } = req.body


    const createdEvent = new Event({
        user: req.user._id,
        name,
        date,
        distance
    })

    const { _id } = req.user


    let user

    try {
        user = await User.findById(_id)
    } catch (error) {
        console.log(error)
    }

    console.log(user)



    const sess = await Mongoose.startSession()
    sess.startTransaction()
    await createdEvent.save({ session: sess })
    user.events.push(createdEvent)
    await user.save({ session: sess })
    await sess.commitTransaction()
})


const allEvents = asyncHandler(async (req, res) => {
    const events = await Event.find({})
    res.json(events)
})

const getEventById = asyncHandler(async (req, res) => {
    const eventId = req.params.id

    try {
        const response = await Event.findById(eventId)
        console.log(response.user)
    } catch (error) {

    }

})





const deleteEvent = asyncHandler(async (req, res) => {
    const eventId = req.params.id

    let event
    try {
        event = await Event.findById(eventId).populate("user")

    } catch (error) {
        console.log(error)
    }

    if (!event) {
        console.log("no event found created by user")
    }


    try {
        const sess = await Mongoose.startSession()
        sess.startTransaction()
        await event.remove({ session: sess })
        event.user.events.pull(event)
        await event.user.save({ session: sess })
        await sess.commitTransaction()
    } catch (error) {
        console.log(error)
    }

    res.status(200).json({ message: "Deleted place" })
})

export { saveEvent, allEvents, deleteEvent, getEventById }