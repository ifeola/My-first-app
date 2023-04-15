const SkillCard = (props) => {
  return (
    <div className="skill__item">
      <div className="skill__top">
        <h4 className="skill__top-title">{props.title}</h4>
        <p className="lead skill__percentage">{props.percentage}</p>
      </div>
      <div className="skill__bar">
        <span
          className="skills__percentage"
          style={{
            display: "flex",
            width: `${props.percentage}`,
            background: "var(--primary-color)",
            height: "100%",
          }}></span>
      </div>
    </div>
  );
};

export default SkillCard;
