const express = require("express");
const router = express.Router();
const { getDB } = require("../db");

// CREATE
router.post("/", async (req, res) => {
  const db = getDB();
  const result = await db.collection("users").insertOne(req.body);
  res.json(result);
});

// READ ALL
router.get("/", async (req, res) => {
  const db = getDB();
  const users = await db.collection("users").find().toArray();
  res.json(users);
});

// READ BY ID
router.get("/:id", async (req, res) => {
  const db = getDB();
  const { ObjectId } = require("mongodb");
  const user = await db.collection("users").findOne({ _id: new ObjectId(req.params.id) });
  res.json(user);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const db = getDB();
  const { ObjectId } = require("mongodb");
  const updated = await db.collection("users").updateOne(
    { _id: new ObjectId(req.params.id) },
    { $set: req.body }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const db = getDB();
  const { ObjectId } = require("mongodb");
  const deleted = await db.collection("users").deleteOne({
    _id: new ObjectId(req.params.id)
  });
  res.json(deleted);
});

module.exports = router;
