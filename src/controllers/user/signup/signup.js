const handleRouteErrors = require("../../../handleRouteErrors");
const validate = require("./validate");
const User = require("../../../models/user");
const bcrypt = require("bcrypt");

const signup = handleRouteErrors(async(req,res)=>{
    const validated = await validate(req.body);
    const exists = await User.findOne({email: validated.email});
    if(exists) return res.status(400).send("You've already registered");
    const user = new User(validated);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    await user.save();
    const token = user.genAuthToken();
    res.status(200).send(token);
})

module.exports = signup;