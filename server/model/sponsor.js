const mongoose = require("mongoose");

const sponsorSchema = mongoose.Schema({
  companyName: {
    type: String,
  },
  website: {
    type: String,
  },
  logo: {
    type: String,
  },
  status: {
    type: Number,
    default:true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

sponsor = mongoose.model("sponsors", sponsorSchema);
module.exports = sponsor;
