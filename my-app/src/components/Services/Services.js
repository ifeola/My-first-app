import servicesData from "./servicesData";

function Services() {
  const ServiceCard = (props) => {
    return (
      <div className="services__card">
        <div className="img__container">
          <img className="image" src={props.img} alt="" />
        </div>

        <div className="services__info">
          <h3 className="services__subtitle">{props.subtitle}</h3>
          <p className="lead services__lead">{props.description}</p>
        </div>
      </div>
    );
  };

  const services = servicesData.map((data) => {
    return (
      <ServiceCard
        img={data.img}
        subtitle={data.subtitle}
        description={data.description}
      />
    );
  });

  return (
    <section className="services container">
      <h4 className="section__subtitle">MY SERVICES</h4>
      <h2 className="section__title">
        Interactive Services Offered by Sleeken
      </h2>
      <div className="blog services">{services}</div>
    </section>
  );
}

export default Services;
