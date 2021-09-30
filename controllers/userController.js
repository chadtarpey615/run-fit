import User from "../models/UserModel.js"

const registerUser = async (req, res) => {
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
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
}

export { registerUser }

