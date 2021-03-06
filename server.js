import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
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

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE")
    next()
})

// Add routes, both API and view
app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function () {

    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
