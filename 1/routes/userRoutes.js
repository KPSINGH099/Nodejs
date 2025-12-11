const express = require("express");
const router = express.Router();

// --- Middleware specific to all /users routes ---
const logMiddleware = (req, res, next) => {
  console.log("Middleware: Request received for /users");
  next();  // passes control to next handler
};

// Apply middleware to router
router.use(logMiddleware);

/*
  --- Example route handlers ---
  Demonstrates:
  ✔ Array syntax of middlewares/handlers
  ✔ Using next()
*/
const validateUser = (req, res, next) => {
  console.log("Validator middleware");
  next();
};

const finalHandler = (req, res) => {
  res.send("Final handler: User route reached");
};

// Route using array of handlers
router.get(
  "/info",
  [validateUser, finalHandler]   // array syntax
);

// Chaining for multiple HTTP methods on SAME ROUTE
router
  .route("/profile")
  .get((req, res) => {
    res.send("GET: User profile");
  })
  .post((req, res) => {
    res.send({
      message: "POST: User profile saved",
      body: req.body,
    });
  })
  .put((req, res) => {
    res.send("PUT: User profile updated");
  })
  .delete((req, res) => {
    res.send("DELETE: User profile removed");
  });

module.exports = router;
