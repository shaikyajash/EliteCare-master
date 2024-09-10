const mongoose = require('mongoose');

mongoose.set('strictQuery', true);




async function connectToMongoDB(url) {
  try {
    await mongoose.connect(url);
    console.log('MongoDB connected successfully to eliteCare database!');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err.message);
    process.exit(1);
  }
}

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected from MongoDB');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Mongoose disconnected due to application termination');
  process.exit(0);
});

module.exports = {
  connectToMongoDB,
};
