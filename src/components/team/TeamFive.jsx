import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";



const TeamFive = ({data}) => {
  const { t, i18n } = useTranslation();
  const TeamContent = [
    {
      designation: i18n.language == "en" ?data?.our_team?.ourteam_skill:data?.our_team?.ourteam_skill_fa,
      name:i18n.language == "en" ?data?.our_team?.ourteam_name:data?.our_team?.ourteam_name_fa,
      // img: data?.our_team?.our_team_image_1?.asset?.url,
      animationDelay: "200",
      img: "img_67",
    },
    {
      designation: i18n.language == "en" ?data?.our_team?.ourteam_skill:data?.our_team?.ourteam_skill_fa,
      name:i18n.language == "en" ?data?.our_team?.ourteam_name:data?.our_team?.ourteam_name_fa,
      // img: data?.our_team?.our_team_image_1?.asset?.url,
      img: "img_67",
      animationDelay: "250",
    },
    {
      designation: i18n.language == "en" ?data?.our_team?.ourteam_skill:data?.our_team?.ourteam_skill_fa,
      name:i18n.language == "en" ?data?.our_team?.ourteam_name:data?.our_team?.ourteam_name_fa,
      // img: data?.our_team?.our_team_image_1?.asset?.url,
      img: "img_68",
      animationDelay: "300",
    }
  
   
  ];
  return (
    <>
      {TeamContent.map((item, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={item.animationDelay}
          key={i}
        >
          <Link to="/team-details-v1" className="team-member">
            <div className="img-holder">
              <img src={`images/media/${item.img}.png`} alt="team" />
            </div>
            <h6 className="name">{item.name}</h6>
            <div className="position">{item.designation}</div>
          </Link>
        </div>
       ))} 
    </>
  );
};

export default TeamFive;
