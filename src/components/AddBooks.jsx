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
    image: null,
  });
  const [loading, setLoading] = useState(false);

  const imgbbKey = import.meta.env.VITE_IMGBB_API_KEY;

  if (!imgbbKey) {
    console.error("ImgBB API key is missing! Please check your .env file.");
  }

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const uploadImageToImgBB = async (imageFile) => {
    const data = new FormData();
    data.append("image", imageFile);
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${imgbbKey}`,
      {
        method: "POST",
        body: data,
      }
    );
    const result = await response.json();
    if (result.success) {
      return result.data.url;
    } else {
      throw new Error("Image upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!formData.image) {
        toast.error("Please select an image.");
        setLoading(false);
        return;
      }

      // Upload image and get URL
      const imageUrl = await uploadImageToImgBB(formData.image);

      // Prepare book data with numbers parsed
      const bookData = {
        name: formData.name,
        quantity: Number(formData.quantity),
        author: formData.author,
        category: formData.category,
        description: formData.description,
        rating: Number(formData.rating),
        imageUrl,
      };

      // Send to backend
      await axios.post("https://assignment-polish-eleven.vercel.app/books", bookData);

      toast.success("✅ Book added successfully!");
      setFormData({
        name: '',
        quantity: '',
        author: '',
        category: '',
        description: '',
        rating: '',
        image: null,
      });
    } catch (err) {
      toast.error("❌ Failed to add book.");
      console.error(err);
    }
    setLoading(false);
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
            disabled={loading}
            className="block w-full border border-gray-300 rounded-lg p-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        {/* Book Title */}
        <div>
          <label className="block font-medium mb-1">Book Title</label>
          <input
            type="text"
            name="name"
            placeholder="Enter book title"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
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
            disabled={loading}
            className="input input-bordered w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Uploading..." : "➕ Add Book"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
