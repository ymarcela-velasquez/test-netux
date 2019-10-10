const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patient'); 
const professionalRoutes = require('./routes/professional');
const dateRoute = require('./routes/dates'); 
const auditorRoute = require('./routes/auditor')

app.use(express.urlencoded({ extended: false }))

app.use(express.json());

app.use(patientRoutes);
app.use(professionalRoutes);
app.use(dateRoute);
app.use(auditorRoute);

//Mongodb database connection
mongoose.connect('mongodb://localhost:27017/scheduling-api',{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true},(err, res) => {
    if(err) throw err;
    console.log('database ONLINE');
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})


