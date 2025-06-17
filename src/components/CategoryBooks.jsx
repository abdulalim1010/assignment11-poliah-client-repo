// components/CategoryBooks.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Book from './Book';

const CategoryBooks = () => {
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://y-nine-blush.vercel.app/books')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(book =>
          book.category.toLowerCase() === category.toLowerCase()
        );
        setBooks(filtered);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <p className="text-center mt-10">Loading books...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center capitalize">{category} Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.length ? (
          books.map(book => <Book key={book._id} book={book} />)
        ) : (
          <p className="text-center col-span-full">No books found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryBooks;
