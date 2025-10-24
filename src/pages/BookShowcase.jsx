import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BookShowcase = () => {
  const [books, setBooks] = useState([]);

  // 🔹 Fetch from your backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/showcase`); // ✅ তোমার API URL
        const data = await res.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="min-h-screen py-16 bg-base-200 overflow-hidden">
      <h1 className="text-4xl font-bold text-center text-primary mb-10">
        📚 Featured Books & Authors
      </h1>

      {books.length > 0 ? (
        <motion.div
          className="flex space-x-6 px-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...books, ...books].map((book, i) => (
            <motion.div
              key={i}
              className="min-w-[300px] min-h-[400px] bg-base-100 rounded-2xl shadow-lg border border-base-300 overflow-hidden hover:shadow-xl transition-transform hover:-translate-y-2"
            >
             <img
  src={book.bookImage}  
  alt={book.title}
  className="w-full h-40 object-cover"
/>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {book.title}
                </h3>
                <div className="flex items-center space-x-3">
                  <img
                    src={book.authorImage}
                    alt={book.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <p className="text-base-content font-medium">{book.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-gray-500 mt-20">Loading books...</p>
      )}
    </div>
  );
};

export default BookShowcase;
