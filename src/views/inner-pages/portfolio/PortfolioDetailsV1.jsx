import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../../components/header/Header";
import FooterSeven from "../../../components/footer/FooterSeven";
import CopyRightThree from "../../../components/footer/CopyRightThree";
import BrandSeven from "../../../components/brand/BrandSeven";
import ProjectInfo from "./ProjectInfo";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeaderLanding from "../../../components/vr-landing/Header";
const PortfolioV5 = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  console.log("savasvsavsa",location.state);
  const data=location.state.item
  return (
    <div className="main-page-wrapper">
      <Helmet>
        <title>
          Portfolio Details V1 || Deski-Saas & Software React Template
        </title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderLanding />
      {/* End Header */}

      {/* =============================================
         Fancy Hero Six
        ==============================================  */}
      <div className="portfolio-details-one mt-75 mb-150 md-mb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="header text-center">
                <div className="tag">{data.title}</div>
                <div className="title-style-ten">
                  <h2>{data.meta}</h2>
                </div>
                <ul className="d-flex justify-content-center social-icon mt-35">
                  <BrandSeven />
                </ul>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="main-content mt-75">
            <img
              src={data.img}
              alt="gallery"
              className="mb-90 md-mb-50"
            />
            <div className="row">
              <div className="col-xl-11 m-auto">
                <div className="row">
                  <div className="col-md-4 order-md-last">
                    <ul className="project-info clearfix pl-xl-5">
                      <ProjectInfo />
                    </ul>
                    {/* End .project info */}
                  </div>
                  {/* End .col */}

                  <div className="col-md-8 order-md-first">
                    <h4>{i18n.language == "en" ?"Overviw":"نمایش"}</h4>
                    <p>
                 {data.description}
                    </p>
                  
                    <a
                      href="https://dribbble.com/ib-themes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-btn-eight"
                    >
                      Check Live Link
                    </a>
                  </div>
                  {/* End .col */}
                </div>
                {/* End .row */}

             
                {/* End .top-border */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-hero-six */}

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
