const mongoose = require('mongoose');

let connectionPromise;

const connectDatabase = () => {
  if (!process.env.MONGODBURI) {
    return Promise.reject(new Error('MONGODBURI is not configured'));
  }
  if (mongoose.connection.readyState === 1) return Promise.resolve(mongoose.connection);
  if (!connectionPromise) {
    connectionPromise = mongoose.connect(process.env.MONGODBURI).catch((error) => {
      connectionPromise = undefined;
      throw error;
    });
  }
  return connectionPromise;
};

module.exports = { connectDatabase };
