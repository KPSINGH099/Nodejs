const express = require("express");
const bodyParser = require("body-parser");

// Create express app
const app = express();

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import router
const userRoutes = require("./routes/userRoutes");

// Use router for /users
const userRouter = require("./routes/userRouter");

app.use("/", userRouter);
app.use("/users", userRoutes);
//app.use("/", userRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
