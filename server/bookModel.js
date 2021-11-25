const mongoose = require('mongoose');
const nanoid = require('nanoid');
// creating and exporting the book model based on the below schema
const bookSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: nanoid.customAlphabet(
        '1234567890abcdefghijklmnopqrstuvwxyz',
        10
      ),
    },
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      unique: [true, 'This book already exists'],
    },
    author: {
      type: String,
      required: [true, 'Please provide an author'],
    },

    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
