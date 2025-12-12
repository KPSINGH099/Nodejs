const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const Author = require("../models/Author");

// Create book + auto update relation
router.post("/", async (req, res) => {
  try {
    const { title, genre, authorId } = req.body;

    // 1. Create book
    const book = await Book.create({
      title,
      genre,
      author: authorId
    });

    // 2. Push this book ID inside Author.books[]
    await Author.findByIdAndUpdate(authorId, {
      $push: { books: book._id }
    });

    res.json({
      message: "Book created & relation updated",
      data: book
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get book with author populated
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate("author");
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
