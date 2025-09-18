import { useEffect } from "react";
import "../styles/Hero.css";
import TypingText from "./TypingText"; // Import our typing effect

function Hero({ setLatestTittle }) {
  useEffect(() => {
    setLatestTittle(false);
  }, []);
  return (
    <>
      <section id="home">
        <div className="image_border">
          <img
            src=".\hero_pic.png"
            alt="devKhamal picture"
            className="mypicture"
          />
        </div>

        <h3>
          Hello, I'm Kamaluddin, a{" "}
          <TypingText
            texts={[
              "Full Stack Engineer",
              "Web Developer",
              "React Enthusiast",
              "Freelancer",
            ]}
            typingSpeed={50}
            deletingSpeed={50}
            delay={2000}
          />
        </h3>

        <h1 className="fadeUp">
          I design and build modern, responsive websites.
        </h1>
        <p className="fadeUp">
          I’m a <b>Full Stack developer</b> and <b>designer</b> based in Kano,
          Nigeria. I create modern, responsive, and user-friendly websites that
          bring ideas to life. Over the years, I’ve worked on projects ranging
          from personal web apps to e-commerce platforms, always focusing on
          clean design, performance, and a seamless user experience.
        </p>
      </section>
    </>
  );
}

export default Hero;
