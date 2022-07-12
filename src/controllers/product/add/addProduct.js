const handleRouteErrors = require("../../../handleRouteErrors");
const Product = require("../../../models/product");
const validate = require("./validate");

const addProduct = handleRouteErrors(async(req,res)=>{
    const validated = await validate(req.body);
    validated.owner = req.user._id;
    const product = new Product(validated);
    await product.save();
    res.status(200).send(product);
})

module.exports = addProduct;