const handleRouteErrors = require("../../handleRouteErrors");
const Category = require("../../models/Category");
const redis = require("../../init/redis");

const getCategory = handleRouteErrors(async(req,res)=>{
    const client = await redis();
    const cache = await client.hGetAll("categories");
    if(cache?.categories) return res.status(200).send(JSON.parse(cache.categories));
    const categories = await Category.find();
    await client.HSET("categories","categories",JSON.stringify(categories));
    res.status(200).send(categories);
})

module.exports = getCategory;