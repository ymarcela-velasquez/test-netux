const AuditorSchema = require('../models/auditor');


    async function postAuditor(auditor) {
        const auditorCreated = await AuditorSchema.create(auditor);
        return auditorCreated;
    }


module.exports = postAuditor;