const express = require('express');
const router = express.Router();
const { postDate, getDates, updateDate, getDateById, getDatesByPatient, getDatesByProfessional, getDateByDates }  = require('../services/dates');

// Endpoint to create appointment
router.post('/date', async (req, res) => {
    try {
        const date = await postDate(req.body);
        res.send(date);
    } catch  (error) {
        res.send(error);
    }
})

// Endpoint to create an auditor
router.get('/dates', async (req, res) => {
    try {
        const dates = await getDates();
        res.send(dates);
    } catch (error) {
        res.send(error)
    }
})

//Endpoint to check appointments by specific id
router.get('/dates/:id',async (req, res) => {
    try {
        const date = await getDateById(req.params.id); 
        res.send(date);
    } catch (error) {
        res.send(error)
    }
})

// Endpoint to list appointments assigned to a patient
router.get('/dates/patients/:patientId', async (req, res) => {
    try {
        const dates = await getDatesByPatient(req.params.patientId);
        res.send(dates);
    } catch (error) {
        res.send(error);
    }
})

// Endpoint to list all appointments with start date and end date
router.get('/datesByDays', async (req, res) => {
    try {
        const firstDate = new Date(String(req.query.firstDate));
        const lastDate = new Date(String(req.query.lastDate));

        const dates = await getDateByDates(firstDate, lastDate);
        res.send(dates);
    } catch (error) {
        console.log(error)
        res.send(error);
    }
})

// Endpoint to list appointments assigned to a professional
router.get('/dates/professionals/:professionalId', async (req, res) => {
    try {
        const dates = await getDatesByProfessional(req.params.professionalId);
        res.send(dates);
    } catch (error) {
        res.send(error);
    }
})

// Endpoint to consult appointment by id and confirm attendance
router.patch('/date/:id', async (req, res) => {
    try {
        const date = await updateDate(req.params.id);
        res.send(date);
    } catch (error) {
        res.send(error);
    }
})


module.exports = router;