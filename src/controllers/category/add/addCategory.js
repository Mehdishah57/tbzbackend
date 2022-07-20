const handleRouteErrors = require("../../../handleRouteErrors");
const Category = require("../../../models/category");
const redis = require("../../../init/redis");
const validate = require("./validate");

const addCategory = handleRouteErrors(async(req,res)=>{
    // Saving category in database
    const validated = await validate(req.body);
    const category = new Category(validated);
    await category.save();
    // Saving category in redis-cache
    const client = await redis();
    const cache = await client.hGetAll("categories");
    if(!cache) return res.status(200).send("Category was added successfully");
    const cachedCategories = JSON.parse(cache.categories);
    cachedCategories.push(category);
    await client.HSET("categories","categories",JSON.stringify(cachedCategories));
    //Final response to user
    res.status(200).send("Category was added successfully");
})

module.exports = addCategory;