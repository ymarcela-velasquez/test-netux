const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patient'); //también se puede llamar server en vez de app
const professionalRoutes = require('./routes/professional');
const dateRoute = require('./routes/dates'); 

app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json());

app.use(patientRoutes);
app.use(professionalRoutes);
app.use(dateRoute);

mongoose.connect('mongodb://localhost:27017/scheduling-api',{useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true},(err, res) => {
    if(err) throw err;
    console.log('database ONLINE');
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})

