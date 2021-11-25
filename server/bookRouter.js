// setting up express router
const express = require('express');
const router = express.Router();

// importing controller methods
const {
  createBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook,
} = require('./bookController.js');

// assigning each method a HTTP verb and route
router.post('/', createBook);

router.get('/', getAllBooks);
router.get('/:id', getBook);

router.put('/:id', updateBook);

router.delete('/:id', deleteBook);

// exporting the router
module.exports = router;
