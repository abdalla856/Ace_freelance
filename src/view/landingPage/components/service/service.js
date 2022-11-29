import React, { useState } from "react";
import "./service.css";

import useOnScreen from "../../../../shared/intersection";
import { useInView } from "react-intersection-observer";
const Service = () => {
  const [bot, setBot] = useState("0%");
  const [trans, setTrans] = useState(false);
  const [bottom, setBottom] = useState();
  const [top, setTop] = useState();
  const [fix, setFix] = useState(false);
  const web = React.useRef();
  const inView = useOnScreen(web);
  const graphic = React.useRef();
  const inView3 = useOnScreen(graphic);
  const mech = React.useRef();
  const inView4 = useOnScreen(mech);
  const markting = React.useRef();
  const inView2 = useOnScreen(markting);

  const ref = React.useRef();

  const changeBackground = () => {
    if (bottom -700>= window.scrollY && window.scrollY >= top) {
      setFix(true);

    } else {
      setFix(false);
    }
    if (bottom -700<= window.scrollY && fix) {
      setBot("75%");
      setTrans(false)
   


    } else if (window.scrollY <= top && !(bottom -250<= window.scrollY)&& fix) {
      setBot("0%");

    }
     if((bottom <= window.scrollY)){
      setTrans(false)
      console.log(bottom)
      console.log(window.scrollY)


    }else if(window.scrollY >= top && !(bottom -2000<= window.scrollY) ){
      setTrans(true)

    }

  };

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (ref.current.offsetTop > window.scrollY && window.scrollY > 600) {
        const top2 = ref.current.getBoundingClientRect().top + window.scrollY;
        setTop(top2);

      } else if (ref.current.offsetTop < window.scrollY) {
        // setTop(  window.scrollY-ref.current.offsetTop);
        // console.log(ref.current.offsetTop);
        // console.log(window.scrollY);
      }
      setBottom(ref.current.offsetHeight + top);
      
    });
  });

  React.useEffect(() => {
    changeBackground();

    window.addEventListener("scroll", changeBackground);

  });

  return (
    <div className="service" ref={ref}>
      <div className="container">
        {/* <FadeInSection> */}
          <h2 className={`Serve`}>Our Services</h2>
        {/* </FadeInSection> */}
        <div className="service_container">
          <div className="left_side">
            <ul
              className={`service_cat`}
              style={{
                position: fix ? "fixed" : "relative",
                top: fix ? "30%" : bot,
                transition: trans ? "top 1s linear" : "none",
              }}
            >
              <li>
                <div style={{ display: "flex" }}>
                  <p className={`web ${inView ? "active" : ""}`}>
                    <sup className={`web ${inView ? "active" : ""}`}>01</sup>
                    Website Development{" "}
                  </p>
                </div>
              </li>
              <li>
                <div style={{ display: "flex" }}>
                  <p className={`strategy ${inView2 ? "active" : ""}`}>
                    <sup className={`web ${inView2 ? "active" : ""}`}>02</sup>
                    Strategy, Markting&Maintenance
                  </p>
                </div>
              </li>
              <li>
                <div style={{ display: "flex" }}>
                  <p className={`web ${inView3 ? "active" : ""}`}>
                    <sup className={`web ${inView3 ? "active" : ""}`}>03</sup>
                    Graphic Design
                  </p>
                </div>
              </li>
              <li>
                <div style={{ display: "flex" }}>
                  <p className={`web ${inView4 ? "active" : ""}`}>
                    <sup className={`web ${inView4 ? "active" : ""}`}>04</sup>
                    Mechanical Design
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="right_side">
            {/* {console.log(isVisible)} */}

            <div
              className={`web`}
              id="web"
              // style={{ display: !inView1 ? "none" : "" }}
              // style={{opacity :"0"}}

              ref={web}
            >
              <ul>
                <li>UX</li>
                <li>Corporate Website</li>
                <li>E-Commerce</li>
                <li>Landing Page</li>
                <li>E-Portfolio/CV</li>
                <li>Landing Wordpress</li>
              </ul>
              <p>
                From one-page site to complex admin panels, we are ready to
                create your own website using the latest technologies. Fast page
                load speed, responsive, user-friendly and eye-catching are our
                main criterias to tailor your website for your target audience.
              </p>
              <a href="#web">learn more</a>
            </div>

            <div
              className="markting"
              ref={markting}

              // style={{ display: !isMarkting ? "none" : "" }}
            >
              <ul>
                <li>SEO</li>
                <li>Online Advertising</li>
                <li>Hosting</li>
                <li>Maintenance</li>
                <li>Domain Purchase</li>
                <li>QA Testing</li>
              </ul>
              <p>
                We provide technical assistance with software tools, enabling
                you reaching for the right audience at the right time to boost
                traffic to your website. We assist in keeping projects updated,
                from technology changes to the addition of new functionality.
              </p>
              <a href="#markting">learn more</a>
            </div>
            <div
              className="graphic"
              // style={{ display: !isGraphic ? "none" : "" }}
              ref={graphic}
            >
              <ul>
                <li>Flyer</li>
                <li>Infographics</li>
                <li>Poster</li>
                <li>Social Media</li>
                <li>Restaurant Menu</li>
                <li>Resume</li>
                <li>Portfolio</li>
                <li>Cards</li>
              </ul>
              <p>
                From one-page site to complex admin panels, we are ready to
                create your own website using the latest technologies. Fast page
                load speed, responsive, user-friendly and eye-catching are our
                main criterias to tailor your website for your target audience.
              </p>
              <a href="#graphic">learn more</a>
            </div>
            <div
              className="mech"
              // style={{ display: !isMech ? "none" : "" }}
              ref={mech}
            >
              <ul>
                <li>SOLIDWORKS</li>
                <li>AutoCAD</li>
                <li>Design Consultancy</li>
                <li>3D Modelling</li>
                <li>Simulation</li>
                <li>Rendering</li>
              </ul>
              <p>
                We design and customize your mechanical concept idea from
                scratch that meets user needs and objectives. Using SOLIDWORKS
                or AutoCAD, We improve the ease of product use, reduce cost, and
                increase efficiency and accuracy.
              </p>
              <a href="#mech">learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
