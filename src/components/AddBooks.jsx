// components/AddBook.jsx
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddBook = () => {
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    author: '',
    category: '',
    description: '',
    rating: '',
    image: null
  });

  const handleChange = e => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const res = await axios.post('http://localhost:3000/api/books', data);
      toast.success("Book added successfully!");
      setFormData({ name: '', quantity: '', author: '', category: '', description: '', rating: '', image: null });
    } catch (err) {
      toast.error("Failed to add book.");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input type="file" name="image"  accept="image/*" onChange={handleChange} required />
        <input type="text" name="name" placeholder="Book Title" value={formData.name} onChange={handleChange} required />
        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author Name" value={formData.author} onChange={handleChange} required />
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Novel">Novel</option>
          <option value="Thriller">Thriller</option>
          <option value="History">History</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        <textarea name="description" placeholder="Short Description" value={formData.description} onChange={handleChange} required />
        <input type="number" name="rating" min="1" max="5" placeholder="Rating (1-5)" value={formData.rating} onChange={handleChange} required />
        <p className="text-sm bg-white text-gray-600">Book Content: This book explores complex themes in an imaginative and engaging way...</p>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
