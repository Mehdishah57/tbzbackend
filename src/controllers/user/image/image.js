const handleRouteErrors = require("../../../handleRouteErrors");
const validate = require("./validate");
const User = require("../../../models/user");
const cloudinary = require("../../../cloudinary/cloudinary");

const image = handleRouteErrors(async(req,res)=>{
    const { url, id } = await validate(req.body);
    const user = await User.findById(req.user._id);
    if(user.image?.public_id) await cloudinary.uploader.destroy(user.image.public_id);
    const { modifiedCount } = await User.updateOne({_id: req.user._id}, {image: { url, public_id: id }});
    if(!modifiedCount) return res.status(400).send("We couldn't save your image");
    res.status(200).send({url,id});
})

module.exports = image;