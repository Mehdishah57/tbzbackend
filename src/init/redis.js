const redis = require("redis");

const getRedis = async () => {
    try {
        const client = redis.createClient(process.env.REDIS_URL);
        await client.connect();
        return client;
    } catch (error) {
        console.log("Server couldn't connect to redis server")
        process.exit(-1);
    }
}

module.exports = getRedis;