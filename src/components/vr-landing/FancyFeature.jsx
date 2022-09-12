import React from "react";
import { useTranslation } from "react-i18next";

const FancyFeature = ({data}) => {
  const { t, i18n } = useTranslation();
  const rating = ["fa-star", "fa-star", "fa-star", "fa-star", "fa-star"];
  const {section_2_title,section_2_title_fa,section_2_image}=data
  console.log("sdbvdsbsdb",section_2_image);
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-11 m-auto" data-aos="fade-up">
          <div className="title-style-fifteen text-center">
            {/* <h2>Quality is matter.</h2> */}
            <h2>{i18n.language=="en"?section_2_title:section_2_title_fa}</h2>
          </div>
        </div>
      </div>
      <div
        className="img-meta mt-80 mb-65 md-mt-50 md-mb-50"
        data-aos="fade-up"
      >
        {/* <img src="images/media/feature.jpg" alt="media" className="w-100" /> */}
        <img src={`${section_2_image?.asset?.url}`} alt="media" className="w-100" />
      </div>
    </div>
  );
};

export default FancyFeature;
