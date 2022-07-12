const mongoose = require("mongoose");

const connection = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to Database");
    }catch(error){
        console.error("Unable to connect to database"+error);
        process.exit(1);
    }
}

module.exports = connection;