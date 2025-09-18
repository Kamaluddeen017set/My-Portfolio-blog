import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/LatestBlogs.css";
import { useLocation } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_URL;

function LatestBlogs({ latestTittle }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  // Fetch latest blogs
  const fetchLatestBlogs = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/blogs/latest`);
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setBlogs([]); // fallback
    } finally {
      setLoading(false);
    }
  };

  // Fetch random blog(s)
  const fetchRandomBlogs = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/blogs/random`);
      const data = await res.json();
      setBlogs(Array.isArray(data) ? data : [data]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Run once on mount
  useEffect(() => {
    if (latestTittle) {
      fetchRandomBlogs();
    } else {
      fetchLatestBlogs();
    }
  }, [latestTittle, location.pathname]);

  if (loading) {
    return (
      <div className="load-content">
        <div className="text">Loading~blogs...</div>
        <div className="text">Loading~blogs...</div>
      </div>
    );
  }

  return (
    <section className="latest-blogs-section fadeUp">
      <h2 className={latestTittle ? "explore_head " : "skills_heading"}>
        {latestTittle ? "Explore more Blogs" : "Latest Blog"}
      </h2>
      <hr />
      <div className="latest-cards-wrapper">
        {blogs?.map((blog) => (
          <div key={blog._id} className="latest-blog-card">
            {blog.image && <img src={blog.image} alt={blog.title} />}
            <h3>{blog.title}</h3>
            <p>{(blog.description || blog.excerpt || "").slice(0, 100)}...</p>
            <Link to={`/blog/${blog._id}`}>Read More</Link>
          </div>
        ))}
        <a className="view_all_blog" href="/devkhamal/blog">
          View all
        </a>
      </div>
    </section>
  );
}

export default LatestBlogs;
