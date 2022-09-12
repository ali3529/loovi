import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";



const Service = ({data}) => {
  const { t, i18n } = useTranslation();
  const serviceContent = 
  
  [
    {
      img: "img_36",
      titleTextOne:i18n.language == "en" ?data?.serviceContent?.service_content_titleTextOne:data?.serviceContent?.service_content_titleTextOne_fa ,
      // "Friendly dashboard &",
      // TitleTextTwo: "Cool Interface.",
    },
    {
      img: "img_37",
      titleTextOne:i18n.language == "en" ?data?.serviceContent?.service_content_2_titleTextOne:data?.serviceContent?.service_content_2_titleTextOne_fa ,
      //  " Interface Design",
      // TitleTextTwo: "with UX.",
    },
    {
      img: "img_38",
      titleTextOne:i18n.language == "en" ?data?.serviceContent?.service_content_3_titleTextOne:data?.serviceContent?.service_content_3_titleTextOne_fa ,
      // " Social Media & Online",
      // TitleTextTwo: "Marketing.",
    }
  
  ];
  return (
    <div className="row">
      {serviceContent.map((val, i) => (
        <div className="col-lg-4 col-md-6" key={i}>
          <div className="block-style-thirtyFour">
            <img
              src={`images/gallery/${val.img}.jpg`}
              alt="gallery"
              className="w-100 tran5s"
            />
            <div className="hover-content">
              <h4 className="font-gordita">
                <Link to="#">
                  {" "}
                  {val.titleTextOne} 
                  {/* <br /> {val.TitleTextTwo} */}
                </Link>
              </h4>

              {/* <Link to="/service-details" className="arrow">
                <i className="flaticon-right-arrow-1"></i>{" "}
              </Link> */}
            </div>
            {/* <!-- /.hover-content --> */}
          </div>
          {/* <!-- /.block-style-thirtyFour --> */}
        </div>
      ))}
    </div>
  );
};

export default Service;
