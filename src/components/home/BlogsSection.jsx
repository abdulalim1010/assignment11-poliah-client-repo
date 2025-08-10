// src/components/BlogsSection.jsx
import blogs from "../../data/blogsData";

export default function BlogsSection() {
  return (
    <div className="p-6 ">
      <h2 className="text-5xl font-bold text-center mb-10">Readers' Experiences</h2>
      <div className="space-y-12 max-w-6xl mx-auto">
        {blogs.map(blog => (
          <article key={blog.id} className="flex flex-col md:flex-row items-start border-b pb-8 gap-6">
            
            {/* Left: Medium Image */}
            <div className="flex-shrink-0 w-full md:w-1/3">
              <img
                src={blog.image}
                alt={blog.name}
                className="w-full h-56 object-cover rounded-lg shadow-md"
              />
            </div>

            {/* Right: Story */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">{blog.name}</h3>
              <p className="text-gray-500 mb-4">{blog.role}</p>
              <p className="text-gray-700 leading-relaxed text-justify">{blog.content}</p>
            </div>

          </article>
        ))}
      </div>
    </div>
  );
}
