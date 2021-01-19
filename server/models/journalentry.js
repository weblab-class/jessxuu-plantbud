const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const Journalentry = new mongoose.Schema({
  creator: { type: ObjectId, ref: "user" },
  entries: { type: String, default: "" },
});

// compile model from schema
module.exports = mongoose.model("journalentry", Journalentry);