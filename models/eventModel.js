import mongoose from "mongoose"


const commentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
})


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

    // creator: {
    //     type:
    //         mongoose.Types.ObjectId,
    //     required: true,
    //     ref: "User"
    // }

    creator: {
        type: String, required: true
    },

    comments: [commentSchema]
})

const Event = mongoose.model("Event", eventSchema)

export default Event;