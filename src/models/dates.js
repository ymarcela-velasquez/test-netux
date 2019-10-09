const mongoose = require("mongoose");
const patients = require("./patient");
const professionals = require("./professional");


const Schema = mongoose.Schema;

let dateSchema = new Schema({
  patient:
    {
      type: Schema.Types.ObjectId,
      ref: patients
    },
  professional:
    {
      type: Schema.Types.ObjectId,
      ref: professionals,
    },
  date: {
      type: Date,
  },
  assistance: {
    type: Boolean
  }
});

const newDate = mongoose.model("dates", dateSchema);

module.exports = newDate;
