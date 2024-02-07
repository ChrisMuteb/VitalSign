const jwt = require('jsonwebtoken');
const { unauthorized } = require("../constants/statusCodes");


const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token']; // or token = req.header('Authorization') -- format: 'Bearer <token>'

    if (!token) {
        res.status(unauthorized).json({ message: 'Unauthorized' });
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                res.status(unauthorized).json({ auth: false, message: "U failed to authenticate" })
            }

            req.userId = decoded.id;// variable called userId
            next();

        })
    } catch (error) {
        return res.status(unauthorized).json({ message: "Invalid token" });
    }
}