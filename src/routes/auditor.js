const express = require('express');
const router = express.Router();
const postAuditor  = require('../services/auditor');


router.post('/auditor', async (req, res) => {
    try {
        const auditor = await postAuditor(req.body);
        res.send(auditor);
    } catch  (error) {
        res.send(error);
    }
})

module.exports = router;