import { useNavigate } from "react-router-dom";
import "../styles/AdminPanel.css";

function AdminPanel() {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <h1>Welcome Back</h1>
      <h1>
        DEV <span className="logo">KHAMAL</span>
      </h1>
      <hr />
      <h1 className="skills_heading">Admin Panel</h1>
      <button onClick={() => navigate("/admin/create")}>Add New Blog</button>
      <button onClick={() => navigate("/admin/edit")}>Edit Blog</button>
      <button onClick={() => navigate("/admin/delete")}>Delete Blog</button>
    </div>
  );
}

export default AdminPanel;
