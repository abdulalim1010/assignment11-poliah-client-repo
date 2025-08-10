import { div } from 'framer-motion/client';
import React from 'react';
import { NavLink } from 'react-router'; // ✅ Use 'react-router-dom' not 'react-router'

const MYBookCard = ({ book }) => {
  const { title, author, description, rating, publishedDate, image } = book;

  return (
    <div>
      
       <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-gray-700"><strong>Author:</strong> {author}</p>
        <p className="text-gray-700"><strong>Published:</strong> {publishedDate}</p>
        <p className="text-gray-700"><strong>Rating:</strong> ⭐ {rating}</p>
        <p className="text-sm mt-2 text-gray-600 line-clamp-3">{description}</p> {/* Optional: clamp to 3 lines */}
      </div>
      <div className="mt-4">
        <NavLink to="/login">
          <button className="btn btn-block bg-green-700 hover:bg-green-800 text-white">
            Buy Now
          </button>
        </NavLink>
      </div>
    </div>
    </div>
    
  );
};

export default MYBookCard;
