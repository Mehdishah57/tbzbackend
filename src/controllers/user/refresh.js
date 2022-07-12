const handleRouteErrors = require("../../handleRouteErrors");
const User = require("../../models/user");

const refresh = handleRouteErrors(async(req,res)=>{
    const user = await User
        .findById(req.user._id)
        .select("-phoneKey -password")
    const token = user.genAuthToken();
    user.token = token;
    res.status(200).send(user)
})

module.exports = refresh;