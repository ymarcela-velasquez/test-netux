const dateSchema = require("../models/dates");
const patientSchema = require("../models/patient");
const professionalSchema = require("../models/professional");

async function postDate(newDate) {
  const patientId = newDate.patient;
  const professionalId = newDate.professional;
  const date = newDate.date;

  const uploadDate = new dateSchema({
    patient: await patientSchema.findById(patientId),
    professional: await professionalSchema.findById(professionalId),
    date,
    assistance: false
  });

  await uploadDate.save();
  return uploadDate;
}

async function updateDate(dateId){
    const date = await dateSchema.findByIdAndUpdate(dateId,{ assistance: true });
    return date;
}

async function getDateById(dateId){
    return await dateSchema.findById(dateId)
                        .populate("patient")
                        .populate("professional");
}

async function getDatesByPatient(patientId){
    return await dateSchema.find({patient: patientId})
    .populate("patient")
    .populate("professional");
}

async function getDatesByProfessional(professionalId){
    return await dateSchema.find({professional: professionalId})
    .populate("patient")
    .populate("professional");
}

async function getDates() {
  return await dateSchema
                .find()
                .populate("patient")
                .populate("professional")
}

module.exports = {
  postDate,
  getDates,
  updateDate,
  getDateById,
  getDatesByPatient,
  getDatesByProfessional
};
