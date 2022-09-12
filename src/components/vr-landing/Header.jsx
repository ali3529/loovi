import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import MegaMenuLanding from "../header/mega-menu/MegaMenuLanding";
import HeaderPopupForm from "../form/HeaderPopupForm";
import { useTranslation } from "react-i18next";
const logo = "images/logo/logo2.png";

const HeaderLanding = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const { t, i18n } = useTranslation();

  const setLanguage = (language) => {
    if (i18n.language == language) return;
    i18n.changeLanguage(language);
    localStorage.setItem("lan", language);
    window.location.reload();
    console.log("dsvksdmbkd", i18n.language);
  };

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* =============================================
				Theme Main Menu
			==============================================  */}
      <div
        className={
          navbar
            ? "theme-main-menu sticky-menu theme-menu-five fixed"
            : "theme-main-menu sticky-menu theme-menu-five"
        }
      >
        <div className="d-flex align-items-center justify-content-center">
          <div className="logo">
            <Link to="/event-organizer">
              <img src={logo} alt="brand" />
            </Link>
          </div>
          {/* End logo */}

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                  <div className={click ? "active" : ""}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>
              {/* End Header */}

              <div
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent"
              >
                <div className="d-lg-flex justify-content-between align-items-center">
                  <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={[
                      "home",
                      "product",
                      "feature",
                      "product-details",
                      "testimonial",
                    ]}
                    currentClassName="active"
                    offset={-500}
                  >
                    <li className="nav-item">
                      <Link className="nav-link" to={"/"}>
                        {i18n.language == "en" ? "home" : "خانه"}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/services"}>
                        {i18n.language == "en" ? "Services" : "خدمات"}
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to={"/about"}>
                        {i18n.language == "en" ? "About Us" : "درباره ما"}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/portfolio"}>
                        {i18n.language == "en" ? "Portfolio" : "نمونه کار ها"}
                      </Link>
                    </li>
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
          <div className="right-widget d-flex flex-row ">
            <button onClick={() => setLanguage("fa")} className="mr-2">
              <img src="/images/iran_flag.png"/>
            </button>
            <button onClick={() => setLanguage("en")} className="mr-2">
            <img src="/images/usa_flag.png"/>
            </button>
          </div>
        </div>
      </div>
      {/* /.theme-main-menu */}

      {/* Mobile Menu Start */}
      <div className={click ? "mobile-menu  menu-open" : "mobile-menu"}>
        <div className="logo order-md-1">
          <Link to="/event-organizer">
            <img src="images/logo/logo2.png" alt="brand" />
          </Link>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="images/icon/close.svg" alt="icon" />
          </div>
          {/* Mobile Menu close icon */}
        </div>

        <Scrollspy
          className="navbar-nav"
          id="theme-menu-list"
          items={[
            "home",
            "product",
            "feature",
            "product-details",
            "testimonial",
          ]}
          currentClassName="active"
          offset={-200}
        >
          <li className="nav-item">
            <a className="nav-link " href="#home" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#product" className="nav-link" onClick={handleClick}>
              Product
            </a>
          </li>
          <li className="nav-item">
            <a href="#feature" className="nav-link" onClick={handleClick}>
              Features
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#product-details"
              className="nav-link"
              onClick={handleClick}
            >
              Product Details
            </a>
          </li>
          <li className="nav-item">
            <a href="#testimonial" className="nav-link" onClick={handleClick}>
              Testimonials
            </a>
          </li>
        </Scrollspy>
      </div>
      {/* Mobile Menu End */}

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal  modal-contact-popup-one"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="box_inner ">
          <main className="main-body box_inner modal-content clearfix">
            <button className="close" onClick={toggleModalOne}>
              <img src="images/icon/close.svg" alt="close" />
            </button>
            {/* End close icon */}

            <div className="left-side">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="row">
                  <div className="col-xl-10 col-lg-8 m-auto">
                    <blockquote>
                      “I never dreamed about success. I worked for it.”
                    </blockquote>
                    <span className="bio">—Estée Lauder</span>
                  </div>
                </div>
                <img
                  src="images/assets/ils_18.svg"
                  alt=""
                  className="illustration mt-auto"
                />
              </div>
            </div>
            {/* /.left-side */}

            <div className="right-side">
              <h2 className="form-title">Contact us</h2>
              <HeaderPopupForm />
            </div>
            {/*  /.right-side */}
          </main>
          {/* /.main-body */}
        </div>
      </Modal>
      {/* End  Modal For Request a demo */}
    </>
  );
};

export default HeaderLanding;
