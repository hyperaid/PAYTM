const express = require('express');
const dbconnect  = require('./config/dbconnect');
const app = express();
const port = 3000;
const main = require('./routes/index');
const User=require('./model/User');
const cors = require('cors');

dbconnect();
app.use(cors());
app.use(express.json());

app.use('/api/v1', main);

 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);