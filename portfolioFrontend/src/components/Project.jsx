import "../styles/Project.css";
import ProjectDemo from "./ProjectDemo";
const project = [
  {
    name: "TrustMart Renew",
    image: "./Project1.png",
    info: "an E-commerce platform for new and second Hand materials",
    tech: "Htmt, Css, Javascript, Ejs, Mongodb & Express",
    link: "https://github.com/Kamaluddeen017set/Trust-Renewmart",
  },
  {
    name: "Portfolio + Blog page ",
    image: "./Project2.png",
    info: "A Responsive personal portfolio & blog",
    tech: "React Vite, Css ,Node.js, MongoDb,Cloudinary, jsx etc ",
    link: "Portfolio + Blog page gethub",
  },
  {
    name: "TODO APP",
    image: "./Project3.png",
    info: "An Task Master for recording future Task",
    tech: "HTML,CSS,JavaScript",
    link: "https://kamaluddeen017set.github.io/todo-app/",
  },
  {
    name: "Digital Calculator",
    image: "./Project4.png",
    info: "an E-commerce platform for new and second Hand materials",
    tech: "HTML,CSS,JavaScript And EJS",
    link: "https://kamaluddeen017set.github.io/Calculator/",
  },
  {
    name: "Solor Sytem",
    image: "./Project5.png",
    info: "Solar System animation ",
    tech: "HTML,CSS,JavaScript",
    link: "https://kamaluddeen017set.github.io/Solar-System/",
  },

  {
    name: "weather app",
    image: "./Project6.png",
    info: "Weater Forcast App ",
    tech: "HTML,CSS,JavaScript ",
    link: "https://kamaluddeen017set.github.io/weather-app/",
  },
  {
    name: "Quotes Generator",
    image: "./Project7.png",
    info: "Generate Many wise  quite",
    tech: "HTML,CSS,JavaScript ",
    link: "https://kamaluddeen017set.github.io/Quote-Generator/",
  },
];
function Project() {
  return (
    <section id="project">
      <h2 className="skills_heading">Latest Projects</h2>
      <hr />
      <div className="project">
        {project.map((project) => (
          <ProjectCard key={project.name} projectobj={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ projectobj }) {
  return (
    <div className="card2 animation_block ">
      <div className="card-container card3">
        <div className="card">
          <div className="img-content">
            <img src={projectobj.image} alt="" />
          </div>
          <div className="content">
            <p className="heading">{projectobj.name}</p>
            <p>{projectobj.info}</p>
            <h3>{projectobj.tech}</h3>
          </div>{" "}
        </div>{" "}
        <a href={projectobj.link}>
          <ProjectDemo projectobj={projectobj} />
        </a>
      </div>{" "}
    </div>
  );
}
export default Project;
