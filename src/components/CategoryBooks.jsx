import { useParams } from 'react-router';
import books from '../../public/books.json'; // adjust path if needed

const CategoryBooks = () => {
  const { name: categoryName } = useParams();

  const filteredBooks = books.filter(
    (book) => book.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 capitalize">{categoryName} Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="card shadow-lg p-4 rounded">
              <img src={book.image} alt={book.title} className="h-40 w-full object-cover" />
              <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Quantity: {book.quantity}</p>
              <p>Rating: {book.rating}</p>
              <button className="btn mt-2">Details</button>
            </div>
          ))
        ) : (
          <p>No books found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryBooks;

