const express = require('express');
const router = express.Router();
const postPatient  = require('../services/patient');

// Endpoint to create patients
router.post('/patient', async (req, res) => {
    try {
        const patient = await postPatient(req.body);
        res.send(patient);
    } catch  (error) {
        res.send(error);
    }
})

module.exports = router;