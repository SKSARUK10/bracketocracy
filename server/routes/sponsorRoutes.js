const express = require('express');
const { addsponsor, deletesponsor, updatesponsor, displaybyId, displayall } = require('../controllers/SponsorController');

const router = express.Router();
router.post('/add', addsponsor);
router.get("/display", displayall);
router.get("/display/:id", displaybyId);
router.delete("/delete/:id", deletesponsor);
router.put("/update/:id", updatesponsor);
