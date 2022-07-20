const admin = (req, res, next) => {
    if(!req.user.isAdmin) return res.status(403).send("You don't have required permissions");
    next();
}

module.exports = admin;