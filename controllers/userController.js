import User from "../models/userModel.js"
import asyncHandler from "express-async-handler"
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400)
        throw new Error("User already exists")
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.name,

        })
        console.log(user)
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    console.log("hiiit")

    const user = await User.findOne({ email })
    console.log(user)
    if (user) {
        res.json({
            id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(401)
        throw new Error("Invalid email or password")
    }


})


export { registerUser, loginUser };

