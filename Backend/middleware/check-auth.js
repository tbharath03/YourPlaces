const HttpError = require("../models/HttpError");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next();
    }
    try {
        const token = req.headers.authorization.split(" ")[1]; // Authorization : 'Bearer TOKEN'
        if (!token) {
            throw new Error("Authentication failed.");
        }
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.userData = { userId: decodedToken.userId };
        next();
    } catch (err) {
        return next(new HttpError("Authentication failed.", 403));
    }
};
