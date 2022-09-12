import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../../../components/header/HeaderFour";
import FancyVideoOne from "../../../../components/video/FancyVideoOne";
import AboutTabs from "../../../../components/block-slider/AboutTabs";
import CounterThree from "../../../../components/counter/CounterThree";
import TeamFive from "../../../../components/team/TeamFive";
import Faq from "../../../../components/faq/Faq";
import CallToActionFive from "../../../../components/call-to-action/CallToActionFive";
import FooterFour from "../../../../components/footer/FooterFour";
import BlogStyle5 from "../../../../components/blog/BlogStyle5";
import HeaderLanding from "../../../../components/vr-landing/Header";
import { useTranslation } from "react-i18next";
import { getAboutUsData } from "../../../../services/UseSantyClient";
import FooterSeven from "../../../../components/footer/FooterSeven";
import CopyRightThree from "../../../../components/footer/CopyRightThree";
const EventOrganizer = () => {
  const { t, i18n } = useTranslation();
  const [about, setabout] = useState([]);
  useEffect(() => {
    getAboutUsData()
      .then((res) => setabout(res[0]))
      // .then((res) => console.log("savasjhvass", res[0]))
      .catch(console.error);
  }, []);
  console.log("sdvksmdkbds", about);
  return (
    <div className="main-page-wrapper p0">
      <HeaderLanding />
      {/* End HeaderFour */}

      {/* =============================================
				Fancy Text block Twenty
			============================================== */}
      <div className="fancy-text-block-twenty">
        <img
          src="images/shape/124.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/125.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="container">
          <h1 className="title font-slab">
            {i18n.language == "en" ? "About us" : "تماس با ما"}
          </h1>
          <div className="fancy-video-box-one mb-130 md-mb-70">
            <img
              src={about?.about_us_image?.asset?.url}
              alt="media"
              className="main-img"
            />
          </div>
          {/* /.fancy-video-box-one */}

          <div className="row">
            <div
              className="col-lg-5"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="client-info font-rubik">
              
                <span>
                  {i18n.language == "en"
                    ? about?.about_us_customer_number
                    : about?.about_us_customer_number_fa}
                </span>
              </div>
              <div className="title-style-five">
                <h2>
                  <span>
                    {i18n.language == "en"
                      ? about?.about_us_customer_section_title
                      : about?.about_us_customer_section_title_fa}
                  </span>
                  {/* <br /> & ticket platform platform. */}
                </h2>
              </div>
            </div>
            <div
              className="col-lg-6 ml-auto"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <AboutTabs data={about} />
            </div>
          </div>
        </div>
      </div>
      {/* /.fancy-text-block-twenty */}

      {/* =====================================================
				Counter With Icon One
			===================================================== */}
      <div className="counter-with-icon-one">
        <div className="container">
          <div className="border-top pt-50 md-pt-10">
            <CounterThree data={about}/>
          </div>
        </div>
      </div>
      {/* /.counter-with-icon-one */}

      {/* =============================================
				Team Section
			==============================================  */}
      <div className="team-section-four mt-250 md-mt-150">
        <img
          src="images/shape/129.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <img
          src="images/shape/130.svg"
          alt="shape"
          className="shapes shape-two"
        />
        <div className="container">
          <div className="title-style-five text-center mb-90 md-mb-60">
            <h6>{i18n.language == "en" ?"Our Team":"نیم ما"}</h6>
            <h2>{i18n.language == "en" ?about?.ourteam_title:about?.ourteam_title_fa} </h2>
          </div>

          <div className="team-wrapper">
            <div className="row">
              <TeamFive data={about}/>
            </div>
            <img
              src="images/shape/126.svg"
              alt="shape"
              className="shapes shape-one"
            />
          </div>
          {/*  /.team-wrapper */}
        </div>
      </div>
      {/* /.team-section-four */}

      {/* 
     =============================================
				Fqa Text Block
		============================================== */}
      <div className="fancy-text-block-six mt-250 pt-50 md-mt-130">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="title-style-five mb-35">
                <h6> {i18n.language == "en" ?"Why choose us":"چرا باید مارا انتخاب کنید"}</h6>
                <h2>
                  <span>{i18n.language == "en" ?about?.faq_title:about?.faq_title_fa}</span> 
                </h2>
              </div>
              {/* End title */}
              <Faq data={about} />
            </div>

            <div
              className="col-lg-6 col-md-8 m-auto"
              data-aos="fade-left"
              data-aos-duration="1200"
            >
              <div className="illustration-holder d-flex justify-content-end md-mt-50">
                <img src="images/media/img_58.png" alt="media" />
                <img
                  src="images/shape/113.svg"
                  alt="media"
                  className="shapes shape-one"
                />
              </div>
              {/* /.illustration-holder */}
            </div>
          </div>
        </div>
      </div>
      {/* /.why should you choose us */}

      {/* =====================================================
				Feature Blog Four
			===================================================== */}
      {/* <div className="feature-blog-four mt-250 md-mt-200">
        <div className="container">
          <div className="title-style-five text-center mb-70 md-mb-50">
            <h6>News & Updates</h6>
            <h2>Latest news & articles</h2>
          </div>
        
          <div className="row">
            <BlogStyle5 />
          </div>
        </div>
      </div>
       */}
      {/* /.feature-blog-four */}

      {/* 
      =============================================
			Call To Action
		  ============================================== */}
      <div className="fancy-short-banner-five pt-150 pb-150 md-pt-100 md-pb-100">
        <div className="container">
          <CallToActionFive />
        </div>
      </div>
      {/* End .fancy-short-banner-five */}

      {/* 
     =============================================
			Footer Four
		  ============================================== */}
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
      {/* /.theme-footer-four */}
    </div>
  );
};

export default EventOrganizer;
