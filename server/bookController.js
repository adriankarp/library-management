const Book = require('./bookModel');

// POST new book => /books
exports.createBook = async (req, res, next) => {
  const { title, author } = req.body;
  try {
    const book = await Book.create({
      title,
      author,
    });
    if (book) {
      res.status(200).json({
        success: true,
        book,
      });
    } else {
      res.status(400).json({ message: 'Could not create book' });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};

// GET all books => /books
exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    if (books) {
      res.status(200).json({
        success: true,
        books,
      });
    } else {
      res.status(404).json({ message: 'Books not found' });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};

// GET single book => /books/:id
exports.getBook = async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await Book.findById({ _id: id });
    if (book) {
      res.status(200).json({
        success: true,
        book,
      });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};

// PUT update book => /books/:id
exports.updateBook = async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    if (book) {
      if (req.body.title) book.title = req.body.title;
      if (req.body.author) book.author = req.body.author;
      if (req.body.available) book.available = req.body.available;
      await book.save();
      res.status(200).json({
        success: true,
        message: 'Book updated',
        book,
      });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};

// DELETE book => /books/:id
exports.deleteBook = async (req, res, next) => {
  const { id } = req.params;
  try {
    const book = await Book.findById({ _id: id });
    if (book) {
      await book.remove();
      res.status(200).json({
        success: true,
        message: 'Book deleted',
      });
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};
