const express = require("express");
const { addinvitation, showall, deleteinvite} = require("../controllers/invitationController");

const Router = express.Router();

Router.post("/invite/:leagueId", addinvitation); // added by league id 
Router.get("/view", showall);
Router.delete("/delete/:id", deleteinvite);
// Router.get("/viewby/:id", searchleague); // search by league if

module.exports = Router;
console.log("router invitation is ready to use");