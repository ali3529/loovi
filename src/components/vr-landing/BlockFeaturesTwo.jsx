import React from "react";

const BlockFeaturesTwo = ({data}) => {
  const {
    section_4_description,
    section_4_description_fa,
    section_4_image,
    section_4_small_image,
    section_4_title,
    section_4_title_fa,
    section_4_upper_title,
    section_4_upper_title_fa,
  } = data;
  return (
    <div className="block-style-thirtyEight">
      <div className="row align-items-center">
        <div
          className="col-xl-5 col-lg-6 order-lg-last ml-auto"
          data-aos="fade-left"
        >
          <div className="title-style-sixteen">
            <div className="upper-title">{section_4_upper_title}</div>
            <h2>{section_4_title}</h2>
          </div>
          <p className="mt-30 pr-xl-5">
            {section_4_description}
          </p>
        </div>
        <div className="col-xl-7 col-lg-5 col-md-8" data-aos="fade-right">
          <div className="img-meta d-inline-block position-relative md-mt-70">
            <img src={`${section_4_image?.asset?.url}`} alt="media" />
            <img
            src={`${section_4_small_image?.asset?.url}`}
              alt="media"
              className="shapes shape-three"
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFeaturesTwo;
