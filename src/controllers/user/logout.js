const handleRouteErrors = require("../../handleRouteErrors");
const redis = require("../../init/redis");

const logout = handleRouteErrors(async(req,res)=>{
    const client = await redis();
    await client.del(req.user._id);
    await client.set(req.token, req.token);
    const jwtExpiryDate = new Date(req.user.exp*1000);
    const currentDate = new Date();
    const expiryDate = ((jwtExpiryDate - currentDate) / 1000).toFixed(0);
    await client.expire(req.token, expiryDate);
    res.status(200).send("Successfully logged out");
})

module.exports = logout;