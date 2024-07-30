const express = require("express");
const {
  createMatch,
  getMatchById,
  UpdateMatch,
  deleteMatch,
} = require("../controllers/matchController");

const router = express.Router();
router.post("/create", createMatch);
router.get("/search/:id", getMatchById);
router.delete("/delete/:id", deleteMatch);

module.exports = router;
