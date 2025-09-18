import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Hero from "./components/Hero";
import SocialIcons from "./components/SocialIcons";
import Skills from "./components/Skills";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import About from "./components/About";
import Project from "./components/Project";
import Testimonials from "./components/testimonial";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail"; // ✅ Add this
import ScrollToHash from "./components/ScrollToHash";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import CreateBlog from "./components/CreateBlog";
import BlogList from "./components/BlogList";
import EditBlog from "./components/EditBlog";
import LatestBlogs from "./components/LatestBlogs";
import { useRef, useState } from "react";

const token = localStorage.getItem("token");
function App() {
  const [openNav, setOpenNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [latestTittle, setLatestTittle] = useState(true);
  const menuButtonRef = useRef(null);
  return (
    <div>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <ScrollToHash />
              <Navbar
                menuButtonRef={menuButtonRef}
                handleNavSetion={setOpenNav}
                handleNav={openNav}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
              <ThemeToggle />
              <Slider
                menuButtonRef={menuButtonRef}
                handleNavSetion={setOpenNav}
                handleNav={openNav}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
              <Hero
                latestTittle={latestTittle}
                setLatestTittle={setLatestTittle}
              />
              <SocialIcons />
              <About />
              <Skills />
              <Project />
              <Testimonials />
              <LatestBlogs
                latestTittle={latestTittle}
                setLatestTittle={setLatestTittle}
              />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* Blog Page */}
        <Route
          path="/blog"
          element={
            <>
              <ScrollToHash />
              <Navbar
                menuButtonRef={menuButtonRef}
                handleNavSetion={setOpenNav}
                handleNav={openNav}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
              <Slider
                menuButtonRef={menuButtonRef}
                handleNavSetion={setOpenNav}
                handleNav={openNav}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
              <ThemeToggle />
              <Blog />
              <Footer />
            </>
          }
        />
        {/* Blog Details Page */}
        <Route
          path="/blog/:id"
          element={
            <>
              <ScrollToHash />
              <Navbar
                menuButtonRef={menuButtonRef}
                handleNavSetion={setOpenNav}
                handleNav={openNav}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
              <Slider
                menuButtonRef={menuButtonRef}
                handleNavSetion={setOpenNav}
                handleNav={openNav}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
              <ThemeToggle />
              <BlogDetail
                latestTittle={latestTittle}
                setLatestTittle={setLatestTittle}
              />
              <LatestBlogs
                latestTittle={latestTittle}
                setLatestTittle={setLatestTittle}
              />
              <Footer />
            </>
          }
        />
        <Route path="/admin" element={token ? <AdminPanel /> : <Login />} />
        {token && (
          <>
            <Route path="/admin/create" element={<CreateBlog />} />
            <Route path="/admin/edit" element={<BlogList action="Edit" />} />
            <Route path="/admin/edit/:id" element={<EditBlog />} />

            <Route
              path="/admin/delete"
              element={<BlogList action="Delete" />}
            />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
