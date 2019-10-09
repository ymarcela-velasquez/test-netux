const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let auditorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  documentType: {
    type: String,
    required: [true, "document type is required"]
  },
  document: {
      type: String,
      required: [true, "document number is required"]
  }
});

const Auditor = mongoose.model('Auditor', auditorSchema);

module.exports = Auditor;