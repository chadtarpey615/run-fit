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
        distance,
        creator: req.user.name,
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

const updateEvent = asyncHandler(async (req, res) => {
    const eventId = req.body.id
    console.log("event id line 62", eventId)
    console.log("req.body::", req.body)

    const { name, distance, date } = req.body
    let event
    try {
        event = await Event.findById(eventId)
        console.log("eventtttt:", event)
    } catch (error) {
        console.log(error)
    }

    event.name = name
    event.date = date
    event.distance = distance

    try {
        await event.save()
    } catch (error) {
        console.log(error)
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


const addComment = asyncHandler(async (req, res) => {
    const eventId = req.body.id
    let event
    let comment

    /// when i come back need to get the event id through params

    // console.log("request ::::::: ", req.body.comment)

    try {
        event = await Event.findById(eventId).populate("comments")



    } catch (error) {
        console.log(error)
    }

    comment = req.body
    console.log("event::::::", event)

    const sess = await Mongoose.startSession()
    sess.startTransaction()
    await event.save({ session: sess })
    event.comments.push(comment)
    await event.save({ session: sess })
    await sess.commitTransaction()
})

export { saveEvent, allEvents, deleteEvent, getEventById, updateEvent, addComment }