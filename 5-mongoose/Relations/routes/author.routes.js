const express = require("express");
const router = express.Router();
const Author = require("../models/Author");

// Create Author
router.post("/", async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.json(author);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get author + their books populated
router.get("/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).populate("books");
    res.json(author);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
