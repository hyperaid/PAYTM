const express = require('express');
const dbconnect  = require('./config/dbconnect');
const app = express();
const port = 3000;
const main = require('./routes/index');
import User from './model/User';
import cors from 'cors';
app.use(cors());

app.use('/api/v1', main);
dbconnect();

app.use(express.json());
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    User.create({ name, email, password })
        .then(user => res.json(user))
        .catch(err => res.json(err));
}
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    }
);