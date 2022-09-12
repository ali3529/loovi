import React from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import VisibilitySensor from "react-visibility-sensor";


const CounterThree = ({data}) => {
  const { t, i18n } = useTranslation();
  console.log("dvk;msd",data?.aboutus_counter);
const counterUpContent = [
  {
    icon: "23",
    startCount: "0",
    endCount: "13",
    endCounts: data?.aboutus_counter?.about_us_counter_1,
    meta:i18n.language == "en" ? data?.aboutus_counter?.about_us_counter_title_1: data?.aboutus_counter?.about_us_counter_1_title_fa,
  },
  {
    icon: "24",
    startCount: "0",
    endCount: "3000",
    endCounts: data?.aboutus_counter?.about_us_counter_2,
    meta:i18n.language == "en" ? data?.aboutus_counter?.about_us_counter_title_2: data?.aboutus_counter?.about_us_counter_2_title_fa,
  },
  {
    icon: "25",
    startCount: "0",
    endCount: "134",
    endCounts: data?.aboutus_counter?.about_us_counter_3,
    meta:i18n.language == "en" ? data?.aboutus_counter?.about_us_counter_title_3: data?.aboutus_counter?.about_us_counter_3_title_fa,
  },
];
  const [focus, setFocus] = React.useState(false);

  return (
    <div className="row justify-content-center">
      {counterUpContent.map((val, i) => (
        <div
          className="col-lg-4 col-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          key={i}
        >
          <div className="counter-box-three">
            <div className="icon">
              <img src={`images/icon/${val.icon}.svg`} alt="icon" />
            </div>
            <h2 className="number">
              <span className="timer">
                {" "}
                <CountUp
                  start={focus ? val.startCount : null}
                  end={val.endCount}
                  duration={1}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>{" "}
              </span>{" "}
              m
            </h2>
            <p className="font-rubik">{val.meta}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterThree;
