const mongoose = require('mongoose');

require('dotenv').config({path:'Config/config.env'});

const connectDatabase = async () => {
    try{
        let connection = await mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log('db connected');
        })
    } catch(error) {
        console.log(error);
        throw new Error(error)
    }
}

module.exports = connectDatabase;