import React, { useState, useEffect } from "react";
import "./projects.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper";
// import "./styles.css";
const Project = () => {

  const [checked, setChecked] = useState({
    all: true,
    web: false,
    mechanical: false,
    marketing: false,
    graphic: false,
  });
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
    const allproduct = [
      ...web,
      ...graphic,
      ...marketing,
      ...mechanical,
    ]
    return { web, marketing, mechanical, graphic , allproduct };
  })
  


  
  const [allProducts, setallProducts] = useState( products?.allproduct);


  const all = () => {
    setChecked({
      all: true,
      web: false,
      mechanical: false,
      marketing: false,
      graphic: false,
    });
    setallProducts([
      ...products.web,
      ...products.graphic,
      ...products.marketing,
      ...products.mechanical,
    ]);
  };
  const web = () => {
    setChecked({
      all: false,
      web: true,
      mechanical: false,
      marketing: false,
      graphic: false,
    });
    setallProducts(products.web);
  };
  const mechanical = () => {
    setChecked({
      all: false,
      web: false,
      mechanical: true,
      marketing: false,
      graphic: false,
    });
    setallProducts(products.mechanical);
  };
  const graphic = () => {
    setChecked({
      all: false,
      web: false,
      mechanical: false,
      marketing: false,
      graphic: true,
    });
    setallProducts(products.graphic);
  };
  const marketing = () => {
    setChecked({
      all: false,
      web: false,
      mechanical: false,
      marketing: true,
      graphic: false,
    });
    setallProducts(products.marketing);
  };
  if(products !== 0)
  return (
    <div id="project" className="proj_section">
      <div className="container">
        <h1 className="project_title">Projects</h1>
        <ul className="project_filters">
          <li className={checked.all ? "active_filter" : ""} onClick={all}>
            All
          </li>
          <li className={checked.web ? "active_filter" : ""} onClick={web}>
            Web Development
          </li>
          <li
            className={checked.marketing ? "active_filter" : ""}
            onClick={marketing}
          >
            Strategy, Marketing, & Maintenance{" "}
          </li>
          <li
            className={checked.graphic ? "active_filter" : ""}
            onClick={graphic}
          >
            Graphic Design{" "}
          </li>
          <li
            className={checked.mechanical ? "active_filter" : ""}
            onClick={mechanical}
          >
            Mechanical Design
          </li>
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
            modules={[Autoplay]}
            className="mySwiper"
          >
            {checked.all ? (products.allproduct.map((product) => (
              <SwiperSlide className="swipr_project">
                <img src={product?.listImages[0]} alt="" />
              </SwiperSlide>))) : ( allProducts.map((product) => (
              <SwiperSlide className="swipr_project">
                <img src={product?.listImages[0]} alt="" />
              </SwiperSlide>) ))

            }
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Project;
