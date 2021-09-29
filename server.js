import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js";
const app = express();
const PORT = process.env.PORT || 3001;
dotenv.config()

connectDB();
// Define middleware here
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("/", (req, res) => {
    res.send("API is running")
})

// Add routes, both API and view
app.use("/api/users", userRoutes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function () {

    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
