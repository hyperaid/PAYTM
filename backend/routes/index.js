const express = require('express');
const router = express.Router();
const UserRouter = require('../model/User');

router.use('/user',UserRouter);


module.exports = router;