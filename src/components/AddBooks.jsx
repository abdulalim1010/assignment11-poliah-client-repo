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
    console.log("Selected file:", files[0]);
    setFormData({ ...formData, image: files[0] });
  } else {
    setFormData({ ...formData, [name]: value });
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log("Form submitted");
  console.log(formData);

    const data = new FormData();

    // Append fields except image first
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'image') {
        data.append(key, value);
      }
    });

    // Append image only if exists
    if (formData.image) {
      data.append('image', formData.image);
    }

    try {
      await axios.post('http://localhost:3000/books', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success("✅ Book added successfully!");
      setFormData({ name: '', quantity: '', author: '', category: '', description: '', rating: '', image: null });
    } catch (err) {
      toast.error("❌ Failed to add book.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">📚 Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-5" encType="multipart/form-data">
        
        {/* Book Image */}
        <div>
          <label className="block font-medium mb-1">Book Cover</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="block w-full border border-gray-300 rounded-lg p-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Book Name */}
        <div>
          <label className="block font-medium mb-1">Book Title</label>
          <input
            type="text"
            name="name"
            placeholder="Enter book title"
            value={formData.name}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block font-medium mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="Number of copies"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block font-medium mb-1">Author</label>
          <input
            type="text"
            name="author"
            placeholder="Author name"
            value={formData.author}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="select select-bordered w-full"
          >
            <option value="">Select a category</option>
            <option value="Novel">Novel</option>
            <option value="Thriller">Thriller</option>
            <option value="History">History</option>
            <option value="Drama">Drama</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            placeholder="Short description"
            value={formData.description}
            onChange={handleChange}
            required
            className="textarea textarea-bordered w-full"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block font-medium mb-1">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            placeholder="Enter rating"
            value={formData.rating}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            ➕ Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
