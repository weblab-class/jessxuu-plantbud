const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const JournalEntrySchema = new mongoose.Schema({
  creator: { type: ObjectId, ref: "user" },
  value: { type: String, default: "" },
  timestamp: Date,
});

// compile model from schema
module.exports = mongoose.model("journalentry", JournalEntrySchema);