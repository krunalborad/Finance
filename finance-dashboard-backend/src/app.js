const express = require("express");
const cors = require("cors");

// create express app first
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// routes import
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const recordRoutes = require("./routes/recordRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

// home route (for browser test)
app.get("/", (req, res) => {
res.send("Finance Dashboard Backend API is running 🚀");
});

// API routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/records", recordRoutes);
app.use("/dashboard", dashboardRoutes);

// export app
module.exports = app;