const dotenv = require("dotenv");

const dotenvConfig = () => {
    const NODE_ENV = process.env.NODE_ENV?.trim();
    dotenv.config({ path: `.env.${NODE_ENV}` })
}

module.exports = dotenvConfig;