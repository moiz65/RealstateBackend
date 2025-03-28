const mongoose = require("mongoose");

const email = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  recipient: { type: String },
  // cc: { type: String },
  // bcc: { type: String },
  subject: { type: String },
  type: { type: String },
  property: [{
      type: mongoose.Schema.ObjectId,
      ref: "Properties"
  }],
  startDate: { type: String, default: Date.now },
  message: { type: String },
  html: { type: String },
  createByLead: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lead",
  },
  createByContact: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contact",
  },
  salesAgent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Emails", email, "Emails");
