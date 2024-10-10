const mongoose = require(`mongoose`);

mongoose
  .connect("mongodb://127.0.0.1:27017/moviesDatabase")
  .then(() => {
    console.log(`Sucessfully connected to MongoDB.`);
  })
  .catch((e) => {
    console.err(`error!`, e.message);
  });

mongoose.set(`debug`, true);

const db = mongoose.connection;
module.exports = db;
