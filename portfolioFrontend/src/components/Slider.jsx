import { Link, useLocation } from "react-router-dom";
import "../styles/Slider.css";
import { useRef, useEffect } from "react";
function Slider({ handleNav, activeSection, handleNavSetion, menuButtonRef }) {
  useEffect(() => {
    if (handleNav) {
      document.body.classList.add("no-scroll");
      document.documentElement.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
      document.documentElement.classList.remove("no-scroll");
    };
  }, [handleNav]);

  const handleLinkClick = () => {
    document.getElementById("home").scrollIntoView({
      behavior: "smooth",
    });

    menuButtonRef.current.click();
  };

  return (
    <div className="slider ">
      {handleNav && (
        <ul>
          <li>
            <Link
              to="/#home"
              onClick={handleLinkClick}
              className={activeSection === "home" ? "line" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#about"
              onClick={handleLinkClick}
              className={activeSection === "about" ? "line" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/#skills"
              onClick={handleLinkClick}
              className={activeSection === "skills" ? "line" : ""}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/#project"
              onClick={handleLinkClick}
              className={activeSection === "project" ? "line" : ""}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="/#testimonial"
              onClick={handleLinkClick}
              className={activeSection === "testimonial" ? "line" : ""}
            >
              Testimonial
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={handleLinkClick}
              className={activeSection === "blog" ? "line" : ""}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              onClick={handleLinkClick}
              className={activeSection === "contact" ? "line" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Slider;
