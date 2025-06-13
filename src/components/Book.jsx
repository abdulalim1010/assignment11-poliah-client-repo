import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="p-4">
      <div className="card bg-base-100 w-full h-full shadow-sm flex flex-col">
        <figure className="h-60 overflow-hidden">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body flex flex-col justify-between">
          <div>
            <h2 className="card-title">{book.title}</h2>
            <p>Category: {book.category}</p>
            <p>Author: {book.author}</p>
            <p>Quantity: {book.quantity}</p>
            <p>Rating: {book.rating}</p>
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Book Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
