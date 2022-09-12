import React from "react";
import { useTranslation } from "react-i18next";

const BlockFeaturesOne = ({data}) => {
  const { t, i18n } = useTranslation();
  const {
    section_3_description,
    section_3_description_fa,
    section_3_image,
    section_3_small_image,
    section_3_title,
    section_3_title_fa,
    section_3_upper_title,
    section_3_upper_title_fa,
  } = data;
  return (
    <div className="block-style-thirtyEight mb-200 md-mb-150">
      <div className="row align-items-center">
        <div className="col-xl-5 col-lg-6" data-aos="fade-right">
          <div className="title-style-sixteen">
            {/* section 3 up_text */}
            <div className="upper-title">{i18n.language=="en"?section_3_upper_title:section_3_upper_title_fa}</div>
            <h2>
              {/* READY, <br /> HEADSET, GO */}
              {i18n.language=="en"?section_3_title:section_3_title_fa}
            </h2>
          </div>
          <p className="mt-30 pr-xl-5">
         {i18n.language=="en"?section_3_description:section_3_description_fa}
          </p>
        </div>
        <div
          className="col-xl-7 col-lg-5 col-md-8 ml-auto text-right"
          data-aos="fade-left"
        >
          <div className="img-meta d-inline-block position-relative md-mt-70">
            {/* <img src="images/media/meta.jpg" alt="media" /> */}
            <img   src={`${section_3_image?.asset?.url}`} alt="media" />
            {/* <img
              src="images/shape/ar-mini.jpg"
              alt="media"
              className="shapes shape-one"
              data-aos="fade-down"
              data-aos-delay="300"
            /> */}
            <img
             src={`${section_3_small_image?.asset?.url}`}
              alt="media"
              className="shapes shape-two"
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFeaturesOne;
