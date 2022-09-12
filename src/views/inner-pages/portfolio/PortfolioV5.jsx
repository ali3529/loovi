import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/header/Header";
import PortfolioSix from   "../../../components/portfolio/PortfolioSix";
import FooterSeven from    "../../../components/footer/FooterSeven";
import CopyRightThree from "../../../components/footer/CopyRightThree";
import HeaderLanding from  "../../../components/vr-landing/Header";
import { useTranslation } from "react-i18next";
import { getPortfiloData } from "../../../services/UseSantyClient";
const PortfolioV5 = () => {
  const [portfilo, setportfilo] = useState([]);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    getPortfiloData()
      .then(res => setportfilo(res[0]))
      // .then((res) => console.log("dsbsdbsdb", res[0]))
      .catch(console.error);
  }, []);
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>
          Portfolio Grid Single || Deski-Saas & Software React Template
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLanding />
      {/* End Header */}

      {/* =============================================
         Fancy Hero Six
        ==============================================  */}
      <div className="fancy-hero-six">
        <div className="container">
          <h1 className="heading">{i18n.language == "en" ?portfilo?.portfoliotitle:portfilo?.portfoliotitle_fa}</h1>
          <p className="sub-heading">
          {i18n.language == "en" ?portfilo?.portfoliodescription:portfilo?.portfoliodescription_fa}
         
          </p>
        </div>
      </div>
      {/* /.fancy-hero-six */}

      {/*  =============================================
            Fancy Portfolio Two
        ==============================================  */}
      <div className="fancy-portfolio-six mt-80 md-mt-40">
        <div className="container">
          <div className="top-border bottom-border pb-130 md-pb-90">
            <PortfolioSix portfilo={portfilo} />

            {/* <div className="text-center mt-90 md-mt-50">
              <h2 className="contact-title font-gordita">
                Do you have any projects? <br />
                Contact us.
              </h2>
              <a href="#" className="theme-btn-nine mt-35">
                Contact Now
              </a>
            </div> */}
          </div>
        </div>
      </div>
      {/* /.fancy-portfolio-two */}

      {/* =====================================================
            Footer Style Seven
        ===================================================== */}
      <footer className="theme-footer-seven mt-120 md-mt-100">
        <div className="lg-container">
          <div className="container inner-btn-black">
            <FooterSeven />
          </div>

          <div className="container">
            <div className="bottom-footer">
              <CopyRightThree />
            </div>
          </div>
        </div>
        {/* /.lg-container */}
      </footer>
      {/* /.theme-footer-seven */}
    </div>
  );
};

export default PortfolioV5;
