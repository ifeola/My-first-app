import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero home" id="home">
      <div className="hero__container container">
        <div className="heroimg__bg">
          <img src="img/project.png" alt="" />
        </div>
        <div className="hero__info">
          <h1 className="hero__title">
            I'm a <br />
            web developer
          </h1>
          <div className="hero__social">
            <a href="https://twitter.com/ifeola_design">
              <FaFacebookF className="facebook" />
            </a>
            <a href="https://twitter.com/ifeola_design">
              <FaTwitter className="twitter" />
            </a>
            <a href="https://twitter.com/ifeola_design">
              <FaInstagram className="instagram" />
            </a>
            <a href="https://twitter.com/ifeola_design">
              <FaYoutube className="youtube" />
            </a>
            <a href="https://twitter.com/ifeola_design">
              <FaGithub className="github" />
            </a>
          </div>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            soluta eligendi qui reiciendis temporibus maiores mollitia a
            perferendis fugiat, dolorem nobis unde distinctio modi harum animi
            sapiente cupiditate. Dignissimos voluptatum voluptate possimus id
            tenetur quae.
          </p>
          <a className="cta__link" href="https://twitter.com/ifeola_design">
            Contact Us
          </a>
        </div>
      </div>
      <div className="scroll__btn">
        <FaArrowUp />
      </div>
    </section>
  );
}

export default Hero;
