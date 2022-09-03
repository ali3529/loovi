import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestProduct = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const vrProducts = [
    {
      _id: 1,
      image: "location",
      title: "Augmented Reality",
    },
    {
      _id: 2,
      image: "Metaverse",
      title: "Metaverse",
    },
    {
      _id: 3,
      image: "fer",
      title: "Virtual Reality",
    },
  ];

  return (
    <>
      <div
        className="fancy-feature-thirtySix lg-container pt-170 pb-110 md-pt-120 md-pb-60"
        id="product"
      >
        <div className="container position-relative">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4"
              data-aos="fade-right"
              data-aos-duration="1200"
            ></div>
            <div className="col-xl-9 col-lg-8">
              <div className="product_slider_one vr-landing-slider">
                <Slider {...settings}>
                  {vrProducts.map((product) => (
                    <div className="item" key={product._id}>
                      <div className="block-style-thirtySeven">
                        <div className="img-meta d-flex align-items-center justify-content-center">
                          <img
                            src={`images/media/${product.image}.jpg`}
                            alt="vr product"
                          />
                        </div>
                        <h4 className="p-title mt-25">
                          <a href={product.productLink}>{product.title}</a>
                        </h4>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProduct;
