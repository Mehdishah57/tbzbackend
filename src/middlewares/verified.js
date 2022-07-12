const verified = (req, res, next) => {
    if(!req.user?.verified) return res.status(403).send("You'll need to verify your account first");
    next();
}

module.exports = verified;