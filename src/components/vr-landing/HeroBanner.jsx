import React from "react";

const HeroBanner = () => {
  return (
    <>
     <div className="row">
      <div className="col-lg-6">
        <h1 className="hero-heading" data-aos="fade-right">
          The reality of a dream.
        </h1>
        <p
          className="hero-sub-heading"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          Interact with your audience with new  technologies!
        </p>
        {/* <div
          className="d-lg-flex align-items-center justify-content-between pr-xl-5"
          data-aos="fade-right"
          data-aos-delay="200"
         >
          <div className="info">
            Virtual Reality Glass{" "}
            <span className="d-block">
              20% <span>SALE ON</span>
            </span>
          </div>
          <div className="price">$49.</div>
        </div> */}
        {/* <a
          href="#"
          className="explore-btn mt-5 md-mt-40"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Explore more & Shop
        </a> */}
      </div>
    </div>
    <div className="screen-holder">
            <img src="images/shape/241.svg" alt="" className="img-meta" />
            <img
              src="images/header.jpg"
              alt="illustration"
              className="shapes vr-image"
              data-aos="fade-up"
            />
            <img
              src="images/shape/242.svg"
              alt="illustration"
              className="shapes shape-one"
              data-aos="fade-right"
            />
            <img
              src="images/shape/242.svg"
              alt="illustration"
              className="shapes shape-two"
              width="45"
              data-aos="fade-up"
            />
            <img
              src="images/shape/242.svg"
              alt="illustration"
              className="shapes shape-three"
              width="75"
              data-aos="fade-down"
            />
          </div>
    </>
   
  );
};

export default HeroBanner;
