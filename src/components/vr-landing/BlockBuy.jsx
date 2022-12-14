import React from "react";
import { useTranslation } from "react-i18next";

function BlockBuy({ data }) {
  const { t, i18n } = useTranslation();
  const {
    section_5_description,
    section_5_description_fa,
    section_5_image,
    Section_5_Image,
    section_5_title,
    section_5_title_fa,
    section_5_link,
  } = data;

  return (
    <div className="fancy-feature-fortyOne lg-container mt-180 md-mt-120 ">
      <div className="container">
        <div className="border-bottom pb-150 md-pb-80">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-last" data-aos="fade-left">
              <div className="title-style-sixteen">
                <h2>{i18n.language=="en"?section_5_title:section_5_title_fa}</h2>
              </div>
              <p className="pr-xl-5 mt-30 mb-50">{i18n.language=="en"?section_5_description:section_5_description_fa}</p>
              <a href={`${section_5_link}`} className="buy-btn tran3s">
               
                {i18n.language=="en"?" BUY NOW":"خرید"}
              </a>
            </div>
            <div className="col-lg-6" data-aos="fade-right">
              <img
                src={`${section_5_image?.asset?.url}`}
                alt=""
                className="md-mt-70"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.container --> */}
    </div>
  );
}

export default BlockBuy;
