import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useHistory } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { getPortfiloData } from "../../services/UseSantyClient";

const TabListContent = ["All", "Development", "Plugin", "Desing", "Branding"];

const PortfolioSix = ({portfilo}) => {
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const AllPortfolioItem = [
    {
      img: portfilo?.portfoli_1_image?.asset?.url,
      title:i18n.language == "en" ?portfilo?.portfolio_1_title:portfilo?.portfolio_1_title_fa,
      meta: i18n.language == "en" ?portfilo?.portfolio_1_description:portfilo?.portfolio_1_description_fa,
      dalayAnimation: "",
      description: i18n.language == "en" ?portfilo?.portfolio_1_detail_description:portfilo?.portfolio_1_detail_description_fa,
    },
    {
      img: portfilo?.portfoli_2_image?.asset?.url,
      title:i18n.language == "en" ?portfilo?.portfolio_2_title:portfilo?.portfolio_2_title_fa,
      meta: i18n.language == "en" ?portfilo?.portfolio_2_description:portfilo?.portfolio_2_description_fa,
      dalayAnimation: "100",
      description: i18n.language == "en" ?portfilo?.portfolio_2_detail_description:portfilo?.portfolio_2_detail_description_fa,
    },
    {
      img: portfilo?.portfoli_3_image?.asset?.url,
      title:i18n.language == "en" ?portfilo?.portfolio_3_title:portfilo?.portfolio_3_title_fa,
      meta: i18n.language == "en" ?portfilo?.portfolio_3_description:portfilo?.portfolio_3_description_fa,
      dalayAnimation: "100",
      description: i18n.language == "en" ?portfilo?.portfolio_3_detail_description:portfilo?.portfolio_3_detail_description_fa,
    },
  ];
  return (
    <div className="mixitUp-container  gutter-space-one d-flex flex-wrap">
      {AllPortfolioItem.map((item, i) => (
        <div
          className="mix"
          key={i}
          data-aos="fade-right"
          data-aos-delay={item.dalayAnimation}
        >
          <div className="portfolio-block-two position-relative">
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={item.img}
                alt={item.meta}
                className="w-100 h-100 tran4s img-meta"
              />
              <div className="fancybox">
                <i className="fa fa-arrows-alt" aria-hidden="true"></i>
              </div>
            </div>
            <div className="hover-content">
              <h3 onClick={()=> history.push("/portfolio-details", {item:item} )}>
                
                <Link  to="/portfolio-details"  state={{item:item}} >{item.title}</Link>
              </h3>
              <div className="tag">{item.meta}</div>
            </div>
            {/* /.hover-content */}
          </div>
          {/* /.portfolio-block-two */}
        </div>
      ))}
    </div>
  );
};

export default PortfolioSix;
