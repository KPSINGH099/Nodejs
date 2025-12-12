const express = require("express");
const mongoose = require("mongoose");
const authorRoutes = require("./routes/author.routes");
const bookRoutes = require("./routes/book.routes");

const app = express();
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/library")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Register routes
app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
