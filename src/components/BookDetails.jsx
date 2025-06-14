import { useParams, Link } from 'react-router';
import { useEffect, useState } from 'react';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Book not found');
        return res.json();
      })
      .then(data => setBook(data))
      .catch(() => setBook(null));
  }, [id]);

  if (!book) return <div className="p-4">Loading or book not found...</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="card shadow-md p-6 bg-white">
        <img src={book.image} alt={book.title} className="w-full h-80 object-cover mb-4" />
        <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
        <p className="mb-1"><strong>Author:</strong> {book.author}</p>
        <p className="mb-1"><strong>Category:</strong> {book.category}</p>
        <p className="mb-1"><strong>Quantity:</strong> {book.quantity}</p>
        <p className="mb-1"><strong>Rating:</strong> {book.rating}</p>
        <div className='flex justify-between'>
        <Link to="/" className="btn btn-secondary mt-4">← Back to Book List</Link>
        <button className='btn btn-primary'>borrow the book</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

