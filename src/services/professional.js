const ProfessionalSchema = require('../models/professional');


    async function postProfessional(professional) {
        const professionalCreated = await ProfessionalSchema.create(professional);
        return professionalCreated;
    }


module.exports = postProfessional;