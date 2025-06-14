import { div } from 'framer-motion/client';
import React from 'react';
import { NavLink } from 'react-router';

const MYBookCard = ({ book }) => {
  const { title, author, description, rating, publishedDate, image } = book;

  return (
    
    <div>
      
      <div className="card bg-white shadow-md rounded-lg overflow-hidden p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-gray-700"><strong>Author:</strong> {author}</p>
      <p className="text-gray-700"><strong>Published:</strong> {publishedDate}</p>
      <p className="text-gray-700"><strong>Rating:</strong> ⭐ {rating}</p>
      <p className="text-sm mt-2 text-gray-600">{description}</p>
      <div>
      <NavLink to='/login'>  <button className='btn text-white bg-green-700 btn-block'>Buy Now</button></NavLink>
      </div>
    </div>
</div>
  );
};

export default MYBookCard;
