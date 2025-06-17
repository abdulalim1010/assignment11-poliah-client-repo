import React, { useEffect, useState } from 'react';
import Book from './Book';
import { motion } from "framer-motion";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('card'); // 'card' or 'table'

  useEffect(() => {
    fetch('https://y-nine-blush.vercel.app/books') 
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

  const filteredBooks = books.filter(book =>
    (book.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (book.author || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (book.category || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  const text = " ALL THE AVAILABLE BOOKS HERE — ";

  return (
    <div className="w-11/12 mx-auto mt-9">
      {/* Animated Text */}
      <div style={{ overflow: "hidden", whiteSpace: "nowrap" }} className="bg-white mb-6">
        <motion.div
          style={{ display: "inline-block" }}
          animate={{
            x: ["0%", "-100%"],
            color: ["#ff0000", "#00ff00", "#0000ff", "#ff0000"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            },
            color: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
        >
          <span className="text-5xl font-bold text-blue-500">
            {text.repeat(20)}
          </span>
        </motion.div>
      </div>

      {/* Search + View Toggle */}
      <div className="mb-6 flex flex-col md:flex-row items-center  gap-4">
        <input
          type="text"
          placeholder="Search by title, author, or category..."
          className="input input-bordered text-xl border-2 w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="select select-bordered text-xl"
          value={viewMode}
          onChange={(e) => setViewMode(e.target.value)}
        >
          <option value="card">Card View</option>
          <option value="table">Table View</option>
        </select>
      </div>

      {/* Conditional Rendering */}
      {filteredBooks.length > 0 ? (
        viewMode === 'card' ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {filteredBooks.map(book => <Book key={book._id} book={book} />)}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {filteredBooks.map(book => (
                  <tr key={book._id}>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.category}</td>
                    <td>{book.quantity}</td>
                    <td>{book.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ) : (
        <p className="text-center">No books found.</p>
      )}
    </div>
  );
};

export default AllBooks;
