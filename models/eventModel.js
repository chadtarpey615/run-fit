import mongoose from "mongoose"

const eventSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },

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
    },

    creator: {
        type:
            mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    }
})

const Event = mongoose.model("Event", eventSchema)

export default Event;