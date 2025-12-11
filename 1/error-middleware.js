const express = require("express");
const app = express();

// Normal route that throws error
app.get("/test", (req, res, next) => {
  const error = new Error("Something went wrong!");
  error.status = 500;
  next(error);   // Pass error to error middleware
});

// Error-handling middleware (MUST be after all routes)
app.use((err, req, res, next) => {
  console.error("Error caught:", err.message);

  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

app.listen(3000, () => console.log("Server running"));
