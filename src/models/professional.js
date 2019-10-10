const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Scheme to create professionals
let professionalSchema = new Schema({
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
  },
  specialty: {
      type: String,
      required: [true, "specialty is required"]
  }
});

const Professional = mongoose.model('Professionals', professionalSchema);

module.exports = Professional;