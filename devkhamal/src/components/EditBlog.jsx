import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAlert } from "./AlertContext";
import BlogForm from "./BlogForm";
const API_BASE_URL = import.meta.env.VITE_API_URL;
function EditBlog() {
  const { showAlert } = useAlert();
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/blogs/${id}`);
        const data = await res.json();
        setInitialData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlog();
  }, [id]);

  const handleUpdate = async (updatedBlog) => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedBlog),
    });

    const result = await res.json();
    if (res.ok) {
      showAlert("Blog updated successfully✔️");
      navigate("/admin/edit");
    } else {
      showAlert(result.message || "Failed to update blog");
    }
  };

  if (!initialData) return <p>Loading...</p>;

  return <BlogForm onSubmit={handleUpdate} initialData={initialData} />;
}

export default EditBlog;
