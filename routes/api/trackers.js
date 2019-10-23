const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const auth = require("../../middleware/auth");

const Tracker = require("../../models/Tracker");

// create new tracker
router.post("/", [
  auth,
  [
    check("position", "Please enter position!")
      .not()
      .isEmpty(),
    check("company", "Please enter company!")
      .not()
      .isEmpty(),
    check("status", "Please select a status!")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newTracker = new Tracker({
        user: req.user.id,
        position: req.body.position,
        company: req.body.company,
        status: req.body.status
      });

      const savedTracker = await newTracker.save();
      res.json(savedTracker);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error.");
    }
  }
]);

// get trackers by status
router.get("/:status", auth, async (req, res) => {
  try {
    const trackers = await Tracker.find({
      user: req.user.id,
      status: req.params.status
    });
    res.json(trackers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

// get trackers by position
router.get("/:position", auth, async (req, res) => {
  try {
    const trackers = await Tracker.find({
      user: req.user.id,
      position: req.params.position
    });
    res.json(trackers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

// get trackers by tag
router.get("/:tag", auth, async (req, res) => {
  try {
    const trackers = await Tracker.find({
      user: req.user.id,
      tags: { $all: [req.params.tag] }
    });
    res.json(trackers);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error.");
  }
});

// Update status
router.post("/status/:newStatus/:id", auth, async (req, res) => {
  try {
    let updatedTracker = await Tracker.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { status: req.params.newStatus, updatedDate: new Date() } }
    );
    res.json(updatedTracker);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
