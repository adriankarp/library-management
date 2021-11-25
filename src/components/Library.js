import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Library() {
  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [booksArr, setBooksArr] = useState([]);

  const getBooks = async () => {
    const response = await axios.get('http://localhost:8000/books');
    try {
      setBooksArr(response.data.books);
    } catch (error) {
      alert(error.message);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (bookName && bookAuthor) {
      try {
        await axios.post('http://localhost:8000/books', {
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

  const removeBook = async (index) => {
    if (booksArr) {
      try {
        await axios.delete(
          `http://localhost:8000/books/${booksArr[index]._id}`
        );
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const availableHandler = async (index, available) => {
    try {
      if (available === true) {
        await axios.put(`http://localhost:8000/books/${booksArr[index]._id}`, {
          available: 'false',
        });
      } else if (available === false) {
        await axios.put(`http://localhost:8000/books/${booksArr[index]._id}`, {
          available: 'true',
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getBooks();
  });

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

      <table>
        <tbody>
          <tr>
            <th>Book Name</th>
            <th>Book Author</th>
            <th>Available (true || false)</th>
            <th colSpan="2">Settings</th>
          </tr>
          {booksArr
            ? booksArr.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.available.toString()}</td>
                    <td id="settings">
                      <button
                        onClick={() => availableHandler(index, item.available)}
                      >
                        {item.available === true ? 'Check out' : 'Check in'}
                      </button>

                      <button onClick={() => removeBook(index)}>Remove</button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </React.Fragment>
  );
}
