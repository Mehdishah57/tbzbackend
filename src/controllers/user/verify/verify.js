const handleRouteErrors = require("../../../handleRouteErrors");
const validate = require("./validate");
const bcrypt = require("bcrypt");
const User = require("../../../models/user");

const verify = handleRouteErrors(async(req,res)=>{
    const { code } = await validate(req.body);
    const user = await User.findById(req.user._id);
    if(user.verified) return res.status(400).send("You're already a verified user");
    if(!user.phoneKey) return res.status(400).send("Please send a code before verifying")
    const isCodeCorrect = await bcrypt.compare(code.toString(), user.phoneKey || "");
    if(!isCodeCorrect) return res.status(400).send("The code you entered is incorrect");
    user.phoneKey = "";
    user.verified = true;
    await user.save();
    const token = user.genAuthToken();
    res.status(200).send(token);
});

module.exports = verify;