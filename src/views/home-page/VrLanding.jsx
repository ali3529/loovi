import React, { useEffect, useState } from "react";
import CopyRightThree from "../../components/footer/CopyRightThree";
import FooterSeven from "../../components/footer/FooterSeven";
import BlockFeaturesOne from "../../components/vr-landing/BlockFeaturesOne";
import BlockFeaturesTwo from "../../components/vr-landing/BlockFeaturesTwo";
import FancyFeature from "../../components/vr-landing/FancyFeature";
import FancyVideo from "../../components/vr-landing/FancyVideo";
import FeatureCounter from "../../components/vr-landing/FeatureCounter";
import HeaderLanding from "../../components/vr-landing/Header";
import HeroBanner from "../../components/vr-landing/HeroBanner";
import LatestProduct from "../../components/vr-landing/LatestProduct";
import Testimonials from "../../components/vr-landing/Testimonials";
import { urlFor, client } from "../../Client";
import { getHomeData } from "../../services/UseSantyClient";
import BlockBuy from "../../components/vr-landing/BlockBuy";

const VrLanding = () => {
  const [home, setHome] = useState([]);
 
    useEffect(() => {
          getHomeData()
              .then(res => setHome(res[0]))
              .catch(console.error);
      }, [])

      
  
  return (
    <div className="main-page-wrapper p0 font-gordita">
      <HeaderLanding />
      {/* End .Header */}

      {/* <!-- 
			=============================================
				Theme Hero Banner
			============================================== 
			--> */}
      <div className="hero-banner-fourteen lg-container" id="home">
        <div className="container">
          <HeroBanner data={home} />
        </div>
      </div>

      <LatestProduct />

      <div
        className="fancy-feature-thirtySeven lg-container pt-120"
        id="feature"
      >
        <FancyFeature data={home} />
      </div>
      {/* <!-- /.fancy-feature-thirtySeven --> */}

      {/* <!-- 
			=============================================
				Fancy Feature Thirty Eight
			============================================== 
			--> */}
      {/* <div className="fancy-feature-thirtyEight lg-container mt-75 pb-150 md-pb-80">
        <div className="container">
          <div className="top-border pt-70 md-pt-30">
            <div className="row justify-content-center">
              <FeatureCounter />
            </div>
          </div> 
        </div>  
      </div>*/}
      {/* <!-- /.fancy-feature-thirtyEight --> */}

      {/* <!-- 
			=============================================
				Fancy Feature Thirty Nine
			============================================== 
 
      {/* <!--
			=====================================================
				Fancy Feature Forty
			=====================================================
			--> */}
      <div
        className="fancy-feature-forty lg-container pt-225 md-pt-120"
        id="product-details"
      >
        <div className="container">
          <BlockFeaturesOne data={home} />
          {/* <!-- /.block-style-thirtyEight --> */}

          <BlockFeaturesTwo data={home} />
          {/* <!-- /.block-style-thirtyEight --> */}
        </div>
      </div>
      {/* <!-- /.fancy-feature-forty --> */}

      {/* <!--
			=====================================================
				Client Feedback Slider Nine
			=====================================================
			--> */}
      {/* <div
        className="client-feedback-slider-nine lg-container position-relative mt-250 md-mt-150"
        id="testimonial"
      >
        <img
          src="images/shape/245.svg"
          alt="shape"
          className="shapes shape-one"
        />
        <div className="container">
          <div className="title-style-sixteen text-center">
            <div className="upper-title">Testimonials</div>
            <h2 className="text-white">Client Feedback</h2>
          </div>
          <div className="main-content position-relative mt-60">
            <div className="clientSliderEight slick-arrow-none">
              <Testimonials />
            </div>
          </div>
        </div>
      </div>  */}

      {/* <!--
			=====================================================
				Fancy Feature Forty One
			=====================================================
			--> */}
     <BlockBuy data={home}/>
      {/* <!-- /.fancy-feature-fortyOne --> */}

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

export default VrLanding;
