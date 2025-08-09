import { useParams, useNavigate } from 'react-router';
import { useEffect, useState, useContext } from 'react';
import { Authcontext } from '../components/navbar/authcontext/Authcontext';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(Authcontext);

  useEffect(() => {
    fetch(`https://y-nine-blush.vercel.app/books/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Book not found');
        return res.json();
      })
      .then(data => setBook(data))
      .catch(() => setBook(null));
  }, [id]);

  const handleBorrow = () => {
    if (!user) {
      navigate('/login'); // 🔁 Redirect to login page
      return;
    }

    const borrowInfo = {
      userEmail: user.email,
      bookId: book._id,
      borrowedAt: new Date().toISOString(),
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
      <div className="card shadow-md p-6 bg-white">
        <img src={book.image} alt={book.title} className="w-full h-80 object-cover mb-4" />
        <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
        <p className="mb-1"><strong>Author:</strong> {book.author}</p>
        <p className="mb-1"><strong>Category:</strong> {book.category}</p>
        <p className="mb-1"><strong>Quantity:</strong> {book.quantity}</p>
        <p className="mb-1"><strong>Rating:</strong> {book.rating}</p>
        <div className='flex justify-between'>
          <button onClick={() => navigate('/')} className="btn btn-secondary mt-4">← Back to Book List</button>
          <button onClick={handleBorrow} className="btn btn-primary mt-4">Borrow This Book</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
