const handleRouteErrors = require("../../handleRouteErrors");
const bcrypt = require("bcrypt");
const User = require("../../models/user");
const twilio = require("twilio");

const sendCode = handleRouteErrors(async(req,res)=>{
    const { _id, countryCode, phoneNumber } = req.user;
    const code = Math.floor(100000 + Math.random() * 900000);
    const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);
    await client.messages.create({
        messagingServiceSid: process.env.MESSAGING_SERVICE_SID,
        body: `Welcome to WhizzCart! Your verification code is ${code}`,
        to: `${countryCode}+${phoneNumber}`
    });
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(code.toString(), salt);
    await User.updateOne({ _id }, { phonekey: hashed });
    res.status(200).send("Successfully sent Code")
});

module.exports = sendCode;