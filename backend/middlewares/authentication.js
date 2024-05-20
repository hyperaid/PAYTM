const jwt=require('jsonwebtoken');
const JWT_SECRET = require('../config/jwtconifg');


function authMiddleware(req, res, next) {
    const authheader = req.headers.authorization;

    if (!authheader) {
        return res.status(401).json({ error: 'Token not found' });
    }
    const token = token.split(' ')[1];

    try {
        const user = verify(token, JWT_SECRET);

        req.userId = user.userId;
        next();
    }
    catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
}


module.exports = {
    authMiddleware
};