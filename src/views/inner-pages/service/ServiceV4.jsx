import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderFive from "../../../components/header/HeaderFive";
import { Helmet } from "react-helmet";
import FooterEight from "../../../components/footer/FooterEight";
import CopyRightFour from "../../../components/footer/CopyRightFour";
import CounterOne from "../../../components/counter/CounterOne";
import FancyFeatureTwentyEightV2 from "../../../components/features/FancyFeatureTwentyEightV2";
import Service from "../../../components/service/Service";
import HeaderLanding from "../../../components/vr-landing/Header";
import FooterSeven from "../../../components/footer/FooterSeven";
import CopyRightThree from "../../../components/footer/CopyRightThree";
import { getHomeData, getServiceData } from "../../../services/UseSantyClient";
import { useTranslation } from "react-i18next";

const ServiceV4 = () => {
  const [services, setservices] = useState([])
  const { t, i18n } = useTranslation();
  useEffect(() => {
    getServiceData()
        .then(res => setservices(res[0]))
        // .then(res => console.log("savasjhvass",res[0]))
        .catch(console.error);
}, [])
console.log("dvkmsdkbsdb",services);

  return (
    <div className="main-page-wrapper p0">
   
      {/* End Page SEO Content */}

      <HeaderLanding />
      {/* End Header */}

      {/*  =====================================================
           	Fancy Hero Seven
        ===================================================== */}
      <div
        className="fancy-hero-seven"
        style={{
          backgroundImage: `url(${
            services?.seviceimage?.asset?.url
          })`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 m-auto">
              <h2 className="font-gordita">{i18n.language == "en" ?services.service_title:services.service_title_fa}</h2>
              <p className="font-gordita">
               {i18n.language == "en" ?services.service_description:services.service_description_fa}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.fancy-hero-seven --> */}

      {/* 	=============================================
				Fancy Text block Seven
			==============================================  */}
      <div className="fancy-text-block-seven seven mt-130 md-mt-80">
        <div className="bg-wrapper no-bg">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-5 col-md-6 col-sm-10 m-auto"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <CounterOne data={services} />
              </div>
              {/* End .col */}

              <div
                className="col-xl-6 col-lg-7 ml-auto"
                data-aos="fade-left"
                data-aos-duration="1200"
              >
                <div className="quote-wrapper pt-60">
                  <img src="images/icon/185.png" alt="icon" className="icon" />
                  <blockquote className="font-rubik">
                    {i18n.language == "en" ?services?.section_2_service_title:services?.section_2_service_title_fa}
                  </blockquote>
                  {/* <h6 className="mt-20">
                    Mike Lucas. <span>CEO & Founder deksi</span>
                  </h6> */}
                </div>
                {/* <!-- /.quote-wrapper --> */}
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}

            <div className="mt-90 pb-80 bottom-border">
              <div className="row">
                <div className="col-xl-11 m-auto">
                  <FancyFeatureTwentyEightV2 data={services} />
                </div>
              </div>
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* <!-- /.bg-wrapper --> */}
      </div>
      {/* <!-- /.fancy-text-block-seven --> */}

      {/* 	=============================================
				Fancy Feature Thirty Three
			==============================================  */}
      <div className="fancy-feature-thirtyThree mt-60 md-mt-20">
        <div className="container">
          <div className="title-style-eleven text-center pb-50 md-pb-30">
            <h2>    {i18n.language == "en" ?services?.explore_service_title:services?.explore_service_title_fa}</h2>
            <p className="pt-20">
            {i18n.language == "en" ?services?.explore_service_description:services?.explore_service_description_fa}
            </p>
          </div>
          <Service data={services} />
          {/* <div className="bottom-border">
            <div className="text-center mt-130 md-mt-80 pb-150 md-pb-80">
              <div className="row">
                <div className="col-xl-8 col-lg-10 m-auto">
                  <h2 className="contact-title font-gordita">
                    Convinced to work on a new project?
                  </h2>
                  <Link className="theme-btn-one mt-40" to="/contact-cs">
                    {" "}
                    Contact Now
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <!-- /.fancy-feature-thirtyThree --> */}

      {/*  =====================================================
            Footer Style Eight
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
      {/* /.theme-footer-eight  */}
    </div>
  );
};

export default ServiceV4;
