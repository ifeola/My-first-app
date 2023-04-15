import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container footer__container">
        <div className="top">
          <div className="infoone">
            <img src="img/logo.png" alt="logo" />
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              dolores explicabo cum quibusdam, dicta minus.
            </p>
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
            </div>
          </div>
          <div className="infotwo">
            <h4 className="footer__title">Quick Links</h4>
            <ul>
              <li>
                <a className="footer__links" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="footer__links" href="/">
                  About
                </a>
              </li>
              <li>
                <a className="footer__links" href="/">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="footer__links" href="/">
                  News
                </a>
              </li>
              <li>
                <a className="footer__links" href="/">
                  Contact
                </a>
              </li>
              <li>
                <a className="footer__links" href="/">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="infothree">
            <h4 className="footer__title">Recent Post</h4>
            <div className="footer__posts">
              <div className="footer__post">
                <p className="lead">Three WooCommerce Plugins to Boost Sales</p>
                <small>28 March, 2023</small>
              </div>
              <div className="footer__post">
                <p className="lead">Three WooCommerce Plugins to Boost Sales</p>
                <small>28 March, 2023</small>
              </div>
              <div className="footer__post">
                <p className="lead">Three WooCommerce Plugins to Boost Sales</p>
                <small>28 March, 2023</small>
              </div>
            </div>
          </div>
          <div className="infofour">
            <h4 className="footer__title">Get in Touch</h4>
            <div className="footer__contact">
              <p className="lead">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                cum!
              </p>
              <div className="location">
                <span className="flex">
                  <IoLocationSharp className="footer__icon" />
                  24, Bethel Estate, Egbeda LGA, Ibadan
                </span>
              </div>
              <div className="phone">
                <span className="flex">
                  <IoCall className="footer__icon" />
                  +234 9058 343 397
                </span>
              </div>
              <div className="email">
                <span className="flex">
                  <IoMail className="footer__icon" />
                  ifeola@idesign.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <small>Copyright 2023. All rights reserved.</small>
          <small>
            Designed by <span>GorkCoder</span> & Developed by
            <span>Ifeola</span>
          </small>
        </div>
      </div>
    </section>
  );
};

export default Footer;
