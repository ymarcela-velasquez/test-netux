const express = require('express');
const router = express.Router();
const { postDate, getDates, updateDate, getDateById, getDatesByPatient, getDatesByProfessional }  = require('../services/dates');

router.post('/date', async (req, res) => {
    try {
        const date = await postDate(req.body);
        res.send(date);
    } catch  (error) {
        res.send(error);
    }
})

router.get('/dates', async (req, res) => {
    try {
        const dates = await getDates();
        res.send(dates);
    } catch (error) {
        res.send(error)
    }
})

router.get('/dates/:id',async (req, res) => {
    try {
        const date = await getDateById(req.params.id); 
        res.send(date);
    } catch (error) {
        res.send(error)
    }
})

router.get('/dates/patients/:patientId', async (req, res) => {
    try {
        const dates = await getDatesByPatient(req.params.patientId);
        res.send(dates);
    } catch (error) {
        res.send(error);
    }
})

router.get('/dates/professionals/:professionalId', async (req, res) => {
    try {
        const dates = await getDatesByProfessional(req.params.professionalId);
        res.send(dates);
    } catch (error) {
        res.send(error);
    }
})

router.patch('/date/:id', async (req, res) => {
    try {
        const date = await updateDate(req.params.id);
        res.send(date);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;