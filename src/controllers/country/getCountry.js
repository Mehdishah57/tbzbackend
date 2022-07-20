const handleRouteErrors = require("../../handleRouteErrors");
const Country = require("../../models/country");
const redis = require("../../init/redis");

const getCountry = handleRouteErrors(async(req,res)=>{
    const client = await redis();
    const cache = await client.hGetAll("countries")
    if(cache?.countries) return res.status(200).send(JSON.parse(cache.countries));
    const countries = await Country.find();
    await client.HSET("countries","countries",JSON.stringify(countries));
    res.status(200).send(countries);
})

module.exports = getCountry;