import mongoose from "mongoose"

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    date: {
        type: Date,

    },

    distance: {
        type: Number,
        required: true
    }
})

const Event = mongoose.model("Event", eventSchema)

export default Event;