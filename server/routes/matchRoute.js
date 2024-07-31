const express = require("express");
const { createMatch,updateMatch } = require("../controllers/matchController");

const router = express.Router();
router.post("/create", createMatch);
// // router.get("/show", getAllMatches);
// // router.get("/search/:id", getMatchById);
// // router.delete("/delete/:id", deleteMatch);
// router.put("/update/:id", updateMatch);
router.put("/update/:id",updateMatch);
module.exports = router;
