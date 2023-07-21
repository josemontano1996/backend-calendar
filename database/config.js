const mongoose = require('mongoose');

const dbConnection = async () => {
  console.log(process.env.DB_CNN);
  try {
    await mongoose.connect(process.env.DB_CNN);
    console.log('DB online');
  } catch (error) {
    console.log(error);
    throw new Error('Error starting DB');
  }
};

module.exports = { dbConnection };
