const mongoose = require("mongoose");

const Schema = mongoose.Schema;

////Scheme to create patients
let patientSchema = new Schema({
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

const Patient = mongoose.model('Patients', patientSchema);

module.exports = Patient;