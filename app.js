const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
// const sequelize = require('./database/db')
// var jwt = require('jsonwebtoken');
const config = require('./config/config.json');

app.use(express.json());

const userRouter = require('./routers/user.js');
// const appointmentRouter = require('./routers/appointment.js');

app.use('/api/user', userRouter);
// app.use('/api/appointment', appointmentRouter)


app.listen(process.env.PORT, () => {
    console.log('Se ha levantado tremendo puerto.')
})