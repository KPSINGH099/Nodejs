const express = require("express");
const router = express.Router();

/* -----------------------------
   1) BASIC ROUTE
------------------------------ */
router.get("/basic", (req, res) => {
  res.send("Basic GET route working");
});

/* -----------------------------
   2) ROUTE USING BODY-PARSER
------------------------------ */
router.post("/body-parser", (req, res) => {
  res.send({
    message: "Data received using body-parser",
    data: req.body
  });
});

/* -----------------------------
   3) ROUTE WITH MIDDLEWARE
------------------------------ */
const myMiddleware = (req, res, next) => {
  console.log("Middleware executed");
  next();
};

router.get("/with-middleware", myMiddleware, (req, res) => {
  res.send("Route with middleware executed successfully");
});

/* -----------------------------
   4) ROUTE USING next()
------------------------------ */
const step1 = (req, res, next) => {
  console.log("Step 1 executed");
  next(); // goes to step2
};

const step2 = (req, res) => {
  res.send("Step 2 executed after next()");
};

router.get("/with-next", step1, step2);

/* -----------------------------
   5) ARRAY SYNTAX FOR HANDLERS
------------------------------ */
const validate = (req, res, next) => {
  console.log("Validation completed");
  next();
};

const finalHandler = (req, res) => {
  res.send("Array of route handlers executed");
};

router.get("/array-handlers", [validate, finalHandler]);

/* -----------------------------
   6) ROUTE CHAINING FOR METHODS
------------------------------ */
router
  .route("/chained-route")
  .get((req, res) => res.send("GET request on chained-route"))
  .post((req, res) => res.send("POST request on chained-route"))
  .put((req, res) => res.send("PUT request on chained-route"))
  .delete((req, res) => res.send("DELETE request on chained-route"));

module.exports = router;
