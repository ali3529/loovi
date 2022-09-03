import React from "react";

const FancyFeature = () => {
  const rating = ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"];
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-11 m-auto" data-aos="fade-up">
          <div className="title-style-fifteen text-center">
            <h2>Quality is matter.</h2>
          </div>
        </div>
      </div>
      <div
        className="img-meta mt-80 mb-65 md-mt-50 md-mb-50"
        data-aos="fade-up"
      >
        <img src="images/media/feature.jpg" alt="media" className="w-100" />
      </div>
    </div>
  );
};

export default FancyFeature;
