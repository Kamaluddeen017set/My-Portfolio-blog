import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";
import "react-quill/dist/quill.snow.css";
import "../styles/BlogDetail.css";
import ShareMenu from "./ShareMenu";
const API_BASE_URL = import.meta.env.VITE_API_URL;

function BlogDetail({ setLatestTittle }) {
  useEffect(() => {
    setLatestTittle(true);
  }, []);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [liked, setLiked] = useState(false);
  const [newComment, setNewComment] = useState("");

  let anonId = localStorage.getItem("anonId");
  if (!anonId) {
    anonId = crypto.randomUUID();
    localStorage.setItem("anonId", anonId);
  }

  // Fetch blog details
  useEffect(() => {
    fetch(`${API_BASE_URL}/blogs/${id}`)
      .then(async (res) => {
        const text = await res.text();
        return JSON.parse(text);
      })
      .then((data) => setBlog(data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  // ✅ Update document title + description dynamically
  useEffect(() => {
    if (!blog) return;

    // Title
    document.title = blog.title || "DevKhamal Blog";

    // Meta description
    const description = blog.excerpt || blog.content?.slice(0, 150) || "";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = description;
  }, [blog]);

  // Handle Like Toggle

  const handleLike = async () => {
    // Optimistically update UI immediately
    setLiked(!liked);
    setBlog((prev) => ({
      ...prev,
      likes: liked ? prev.likes - 1 : prev.likes + 1,
    }));

    try {
      const res = await fetch(`${API_BASE_URL}/blogs/${id}/like`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ anonId }),
      });

      const data = await res.json();

      setBlog((prev) => ({ ...prev, likes: data.likes }));
    } catch (err) {
      console.error("Like failed:", err);

      setLiked(liked);
      setBlog((prev) => ({
        ...prev,
        likes: liked ? prev.likes + 1 : prev.likes - 1,
      }));
    }
  };

  // Add Comment
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [openComment, setOpenComment] = useState(false);

  const handleComment = async (e) => {
    e.preventDefault();
    setOpenComment(!openComment);

    const res = await fetch(`${API_BASE_URL}/blogs/${id}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, comment: newComment }),
    });

    const data = await res.json();
    setBlog((prev) => ({ ...prev, comments: data.comments }));

    await fetch("https://formsubmit.co/ajax/807acf1b8279e881d111297b8c3f0b55", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        Name: name,
        Email: email,
        Comment: newComment,
        BlogTitle: blog.title,
      }),
    });

    setNewComment("");
    setName("");
    setEmail("");
  };

  if (!blog) return <p>Loading...</p>;

  return (
    <article className="blog-detail">
      <h1 className="skills_heading">{blog.title}</h1>
      <p className="date">
        {new Date(blog.date).toLocaleDateString("en-US", {
          dateStyle: "long",
        })}
      </p>
      <img className="main-Image" src={blog.image} alt={blog.title} />

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <p className="author">author: {blog.author}</p>

      {/* Like + Share */}
      <div className="like-container">
        <button onClick={handleLike}>
          <FontAwesomeIcon icon={faThumbsUp} size="lg" />
        </button>
        <p>{blog.likes || 0} likes</p>
        <ShareMenu blog={blog} />
      </div>

      {/* Comment Section */}
      <div className="comment-section">
        <button
          className="add-comment"
          onClick={() => setOpenComment(!openComment)}
        >
          <FontAwesomeIcon icon={faComment} size="lg" />
          add Comment
        </button>

        <div className="displa-comment">
          {openComment && (
            <form onSubmit={handleComment} style={{ marginTop: "10px" }}>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                required
              />
              <button type="submit">Comment</button>
            </form>
          )}

          <ul>
            <p
              style={{
                fontSize: "25px",
                color: "var(--sc)",
                marginTop: "-25px",
              }}
            >
              Comments
            </p>
            <hr style={{ width: "105%", height: "1px", marginLeft: "-25px" }} />
            {Array.isArray(blog.comments) &&
              blog.comments.map((c, i) => (
                <li key={i}>
                  <p
                    className={
                      c.email === "kamaluddeenaliyuahmad017@gmail.com" ||
                      c.email === "kamaluddeenaliyuahmad99@gmail.com"
                        ? "admin"
                        : "visiter"
                    }
                  >
                    {c.name}{" "}
                    <span>
                      {c.email === "kamaluddeenaliyuahmad017@gmail.com" ||
                      c.email === "kamaluddeenaliyuahmad99@gmail.com"
                        ? "author"
                        : ""}
                    </span>
                  </p>
                  <p className="comment">{c.text}</p>
                  <small>{new Date(c.date).toLocaleString()}</small>
                  <br />
                  <hr />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default BlogDetail;
