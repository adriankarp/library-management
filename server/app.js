/* eslint-disable no-unused-vars */

// importing modules
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require('path');

// creating express object
const app = express();

if (process.env.NODE_ENV !== 'PRODUCTION')
  require('dotenv').config({ path: './config/config.env' });

// setting up modules
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        'script-src': ["'self'", "'unsafe-inline'", 'example.com'],
      },
    },
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// importing and using routes
const books = require('./bookRouter');
app.use('/books', books);

// importing and serving the client
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));

// exporting app module
module.exports = app;
