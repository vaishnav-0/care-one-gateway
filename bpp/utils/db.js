// const mongoose = require('mongoose');
const config = require('../config');
var MongoClient = require('mongodb').MongoClient;


const connectDB = async () => {
    try {
        return await MongoClient.connect(config.MONGOURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Atlas connected.');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
        process.exit(1); // Exit the process with an error code
    }
};

module.exports = connectDB;