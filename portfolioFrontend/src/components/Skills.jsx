import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Skills.css";

const skills = [
  {
    name: "HTML",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790038/HTML_dohtmb.png",
    level: 95,
    type: "Language",
  },
  {
    name: "CSS",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790046/CSS_hk0vtr.png",
    level: 95,
    type: "Style",
  },
  {
    name: "JavaScript",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790063/javascript_fl9erm.png",
    level: 90,
    type: "Language",
  },
  {
    name: "React.js",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790014/react_wmvwlj.png",
    level: 85,
    type: "Framework",
  },
  {
    name: "Node.js",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790036/node.js_kuxqku.png",
    level: 75,
    type: "Runtime",
  },
  {
    name: "Express.js",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755899992/icons8-express-js-128_momuty.png",
    level: 75,
    type: "Framework",
  },
  {
    name: "Telwins",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790067/TELWINS_yfnwuc.png",
    level: 80,
    type: "Framework",
  },
  {
    name: "Python",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790013/python_nf9zgs.png",
    level: 70,
    type: "Language",
  },
  {
    name: "PHP",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790052/php_tg3d4t.png",
    level: 65,
    type: "Language",
  },
  {
    name: "MongoDB",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790043/mongodb_xzwgmu.png",
    level: 95,
    type: "Database",
  },
  {
    name: "Canva",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1755790130/camva_sc3jci.png",
    level: 80,
    type: "Design",
  },
  {
    name: "Figma",
    logo: "https://res.cloudinary.com/dg1zkgl6n/image/upload/f_auto,q_auto/v1758093301/62c6bc25eee9410fe137d91f_ksjcue.png",
    level: 50,
    type: "Design",
  },
  {
    name: "Cloudinary",
    logo: "https://cloudinary-res.cloudinary.com/image/upload/f_auto,q_auto/c_scale,w_180/website/cloudinary_web_favicon.png",
    level: 90,
    type: "Imagebase",
  },
];

const proffessionalskills = [
  { name: "Communication", level: 90 },
  { name: "Teamwork", level: 85 },
  { name: "Problem Solving", level: 80 },
  { name: "Leadership", level: 75 },
];
const certificates = [
  {
    title: "Software Development Foundation",
    issuer: "Three Million Technical Talent (3MTT)",
    image: "./certificate1.jpg",
    year: "2024",
    link: "certificate1.jpg",
  },
  {
    title: "Software Development Course HTML , CSS & JavaScript",
    issuer: "Blue Sapphire Hub",
    image: "./certificate2.jpg",
    year: "2024",
    link: "certificate2.jpg",
  },
  {
    title: "UI / UX  Foundational Course",
    issuer: "Great Learning Academy",
    image: "./certificate3.jpg",
    year: "2024",
    link: "certificate3.jpg",
  },
  {
    title: "Critical Thinking",
    issuer: "Project Management Institution",
    image: "./certificate6.jpg",
    year: "2024",
    link: "certificate6.jp",
  },
  {
    title: "Critical Thinking 2",
    issuer: "National Registry Of CPE Sponsors",
    image: "./certificate7.jpg",
    year: "2024",
    link: "certificate7.jp",
  },
  {
    title: "Emotional Intelligence",
    issuer: "Project Management Institution",
    image: "./certificate5.jpg",
    year: "2024",
    link: "certificate5.jp",
  },
  {
    title: "Embracing Unexpected Changes",
    issuer: "Project Management Institution",
    image: "./certificate4.jpg",
    year: "2024",
    link: "certificate4.jpg",
  },
];
function Skills() {
  const [displayDiv, setDisplayDiv] = useState(1);
  function handleDisplayDiv() {}
  return (
    <section id="skills">
      <div id="technology_card " className="bg-yellow-box">
        <div className="skill_pro_edu">
          <button
            id="first-btn"
            className={displayDiv === 1 ? "active_card" : "inactive"}
            onClick={() => setDisplayDiv(1)}
          >
            {" "}
            <i className="fas fa-code"></i>
          </button>
          <button
            id="second-btn"
            className={displayDiv === 2 ? "active_card" : "inactive"}
            onClick={() => setDisplayDiv(2)}
          >
            <i className="fas fa-bullseye"></i>
          </button>
          <button
            id="thied-btn"
            className={displayDiv === 3 ? "active_card" : "inactive"}
            onClick={() => setDisplayDiv(3)}
          >
            <i className="fas fa-graduation-cap"></i>
          </button>{" "}
        </div>

        {displayDiv === 1 && (
          <div>
            {" "}
            <h3 className="skills_heading">Tech Skills</h3>
            <hr />
            <div className="container">
              {skills.map((sKillobj) => (
                <Skill skill={sKillobj} key={sKillobj.name} />
              ))}
            </div>
          </div>
        )}
        {displayDiv === 2 && (
          <div>
            <h3 className="skills_heading">Professional Skills</h3>
            <hr />

            <div className="container">
              <ProSkill />
            </div>
          </div>
        )}
        {displayDiv === 3 && (
          <div>
            {" "}
            <h3 className="skills_heading">Certificates</h3>
            <hr />
            <div className="container edu-slider">
              <EduSkills />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Skill({ skill }) {
  const [progress, setProgress] = useState(0);
  let timer;

  const animateProgress = () => {
    setProgress(0);
    let start = 0;
    const end = skill.level;
    const duration = 1500;
    const increment = end / (duration / 20);

    timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setProgress(Math.floor(start));
    }, 20);
  };

  const resetProgress = () => {
    clearInterval(timer);
    setProgress(0);
  };

  return (
    <div>
      <div
        className="skill_card fadeUp"
        onMouseEnter={animateProgress}
        onMouseLeave={resetProgress}
      >
        <img src={skill.logo} alt={skill.name} />
        <h2>{skill.name}</h2>
        <p>{skill.type}</p>

        <div className="progress_bar">
          <div
            className="progress_fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <h4 className="text_progress">Skilled : {progress}%</h4>
      </div>
    </div>
  );
}

function ProSkill({ proSkillobj }) {
  useEffect(() => {
    const cards = document.querySelectorAll(".circle-card");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const circle = entry.target.querySelector(".progress-ring");
            const percent = entry.target.querySelector(".percent");
            const level = entry.target.dataset.level;

            const radius = circle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;

            circle.style.strokeDasharray = circumference;
            circle.style.strokeDashoffset = circumference;

            circle.style.transition = "stroke-dashoffset 1.5s ease";
            circle.style.strokeDashoffset =
              circumference - (level / 100) * circumference;

            let cur = 0;
            const start = performance.now();
            const dur = 1500;
            function tick(now) {
              const t = Math.min(1, (now - start) / dur);
              cur = Math.round(t * level);
              percent.textContent = cur + "%";
              if (t < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);

            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => io.observe(card));

    return () => io.disconnect();
  }, []);

  return (
    <div className="skills-section">
      {" "}
      <div className="circle-grid">
        {" "}
        {proffessionalskills.map((s, i) => (
          <div key={i} className="circle-card" data-level={s.level}>
            <svg className="circle-svg" width="140" height="140">
              <circle
                className="bg-ring"
                cx="70"
                cy="70"
                r="60"
                strokeWidth="12"
                fill="none"
              />
              <circle
                className="progress-ring"
                cx="70"
                cy="70"
                r="60"
                strokeWidth="12"
                fill="none"
              />
            </svg>
            <div className="percent">0%</div>
            <p className="skill-name">{s.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EduSkills() {
  const [index, setIndex] = useState(0);
  const [animateCard, setAnimateCard] = useState(null);
  const prevSlide = () => {
    const newIndex = (index - 1 + certificates.length) % certificates.length;
    setIndex(newIndex);
    setAnimateCard(newIndex); // 👈 store the index, not title
  };

  const nextSlide = () => {
    const newIndex = (index + 1) % certificates.length;
    setIndex(newIndex);
    setAnimateCard(newIndex); // 👈 store the index, not title
  };

  // Get 3 cards visible
  const visible = [0, 1, 2].map((offset) => {
    const newIndex = (index + offset) % certificates.length;
    return {
      ...certificates[newIndex],
      uniqueKey: `${certificates[newIndex].title}-${newIndex}`,
    };
  });

  return (
    <section>
      <div className="carousel tablet">
        <button
          style={{ marginLeft: "-5px" }}
          className="nav  left"
          onClick={prevSlide}
        >
          ❮
        </button>

        <div className="edu-cards-wrapper">
          {visible.map((cert, offset) => {
            const newIndex = (index + offset) % certificates.length;
            const isAnimating = animateCard === newIndex; // 👈 compare index, not title

            return (
              <div
                key={cert.uniqueKey}
                className={`education-card ${isAnimating ? "animate" : ""}`}
                onAnimationEnd={() => setAnimateCard(null)}
              >
                <img src={cert.image} alt={cert.title} />
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
                <p>{cert.year}</p>
              </div>
            );
          })}
        </div>

        <button
          style={{ right: "-75px" }}
          className="nav right"
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default Skills;
