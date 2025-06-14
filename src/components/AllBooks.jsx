import React, { useEffect, useState } from 'react';
import Book from './Book';
import { motion } from "framer-motion";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/books') 
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setBooks(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading books...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  // Filter books by search term
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-11/12 mx-auto mt-9">
    <motion.div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
  <motion.h1
    className="text-5xl m-6 font-bold p-4 text-center text-blue-400 inline-block"
    initial={{ x: "100%", color: "#ff0000" }}
    animate={{
      x: ["100%", "-100%"], // moves from right to left off screen
      color: ["#ff0000", "#00ff00", "#0000ff", "#ff0000"]
    }}
    transition={{
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 2,
        ease: "linear"
      },
      color: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear"
      }
    }}
  >
    ALL THE AVAILABLE BOOKS HERE — ALL THE AVAILABLE BOOKS HERE — ALL THE AVAILABLE BOOKS HERE — ALL THE AVAILABLE BOOKS HERE ALL THE AVAILABLE BOOKS HERE
  </motion.h1>
</motion.div>

      {/* Search Field */}
      <div className="mb-6 text-center">
        <input
          type="text"
          placeholder="Search by title, author, or category..."
          className="input input-bordered text-2xl border-2 w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Books Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => <Book key={book._id} book={book} />)
        ) : (
          <p className="text-center col-span-full">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
