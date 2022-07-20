const handleRouteErrors = require("../../../handleRouteErrors");
const Country = require("../../../models/country");
const redis = require("../../../init/redis");
const validate = require("./validate");

const addCountry = handleRouteErrors(async(req,res)=>{
    // Saving country in database
    const validated = await validate(req.body);
    const country = new Country(validated);
    await country.save();
    // Saving country in redis-cache
    const client = await redis();
    const cache = await client.hGetAll("countries");
    if(!cache) return res.status(200).send("Country was added successfully");
    const cachedCountries = JSON.parse(cache.countries);
    cachedCountries.push(country);
    await client.HSET("countries","countries",JSON.stringify(cachedCountries));
    //Final response to user
    res.status(200).send("Country was added successfully");
})

module.exports = addCountry;