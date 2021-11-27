# library-management

Server Side Rendering REST API used for managing books.

- [library-management](#library-management)
  * [Screenshots](#screenshots)
  * [Tech Stack](#tech-stack)
  * [Environment Variables](#environment-variables)
  * [Run Locally](#run-locally)
  * [API Reference](#api-reference)
      - [Get all books](#get-all-books)
      - [Get book](#get-book)
      - [Create book](#create-book)
      - [Update book](#update-book)
      - [Delete book](#delete-book)
  * [Author](#author)
  * [Lessons Learned](#lessons-learned)
  * [Feedback](#feedback)

## Screenshots

[![App Screenshot](https://i.postimg.cc/0QVPhPmb/image.png)](https://postimg.cc/9Rw673Lh)

## Tech Stack

**Client:** React, Axios

**Server:** Node, Express, MongoDB (Mongoose),

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DB_URI`

Make sure the .env file is in the following path

```
./server/config/config.env
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/adriankarp/library-management
```

Go to the project directory

```bash
  cd library-management
```

Install client dependencies

```bash
  npm install
```

Go to the server directory

```bash
  cd server
```

Install server dependencies

```bash
  npm install
```

Start the server from root folder

```bash
  cd ..

  npm start
```

## API Reference

#### Get all books

```http
  GET /books
```

#### Get book

```http
  GET /books/:title
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `title`   | `string` | **Required**. Title of book to fetch |

#### Create book

```http
  POST /books/
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `title`   | `string` | **Required**. Title of book created  |
| `author`  | `string` | **Required**. Author of book created |

#### Update book

```http
  PUT /books/:title
```

| Parameter   | Type      | Description                        |
| :---------- | :-------- | :--------------------------------- |
| `title`     | `string`  | New title for update               |
| `author`    | `string`  | New author for update              |
| `available` | `boolean` | New availability status for update |

#### Delete book

```http
  DELETE /books/:title
```

## Author

- [@adriankarp](https://github.com/adriankarp)

## Lessons Learned

By implementing this project, I enforced my knowledge in the following areas:

- Designing and implementing a REST API
- Implementing a server with Express.js and MongoDB
- Client <-> Frontend data transfer and communication
- Implementing Server Side Rendering in a full-stack project

## Feedback

If you have any feedback, please reach out @ karp.adrian@protonmail.com
