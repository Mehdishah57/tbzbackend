const handleRouteErrors = require("../../../handleRouteErrors");
const validate = require("./validate");
const bcrypt = require("bcrypt");
const User = require("../../../models/user");

const login = handleRouteErrors(async(req,res)=>{
    const {email, password} = await validate(req.body);
    const user = await User.findOne({email});
    if(!user) return res.status(404).send("Email / Password you've entered is incorrect");
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(!isPasswordCorrect) return res.status(404).send("Email / Password you've entered is incorrect");
    const token = user.genAuthToken();
    res.status(200).send(token);
})

module.exports = login;