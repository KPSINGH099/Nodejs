const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");

// Nest userRouter inside apiRouter
router.use("/users", userRouter);

router.get("/", (req, res) => {
  res.send("API Home");
});

module.exports = router;
