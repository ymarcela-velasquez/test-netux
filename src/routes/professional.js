const express = require('express');
const router = express.Router();
const postProfessional  = require('../services/professional');


router.post('/professional', async (req, res) => {
    try {
        const professional = await postProfessional(req.body);
        res.send(professional);
    } catch  (error) {
        res.send(error);
    }
})

module.exports = router;