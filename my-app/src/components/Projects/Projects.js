import projectData from "./ProjectData.js";
import { BiCodeCurly } from "react-icons/bi";
import { BiFullscreen } from "react-icons/bi";

const Projects = () => {
  const Project = (props) => {
    return (
      <div className="project">
        <div className="project__img-container">
          <img src={props.img} alt="project 1" />
        </div>
        <div className="project__overlay">
          <h3 className="project__title">{props.title}</h3>
          <p className="project__description">{props.description}</p>
          <div className="project__cta">
            <a href="/" className="viewcode">
              <BiCodeCurly />
            </a>
            <a href="/" className="viewsite">
              <BiFullscreen />
            </a>
          </div>
        </div>
      </div>
    );
  };

  const projectElement = projectData.map((data) => {
    console.log(data);
    return (
      <Project
        img={data.image}
        title={data.title}
        description={data.description}
        key={data.key}
      />
    );
  });

  return (
    <section id="project" className="project__section">
      <div className="project__container">
        <div className="project__heading">
          <h4 className="section__subtitle">MY PROJECTS</h4>
          <h2 className="section__title">
            Some of Sleeken's Completed Projects
          </h2>
        </div>
        <div className="projects">{projectElement}</div>
      </div>
    </section>
  );
};

export default Projects;
