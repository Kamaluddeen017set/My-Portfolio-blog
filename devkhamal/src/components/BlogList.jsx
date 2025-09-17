import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BlogList.css";
const API_BASE_URL = import.meta.env.VITE_API_URL;
import { useAlert } from "./AlertContext";
function BlogList({ action }) {
  const { showAlert } = useAlert();
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch(console.error);
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) {
      showAlert("blog deleted successfully!✔️");
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } else showAlert("Failed to delete blog");
  };

  return (
    <div className="blog-list">
      <h2>{action} Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog._id} className="blog-item">
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              style={{ width: "150px", height: "100px", objectFit: "cover" }}
            />
          )}
          <div className="blog-details">
            <h3>{blog.title}</h3>

            {/* Category preview */}
            <p>
              <strong>Category:</strong>{" "}
              <span className="category-badge">{blog.category || "N/A"}</span>
            </p>

            {/* Tags preview */}
            <p>
              <strong>Tags:</strong>{" "}
              {blog.tags?.length
                ? blog.tags.map((tag, idx) => (
                    <span key={idx} className="tag-badge">
                      {tag}
                    </span>
                  ))
                : "N/A"}
            </p>

            <p>
              <strong>Comments:</strong> {blog.comments?.length || 0}
            </p>
          </div>

          <div className="blog-actions">
            {action === "Edit" && (
              <button onClick={() => navigate(`/admin/edit/${blog._id}`)}>
                Edit
              </button>
            )}
            {action === "Delete" && (
              <button onClick={() => handleDelete(blog._id)}>Delete</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
