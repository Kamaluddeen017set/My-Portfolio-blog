import "../styles/About.css";
function About() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section id="about">
        <div className="container-card  bg-yellow-box">
          <div className="about_border fadeUp">
            <img
              src="./about-pic.png"
              alt="about picture"
              className="about_pic"
            />
          </div>
          <div className="about-skills fadeUp">
            <h4>Today, I specialize in:</h4>
            <ul className="skill-list">
              <li>
                <span>Frontend:</span> HTML, CSS, Telwins, JavaScript, React
              </li>
              <li>
                <span>Backend:</span> Node.js, Express
              </li>
              <li>
                <span>Database:</span> MongoDB
              </li>
              <li>
                <span>Tools:</span> Git, GitHub, Cloudinary and many others
              </li>
            </ul>
          </div>
          <div className="about fadeUp">
            <h3>
              About <span>Me</span>
            </h3>
            <p className="lead">
              I’m <b>Kamaluddin Aliyu Ahmad</b>, a Full-Stack Web Developer
              passionate about building clean, scalable, and impactful digital
              solutions
            </p>
            <div className="about-journey">
              <h4>My Journey</h4>
              <p>
                My journey into tech began with the <b>3MTT Program</b> Where I
                gained Foundation of <strong>Software Development</strong> and a
                strong grounding in programming concepts,
                <br /> <strong> problem-solving,</strong> and the fundamentals
                of building software. This program gave me the{" "}
                <strong>discipline</strong> and <strong>structure</strong> I
                needed to start my career in <strong>technology.</strong>
              </p>
              <p>
                Afterward, I continued to grow my skills through online courses
                and self-learning, focusing on{" "}
                <strong>JavaScript, React, Node.js, and MongoDB.</strong> Along
                the way, I built projects that put theory into practice — from
                personal portfolios to full-stack applications. One of my major
                projects is{" "}
                <b>
                  <em>Trust RenewMart, </em>
                </b>
                an e-commerce platform for new and second-hand materials.
              </p>
            </div>
            <p>
              I enjoy turning ideas into <strong>scalable applications</strong>{" "}
              that help <strong>businesses and individuals </strong>grow online.
              Outside coding, I’m constantly exploring emerging technologies and{" "}
              <b>emcrypto trading,</b> which keeps my analytical mindset sharp.
            </p>
            <p>
              I’m always open to new opportunities, collaborations, and
              challenging projects.
            </p>

            <div className="cv_container">
              <button className="about_btn" onClick={scrollToContact}>
                Let’s Work Together
                <div className="star-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
              </button>

              <a
                href="https://drive.google.com/file/d/12jQtgjsyjQ0ObHyKFZTtMIctM0ewz1R6/view?usp=drive_link"
                download="MyCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <label className="label">
                  <input type="checkbox" className="input" />
                  <span className="circle">
                    <svg
                      className="icon"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M12 19V5m0 14-4-4m4 4 4-4"
                      />
                    </svg>
                    <div className="square" />
                  </span>
                  <p className="title" style={{ fontSize: "1rem" }}>
                    Download CV
                  </p>
                  <p className="title">Open</p>
                </label>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
