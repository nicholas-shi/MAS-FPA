const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');

    if(!token) {
        return res.status(401).json({msg: 'No token, authorization denied.'});
    }

    try {
        const decoded = jwt.verify(token, process.env.jwtSecret); 
        //jwt.verify takes in the token and the JWT secret token
        // Take the request object and assign a value to req.user
        // decoded.user is the user from the payload (user.id)
        req.user = decoded.user;
        next();
    } catch(err) {
        res.status(401).json({msg: 'Token is not valid.'});
    }
}