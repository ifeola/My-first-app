import SkillsData from "./SkillsData";
import SkillCard from "./SkillCard";

const Skills = () => {
  const skillElement = SkillsData.map((skill) => {
    return <SkillCard percentage={skill.percentage} title={skill.title} />;
  });

  return (
    <section className="skills">
      <div className="container">
        <div className="section__heading">
          <h4 className="section__subtitle">WHY CHOOSE US</h4>
          <h2 className="section__title">Some of Sleeken Skills</h2>
        </div>
        <div className="section__info">
          <div className="skills__list">{skillElement}</div>
          <div className="skills__info">
            <h3 className="title">Every Day is a New Challenge</h3>
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
              illum deserunt ut eum amet odio, sit in, consectetur laboriosam
              harum quos doloribus?
            </p>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              magni accusamus minus quia, incidunt dolor error ea eaque magnam
              veniam sequi earum libero quibusdam repellendus provident quod sed
              ex nisi.
            </p>
            <a href="/" className="cta__link">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
