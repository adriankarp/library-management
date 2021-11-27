import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
  const [booksArr, setBooksArr] = useState([]);

  const getBooks = async () => {
    const response = await axios.get('/books');
    try {
      setBooksArr(response.data.books);
    } catch (error) {
      alert(error.message);
    }
  };

  const removeBook = async (index) => {
    if (booksArr) {
      try {
        await axios.delete(`/books/${booksArr[index]._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const availableHandler = async (index, available) => {
    try {
      if (available === true) {
        await axios.put(`/books/${booksArr[index]._id}`, {
          available: 'false',
        });
      } else if (available === false) {
        await axios.put(`/books/${booksArr[index]._id}`, {
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
};

export default Table;
