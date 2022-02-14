const jwt = require('jsonwebtoken');
const JWT_SECRET_KEY = process.env.JWT_KEY;
require('dotenv').config();

const verifyToken = (req, res, next) => {
    try {
        const clientToken = req.cookies.user;
        const decoded = jwt.verify(clientToken, JWT_SECRET_KEY);

        if (decoded) {
            res.locals.u_id;
            next();
        } else {
            res.status(401).json({ error: 'unauthorized' });
        }
    } catch (e) {
        res.status(401).json({ error: 'token expired' });
    }
};

exports.verifyToken = verifyToken;