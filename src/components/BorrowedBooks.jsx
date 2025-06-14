import React, { useEffect, useState, useContext } from 'react';
import { Authcontext } from '../components/navbar/authcontext/Authcontext';

const BorrowedBooks = () => {
  const { user } = useContext(Authcontext);
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setBorrowedBooks([]);
      setLoading(false);
      return;
    }

    fetch(`http://localhost:3000/borrowed-books?userEmail=${encodeURIComponent(user.email)}`)
      .then(res => res.json())
      .then(data => {
        setBorrowedBooks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch borrowed books', err);
        setLoading(false);
      });
  }, [user]);

  if (loading) return <div>Loading borrowed books...</div>;

  if (!user) return <div>Please log in to see your borrowed books.</div>;

  if (borrowedBooks.length === 0) return <div>You have no borrowed books.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Borrowed Books</h1>
      <ul>
        {borrowedBooks.map(({ _id, bookId, borrowedAt }) => (
          <li key={_id} className="mb-4 border p-4 rounded shadow">
            <p><strong>Book ID:</strong> {bookId}</p>
            <p><strong>Borrowed At:</strong> {new Date(borrowedAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowedBooks;
