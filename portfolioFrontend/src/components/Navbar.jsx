import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({
  handleNavSetion,
  handleNav,
  activeSection,
  setActiveSection,
  menuButtonRef,
}) {
  const location = useLocation();
  useEffect(() => {
    if (handleNav) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [handleNav]);
  useEffect(() => {
    if (location.pathname.startsWith("/blog")) {
      // ✅ Blog page: force highlight
      setActiveSection("blog");
      return;
    }

    // ✅ Home page: scroll-based observer
    const sections = document.querySelectorAll("section, header");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [location.pathname]);

  return (
    <nav>
      <h1>
        DEV<span className="logo">KHAMAL</span>
      </h1>

      <ul>
        <li>
          <Link to="/#home" className={activeSection === "home" ? "line" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/#about"
            className={activeSection === "about" ? "line" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/#skills"
            className={activeSection === "skills" ? "line" : ""}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="/#project"
            className={activeSection === "project" ? "line" : ""}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to="/#testimonial"
            className={activeSection === "testimonial" ? "line" : ""}
          >
            Testimonial
          </Link>
        </li>
        <li>
          <Link to="/blog" className={activeSection === "blog" ? "line" : ""}>
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/#contact"
            className={activeSection === "contact" ? "line" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
      <label className="hamburger">
        <input
          type="checkbox"
          ref={menuButtonRef}
          onClick={() => handleNavSetion(!handleNav)}
        />
        <svg viewBox="0 0 32 32">
          <path
            className="linee line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          />
          <path className="linee" d="M7 16 27 16" />
        </svg>
      </label>
    </nav>
  );
}

export default Navbar;
