/* eslint-disable no-unused-vars */

// .env file config
if (process.env.NODE_ENV !== 'PRODUCTION')
  require('dotenv').config({ path: './config/config.env' });

// modules importing
const app = require('./app');

// handling uncaughtException on process
process.on('uncaughtException', (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log(`Shuting down due to Uncaught Exceptions`);
  process.exit(1);
});

// connecting the Database
const connectDatabase = require('./config/database');
connectDatabase();

// server Setup
const server = app.listen(
  process.env.PORT,
  console.log(`Server started on port ${process.env.PORT}`)
);

// handling unhandledRejection on process
process.on('unhandledRejection', (err) => {
  console.log(`ERROR: ${err.stack}`);
  console.log(`Server will shut down due to Unhandled Promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
