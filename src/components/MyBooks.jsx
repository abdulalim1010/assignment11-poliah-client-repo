import React, { useEffect, useState } from 'react';
import MYBookCard from './MYBookCard';
 // Assuming you have a JSON file with book data

const MyBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    // Replace with actual fetch if needed
    fetch('/mysection.json') // or directly import the JSON
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-11/12 mx-auto gap-6 p-6">
      {
        books.map(book => <MYBookCard book={book} key={book.id}></MYBookCard>)
      }
    </div>
  );
};

export default MyBooks;