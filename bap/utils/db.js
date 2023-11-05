const mongoose = require('mongoose');
const config = require('../config');

const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGOURI, {
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