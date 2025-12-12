const express = require("express");
const { connectDB } = require("./db");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());

connectDB();

app.use("/users", userRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
