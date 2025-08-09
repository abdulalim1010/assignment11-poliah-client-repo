import React from "react";
import { useNavigate } from "react-router";  // <-- react-router-dom, NOT react-router

const Book = ({ book }) => {
  const navigate = useNavigate();  // hook inside component
  const desc = book.description || "";

  return (
    <div className="bg-white rounded-lg shadow-lg p-5 flex flex-col hover:shadow-xl transition-shadow duration-300">
      <img
        src={book.imageUrl}
        alt={book.name || "Book cover"}
        className="w-full h-52 object-cover rounded-md mb-4"
      />

      <h3 className="text-xl font-semibold mb-1 text-gray-900">{book.name}</h3>
      <p className="text-gray-600 mb-1">
        By <span className="font-medium">{book.author}</span>
      </p>
      <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
        {book.category}
      </p>

      <p className="text-gray-700 flex-grow mb-4">
        {desc.length > 100 ? desc.slice(0, 100) + "..." : desc}
      </p>

      <div className="mb-4">
        <span className="font-semibold">Rating: </span>
        <span className="text-yellow-500">{book.rating} ⭐</span>
      </div>

      <button
        onClick={() => navigate(`/books/${book._id}`)}  // <-- use navigate function
        className="btn btn-primary"
      >
        Details
      </button>
    </div>
  );
};

export default Book;
