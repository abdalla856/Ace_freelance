import React from "react";
import "./projects.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import {  Autoplay } from "swiper";
// import "./styles.css";
const Project = () => {
  return (
    <div id="project" className="proj_section">
      <div className="container"  >
          <h1 className="project_title">Projects</h1>
          <ul className="project_filters">
            <li>All</li>
            <li>Web Development</li>
            <li>Strategy, Marketing, & Maintenance </li>
            <li>Graphic Design </li>
            <li>Mechanical Design</li>
          </ul>
 
<div className="swipe_pro">

          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
          
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[ Autoplay, ]}
            className="mySwiper"
          >
            <SwiperSlide className="swipr_project">
              <img
                src={require("../../../../assets/imgs/products/Graphic.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swipr_project">
              <img
                src={require("../../../../assets/imgs/products/IKEA.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swipr_project">
              <img
                src={require("../../../../assets/imgs/products/SEO.png")}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="swipr_project">
              <img
                src={require("../../../../assets/imgs/products/web.png")}
                alt=""
                />
                
            </SwiperSlide>
            <SwiperSlide className="swipr_project">Slide 5</SwiperSlide>
            <SwiperSlide className="swipr_project">Slide 6</SwiperSlide>
            <SwiperSlide className="swipr_project">Slide 7</SwiperSlide>
            <SwiperSlide className="swipr_project">Slide 8</SwiperSlide>
            <SwiperSlide className="swipr_project">Slide 9</SwiperSlide>
          </Swiper>
</div>
      </div>
    </div>
  );
};

export default Project;
