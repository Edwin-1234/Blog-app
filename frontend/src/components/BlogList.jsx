import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${baseUrl}/api/blogs`);
        setBlogs(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [baseUrl]);

  if (loading) return <p className="text-center mt-10">Loading blogs...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">Error: {error}</p>;
  if (!blogs.length) return <p className="text-center mt-10">No blogs found.</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">All Blogs</h2>
      <ul className="space-y-6">
        {blogs.map(({ _id, title, content, author }) => (
          <li key={_id} className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="mb-2">{content}</p>
            <small className="text-gray-600">By: {author}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
