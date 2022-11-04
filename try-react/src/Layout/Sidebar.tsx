import { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const hamburgerMenuClick = () => {
    document.querySelector(".container")?.classList.toggle("change");
  }

  return (
    <>
      <div className="hamburger-menu" onClick={hamburgerMenuClick}>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
        <span>Close</span>
      </div>

      <section className="sidebar">
        <ul className="menu">
          <li className="menu-item">
            <Link to={`/`} className="menu-link">
              Home
            </Link>
          </li>
          <li className="menu-item">
            <Link to={`aboutus`} className="menu-link">
              About Us
            </Link>
          </li>
          <li className="menu-item">
            <Link to={`team`} className="menu-link">
              Team
            </Link>
          </li>
          <li className="menu-item">
            <Link to={`pricing`} className="menu-link">
              Pricing
            </Link>
          </li>
          <li className="menu-item">
            <Link to={`contact`} className="menu-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="social-media">
          <a href="#" title="facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" title="instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" title="twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
