import { useParams, useNavigate } from 'react-router';
import { useEffect, useState, useContext } from 'react';
import { Authcontext } from '../components/navbar/authcontext/Authcontext';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(Authcontext);

  // New state for dates
  const [borrowDate, setBorrowDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  useEffect(() => {
    fetch(`https://assignment-polish-eleven.vercel.app/books/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Book not found');
        return res.json();
      })
      .then(data => setBook(data))
      .catch(() => setBook(null));
  }, [id]);

  const handleBorrow = () => {
    if (!user) {
      navigate('/login'); // Redirect to login if not logged in
      return;
    }

    if (!borrowDate || !returnDate) {
      alert('Please select both borrow date and return date.');
      return;
    }

    if (new Date(returnDate) <= new Date(borrowDate)) {
      alert('Return date must be after borrow date.');
      return;
    }

    const borrowInfo = {
      userEmail: user.email,
      bookId: book._id,
      borrowedAt: borrowDate,
      returnAt: returnDate,
    };

    fetch('http://localhost:3000/books/borrowed-books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(borrowInfo),
    })
      .then(res => res.json())
      .then(() => {
        alert('Book borrowed successfully!');
        navigate('/borrowed-books');
      })
      .catch(err => {
        console.error('Borrow failed:', err);
        alert('Borrowing failed');
      });
  };

  if (!book) return <div className="p-4">Loading or book not found...</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="card shadow-md p-6 bg-white rounded-lg">
        <img
          src={book.imageUrl}
          alt={book.name}
          className="w-full h-80 object-cover mb-4 rounded-md"
        />
        <h2 className="text-3xl font-bold mb-2">{book.name}</h2>
        <p className="mb-1"><strong>Author:</strong> {book.author}</p>
        <p className="mb-1"><strong>Category:</strong> {book.category}</p>
        <p className="mb-1"><strong>Quantity:</strong> {book.quantity}</p>
        <p className="mb-1"><strong>Rating:</strong> {book.rating}</p>
        <p className="mb-4"><strong>Description:</strong> {book.description}</p>

        {/* Date inputs */}
        <div className="mb-4 flex gap-4">
          <div>
            <label className="block font-semibold mb-1">Borrow Date:</label>
            <input
              type="date"
              value={borrowDate}
              onChange={(e) => setBorrowDate(e.target.value)}
              className="input input-bordered"
              min={new Date().toISOString().split('T')[0]} // prevent past dates
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Return Date:</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="input input-bordered"
              min={borrowDate || new Date().toISOString().split('T')[0]} // return date can't be before borrow date
            />
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button onClick={() => navigate('/')} className="btn btn-secondary">
            ← Back to Book List
          </button>
          <button onClick={handleBorrow} className="btn btn-primary">
            Borrow This Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
