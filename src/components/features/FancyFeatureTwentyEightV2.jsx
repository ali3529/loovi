import React from "react";
import { useTranslation } from "react-i18next";

const FancyFeatureTwentyEightV2 = ({data}) => {
  const { t, i18n } = useTranslation();
const featureContent = [
  {
    icon: "186",
    title: "Daily Updates",
    subTitle: "Elit esse cillum dolore eu fugiat nulla pariatur lom elit",
    dealyAnimation: "0",
  },
  {
    icon: "187",
    title: "Easy Cutomization",
    subTitle: "Nulla vitae elit libero, haretra augue. Donec id elit non m.",
    dealyAnimation: "100",
  },
  {
    icon: "188",
    title: "Fast Support",
    subTitle:
      " Nulla vitae elit libero, a phare augue. Donec id elit non mi porta.",
    dealyAnimation: "200",
  },
];

  return (
    <div className="row justify-content-between">
     
        <div
          className="col-md-4 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={300}
          
        >
          <div className="block-style-twentyEight text-center mt-40">
            <div className="icon d-flex justify-content-center align-items-end">
              <img src={`images/icon/186.svg`} alt="icon" />
            </div>
            <h4 className="font-gordita">{i18n.language == "en" ?data?.section_3_service_list?.title1:data?.section_3_service_list?.title1_fa}</h4>
            <p>{i18n.language == "en" ?data?.section_3_service_list?.description1:data?.section_3_service_list?.description1_fa}</p>
          </div>{" "}
          {/* <!-- /.block-style-twentyEight --> */}
        </div>
     <div
          className="col-md-4 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={300}
          
        >
          <div className="block-style-twentyEight text-center mt-40">
            <div className="icon d-flex justify-content-center align-items-end">
              <img src={`images/icon/187.svg`} alt="icon" />
            </div>
            <h4 className="font-gordita">{i18n.language == "en" ?data?.section_3_service_list?.title2:data?.section_3_service_list?.title2_fa}</h4>
            <p>{i18n.language == "en" ?data?.section_3_service_list?.description2:data?.section_3_service_list?.description2_fa}</p>
          </div>{" "}
          {/* <!-- /.block-style-twentyEight --> */}
        </div>
     <div
          className="col-md-4 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={300}
          
        >
          <div className="block-style-twentyEight text-center mt-40">
            <div className="icon d-flex justify-content-center align-items-end">
              <img src={`images/icon/188.svg`} alt="icon" />
            </div>
            <h4 className="font-gordita">{i18n.language == "en" ?data?.section_3_service_list?.title3:data?.section_3_service_list?.title3_fa}</h4>
            <p>{i18n.language == "en" ?data?.section_3_service_list?.description3:data?.section_3_service_list?.description3_fa}</p>
          </div>{" "}
          {/* <!-- /.block-style-twentyEight --> */}
        </div>
    
    </div>
  );
};

export default FancyFeatureTwentyEightV2;
