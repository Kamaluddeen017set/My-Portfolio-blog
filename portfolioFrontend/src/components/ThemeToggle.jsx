import { useState, useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../ThemeContext";
import "../styles/ThemeToggle.css";

function ThemeToggle() {
  const { changeTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleThemeChange = (theme, e) => {
    e.preventDefault(); // stop scrolling to top
    changeTheme(theme);
    setOpen(false); // close menu after selection
  };

  // Optional: close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <aside className={`theme-toggle ${open ? "open" : ""}`} ref={menuRef}>
      <a
        href="#"
        className="toggle-btn"
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
      >
        <i className="fa-solid fa-paint-roller"></i>
      </a>

      <div className="theme-options">
        <a
          href="#"
          className="theme-btn lobster"
          onClick={(e) => handleThemeChange("lobster", e)}
        >
          <i className="fa-solid fa-house-tsunami"></i>
        </a>
        <a
          href="#"
          className="theme-btn light"
          onClick={(e) => handleThemeChange("light", e)}
        >
          <i className="fa-solid fa-sun"></i>
        </a>
        <a
          href="#"
          className="theme-btn dark"
          onClick={(e) => handleThemeChange("dark", e)}
        >
          <i className="fa-solid fa-moon"></i>
        </a>
      </div>
    </aside>
  );
}

export default ThemeToggle;
