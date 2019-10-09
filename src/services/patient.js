const PatientSchema = require('../models/patient');


    async function postPatient(patient) {
        const patientCreated = await PatientSchema.create(patient);
        return patientCreated;
    }


module.exports = postPatient;