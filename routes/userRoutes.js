import path from "path";
import express from "express"
const router = express.Router();
import { registerUser, loginUser } from "../controllers/userController.js"



// router.use(function (req, res) {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

router.get("/", (req, res) => {
    res.send("hello world")
})

router.route("/").post(registerUser)
router.route("/login").post(loginUser)

export default router
