// import mongoose from 'mongoose';
 const mongoose = require('mongoose');
 
const dbconnect = () => {
    mongoose.connect("mongodb+srv://abhinavsharma2k19:hMIs642FigCa3rwa@users.xwifskh.mongodb.net/Paytm", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Could not connect to MongoDB', err));
};

module.exports = dbconnect;