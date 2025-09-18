import { useNavigate } from "react-router-dom";
// import "react-quill/dist/quill.snow.css";
import BlogForm from "./BlogForm";
import { useAlert } from "./AlertContext";
const API_BASE_URL = import.meta.env.VITE_API_URL;
function CreateBlog() {
  const navigate = useNavigate();
  const { showAlert } = useAlert();
  const handleCreate = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_BASE_URL}/blogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data), //  data already has title, content, etc.
      });

      const result = await res.json();

      if (res.ok) {
        showAlert("Blog created successfully!✔️");
        navigate("/admin");
      } else {
        showAlert(result.message || "Error creating blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Something went wrong while creating the blog.");
    }
  };

  return <BlogForm onSubmit={handleCreate} />;
}

export default CreateBlog;
