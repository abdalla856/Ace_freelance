import React from "react";
import "./hero.css";

import FadeInSection from "../../../../shared/fade/fade";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

import { useSelector } from "react-redux";

const Herosection = () => {
  const products = useSelector((state) => {
    const web = state.Products.filter(
      (product) => product.type === "Web Development"
    );
    const marketing = state.Products.filter(
      (product) => product.type === "Marketing"
    );
    const mechanical = state.Products.filter(
      (product) => product.type === "Mechanical"
    );
    const graphic = state.Products.filter(
      (product) => product.type === "Graphic"
    );
    return { web, marketing, mechanical, graphic };
  });

  const allProducts = [
    ...products.web,
    ...products.graphic,
    ...products.marketing,
    ...products.mechanical,
  ];
  console.log(products);
  if (products.graphic.length !== 0) {
    return (
      <div className="hero">
        <div className="container">
          <div className=" main_text">
            <FadeInSection>
              <p className="vision">
                We design and develop websites, prototypes, graphics, &
                strategize your online presence.
              </p>
              <div className="services">
                ESTABLISHING AN ONLINE PRESENCE HAS NEVER BEEN EASIER.
              </div>
              <input
                type="submit"
                value="Estimate Project"
                className="estimate"
              />
            </FadeInSection>
          </div>
          {/* <Grid item xs={12} sm={12} md={12} lg={12}> */}
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            speed={3000}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: -10,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="myswiper"
          >
            <SwiperSlide className="mySwiper-slider">
              <img src={require("../../../../assets/logos/1.png")} alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slider">
              <img src={require("../../../../assets/logos/2.png")} alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slider">
              <img src={require("../../../../assets/logos/3.png")} alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slider">
              <img src={require("../../../../assets/logos/4.png")} alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slider">
              <img src={require("../../../../assets/logos/7.png")} alt="logo" />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slider">
              <img
                src={require("../../../../assets/logos/11.png")}
                alt="logo"
              />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slider">
              <img
                src={require("../../../../assets/logos/12.png")}
                alt="logo"
              />
            </SwiperSlide>

            <SwiperSlide className="mySwiper-slider">
              <img
                src={require("../../../../assets/logos/20.png")}
                alt="logo"
              />
            </SwiperSlide>
            <SwiperSlide className="mySwiper-slider">
              <img
                src={require("../../../../assets/logos/Ai.png")}
                alt="logo"
              />
            </SwiperSlide>
          </Swiper>
          {/* </Grid> */}

          <div className="product_example">
            <div className="card_example">
              <img src={products.web[1].listImages[0]} alt="web_example" />
              <div className="text">{products.web[1].title}</div>
              <hr />
              <div className="categorey">WEBSITE DESIGN & DEVELOPMENT</div>
            </div>
            <div className="card_example">
              <img
                src={products.mechanical[0].listImages[0]}
                alt="web_example"
              />
              <div className="text">{products.mechanical[1].title}</div>
              <hr />
              <div className="categorey">MECHANICAL DESIGN</div>
            </div>
            <div className="card_example">
              <img
                src={products.graphic[5].listImages[2]}
                alt="web_example"
              />
              <div className="text">{products.graphic[5].title}</div>
              <hr />
              <div className="categorey">GRAPHIC DESIGN</div>
            </div>
            <div className="card_example">
              <img
                src={products.marketing[0].listImages[0]}
                alt="web_example"
              />
              <div className="text">{products.marketing[0].title}</div>
              <hr />
              <div className="categorey_last">
                STRATEGy, MARKETING, & MAINTENANCE
              </div>
            </div>
          </div>
        </div>
      </div>
      // </div>
    );
  }
};

export default Herosection;
