function About() {
  return (
    <section className="about" id="about">
      <div className="about__container container">
        <div className="about__info">
          <h3 className="about__subtitle">about me</h3>
          <h2 className="title">who i am and what i do</h2>
          <div className="about__description">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              dicta quos dolor ipsam nisi dolorum id odio similique eaque
              repudiandae est fuga.
            </p>
            <p className="lead">
              Quasi totam asperiores nihil et, modi cumque officiis eveniet
              recusandae facere culpa suscipit. Dolor quo esse amet dicta
              facilis quibusdam, facere delectus.
            </p>
            <p className="lead">
              Inventore autem tempore aspernatur illo atque, sed voluptatum nam.
              Aperiam vero vitae impedit architecto tenetur consequuntur.
            </p>
          </div>
          <a className="cta__link" href="/">
            Download CV
          </a>
        </div>
        <img src="img/about.jpg" alt=""></img>
      </div>
    </section>
  );
}

export default About;
