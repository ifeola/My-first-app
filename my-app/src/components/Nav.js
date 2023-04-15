/* const NavScroll = () => {
    window.addEventListener("scroll", (e) => {
      let header = document.querySelector(".header");
      if (window.screenY > 0) {
        header.classList.add("scroll");
      }
    });
  }; */

function Nav() {
  return (
    <header className="header">
      <nav className="container nav">
        <img src="img/logo.png" alt="" className="logo" />
        <ul className="nav__list">
          <li className="nav__list-item">
            <a className="nav__link" href="/home">
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="/pages">
              Pages
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="/blog">
              Blog
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="/shop">
              Shop
            </a>
          </li>
          <li className="nav__list-item">
            <a className="nav__link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
        <button
          className="hamburger"
          onClick={() => {
            const hamburger = document.querySelector(".hamburger");
            const menu = document.querySelector(".nav__list");
            if (hamburger) {
              hamburger.classList.toggle("active");
              menu.classList.toggle("is-active");
            }
          }}>
          <span className="hamburger__menu"></span>
        </button>
      </nav>
    </header>
  );
}

export default Nav;
