import React, { useState } from "react";
import "./service.css";
import FadeInSection from "../../../../shared/fade";
import useOnScreen from "../../../../shared/intersection";
import { useInView } from "react-intersection-observer";
const Service = () => {
  const [bot, setBot] = useState("10%");

  const [bottom, setBottom] = useState(0);
  const [top, setTop] = useState(0);
  const [fix, setFix] = useState(false);
  const [listHeight, setListHeight] = useState(0);
  const web = React.useRef();
  const inView = useOnScreen(web);
  const graphic = React.useRef();
  const inView3 = useOnScreen(graphic);
  const mech = React.useRef();
  const inView4 = useOnScreen(mech);
  const markting = React.useRef();
  const inView2 = useOnScreen(markting)

  // const { web, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0.2,
  // });

  const ref = React.useRef();
  const ref1 = React.useRef();
  const ref_list = React.useRef();
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (bottom - 650 >= window.scrollY && window.scrollY >= top-10) {
      setFix(true);
      console.log("hi");
    } else {
      setFix(false);
    }
    if (bottom - 650 <= window.scrollY){
      setBot("75%")
    }else if (window.scrollY <= top){
      setBot("4%");
      
    }

  };

  React.useEffect(() => {
    setBottom(ref.current.offsetTop + ref.current.offsetHeight);
    setTop(ref.current.offsetTop);
    setListHeight(ref_list.current.offsetHeight * 6);
  }, [ref, ref_list]);

  React.useEffect(() => {
    changeBackground();
    console.log(listHeight);

    window.addEventListener("scroll", changeBackground);
  });

  return (
    <div className="service" ref={ref1}>
      <div className="container">
        <FadeInSection>
          <h2 className={`Serve  is-visible `}>Our Service</h2>
        </FadeInSection>
        <div className="service_container">
          <div
            className="left_side"
    
          >
            <ul
              className={`service_cat`}
              style={{
                position: fix ? "fixed" : "relative",
                top: fix ? "20%" : bot,
                // bottom: bot ? "100%" : "100%",
              }}
            >
              <li ref={ref_list}>
                <div style={{ display: "flex" }}>
                  {/* {console.log(isVisible)} */}
                  <sup>01</sup>{" "}
                  <p className={`web ${inView ? "active" : ""}`}>
                    Website Development{" "}
                  </p>
                </div>
              </li>
              <li>
                <div
                  style={{ display: "flex" }}
                  >
                  <sup>02</sup>
                  <p
                  className={`strategy ${inView2 ? "active" : ""}`}
                  
                  > Strategy, Matkting&Maintenace</p>
                </div>
              </li>
              <li>
                <div
                  style={{ display: "flex" }}
                  >
                  <sup>03</sup>
                  <p
                  className={`web ${inView3 ? "active" : ""}`}
                  >Graphic Design</p>
                </div>
              </li>
              <li>
                <div
                  style={{ display: "flex" }}
                
                >
                  <sup>04</sup>
                  <p
                  className={`web ${inView4 ? "active" : ""}`}
                  
                  > Mchanical Design</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="right_side" ref={ref}>
            {/* {console.log(isVisible)} */}
            <FadeInSection>
              <div
                className={`web`}
                // style={{ display: !inView1 ? "none" : "" }}
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
                  create your own website using the latest technologies. Fast
                  page load speed, responsive, user-friendly and eye-catching
                  are our main criterias to tailor your website for your target
                  audience.
                </p>
                <a href="#web">learn more</a>
              </div>
            </FadeInSection>
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
