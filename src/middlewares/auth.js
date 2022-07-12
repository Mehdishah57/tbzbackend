const jwt = require("jsonwebtoken");
const redis = require("../init/redis");

const auth = async(req, res, next) => {
    const token = req.header("auth");
    if(!token) return res.status(403).send("You must be logged in");
    const client = await redis();
    const revokedToken = await client.get(token);
    if(revokedToken) return res.status(403).send("You must be logged in");
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(403).send("You must be logged in");
    }
}

module.exports = auth;