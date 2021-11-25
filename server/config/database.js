/* eslint-disable */
const mongoose = require('mongoose');

// creating a database connection using the URI provided in config.env
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`Database is connected with HOST: ${con.connection.host}`);
    })
    .catch((error) => {
      console.log('Database connection failed... exiting now ');
      console.error(error);
      process.exit(1);
    });
};

module.exports = connectDatabase;
