const handleRouteErrors = require("../../../handleRouteErrors");
const validate = require("./validate");
const User = require("../../../models/user");

const name = handleRouteErrors(async(req,res)=>{
    const { name } = await validate(req.body);
    const { modifiedCount } = await User.updateOne({_id: req.user._id}, {name});
    if(!modifiedCount) return res.status(400).send("You're name wasn't changed");
    res.status(200).send("You're name was updated successfully")
})

module.exports = name;