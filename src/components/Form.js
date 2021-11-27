import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');

  const submitHandler = async (event) => {
    event.preventDefault();
    if (bookName && bookAuthor) {
      try {
        await axios.post('/books', {
          title: bookName,
          author: bookAuthor,
        });
      } catch (error) {
        alert('This book is already in the library');
        console.log(error.message);
      }
    } else if (bookName === '' || bookAuthor === '') {
      alert('No book name or author specified');
    }
  };

  return (
    <React.Fragment>
      <form className="bookForm" onSubmit={(e) => submitHandler(e)}>
        <label htmlFor="bookName">Title</label>
        <input
          id="bookName"
          name="bookName"
          type="text"
          placeholder="Title"
          maxLength="40"
          onChange={(e) => setBookName(e.target.value)}
          required
        ></input>
        <label htmlFor="bookAuthor">Author</label>
        <input
          id="bookAuthor"
          name="bookAuthor"
          type="text"
          placeholder="Author"
          maxLength="30"
          onChange={(e) => setBookAuthor(e.target.value)}
          required
        ></input>
        <input id="submit" type="submit" value="ADD NEW BOOK"></input>
      </form>
    </React.Fragment>
  );
};

export default Form;
