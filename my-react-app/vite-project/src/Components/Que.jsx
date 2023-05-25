// //Question: Given an array of numbers, render a list of <li> elements that display each number.
// Example array: [1, 2, 3, 4, 5]
// import React from 'react'
// const arr=[1, 2, 3, 4, 5];
// const Que = () => arr.map(Number=> <li>{Number}</li>);
  
// export default Que

// Question: Given an array of objects representing books, 
// render a list of <li> elements that display the book title and author.

import React from 'react';

const BookList = () => {
  const books = [
    { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  ];

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
