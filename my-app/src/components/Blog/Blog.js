import CardData from "./CardData";

function Blog() {
  const Card = (props) => {
    return (
      <div className="card">
        <div className="img__container">
          <img src={props.image} alt="" className="image card__img" />
        </div>
        <div className="card__info">
          <h3 className="card__subtitle">{props.date}</h3>
          <h2 className="card__title">{props.title}</h2>
          <a className="card__link" href={props.link}>
            Read More
          </a>
        </div>
      </div>
    );
  };

  const cardElement = CardData.map((data) => {
    return <Card {...data} key={data.key} />;
  });

  return (
    <section className="card__container">
      <div className="container">
        <h4 className="section__subtitle">LATEST BLOG</h4>
        <h2 className="section__title">Read Inspirational Story Every Week</h2>
        <div className="blog">{cardElement}</div>
      </div>
    </section>
  );
}

export default Blog;
