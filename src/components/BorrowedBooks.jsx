import React, { useEffect, useState, useContext } from 'react';
import { Authcontext } from '../components/navbar/authcontext/Authcontext';

const BorrowedBooks = () => {
  const { user } = useContext(Authcontext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (!user || !user.email) {
      setBorrowedBooks([]);
      setLoading(false);
      return;
    }

    console.log('Fetching borrowed books for user:', user.email);

    fetch(`https://assignment-polish-eleven.vercel.app/books/borrowed-books?userEmail=${encodeURIComponent(user.email)}`)
      .then(res => res.json())
      .then(data => {
        console.log('Borrowed books data:', data);

        // Check if data is an array, else treat as error
        if (!Array.isArray(data)) {
          setErrorMsg(data.message || 'Unexpected response from server');
          setBorrowedBooks([]);
        } else {
          setErrorMsg(null);
          setBorrowedBooks(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch borrowed books', err);
        setErrorMsg('Failed to fetch borrowed books');
        setLoading(false);
      });
  }, [user]);

  if (loading) return <div>Loading borrowed books...</div>;

  if (!user) return <div>Please log in to see your borrowed books.</div>;

  if (errorMsg) return <div className="text-red-600 font-semibold">Error: {errorMsg}</div>;

  if (borrowedBooks.length === 0) return <div>You have no borrowed books.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Borrowed Books</h1>
      <ul>
        {borrowedBooks.map(({ _id, borrowedAt, returnAt, status, bookDetails }) => (
          <li key={_id} className="mb-6 border p-4 rounded shadow flex gap-4">
            <img
              src={bookDetails.imageUrl}
              alt={bookDetails.name}
              className="w-24 h-32 object-cover rounded"
            />
            <div>
              <h2 className="text-xl font-semibold">{bookDetails.name}</h2>
              <p><strong>Author:</strong> {bookDetails.author}</p>
              <p><strong>Borrowed At:</strong> {new Date(borrowedAt).toLocaleDateString()}</p>
              <p><strong>Return By:</strong> {new Date(returnAt).toLocaleDateString()}</p>
              <p><strong>Status:</strong> {status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowedBooks;
