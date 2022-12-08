import React from "react";
import { Box, Grid } from "@mui/material";
import "./about.css";
import FadeInSection from "../../../../shared/fade/fade";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <h1 className="about-title">ABOUT ACE FREELANCING</h1>
        <div className="box">
          <div className="service-left">
            <div className="trust">Trusted By</div>
            <div className="cooperated_company">
              <img
                src={require("../../../../assets/imgs/14.png")}
                alt="Cooperated Company"
              />
              <img
                src={require("../../../../assets/imgs/21.png")}
                alt="Cooperated Company"
              />
            </div>
            <p>
              Our aim is to provide software solutions that meet the
              requirements and demands of our clients.
            </p>
            <p>
              From concept to iterative development support, we will assist you
              to ideate, design, and implement your product as well as
              post-publish tweaks, fixes, and upgrades to boost your platform's
              performance.
            </p>
            <button>Download Portfolio</button>
          </div>
          <div className="project_num">
            <FadeInSection>
              <p className="num">52+</p>
              <div className="num_text">projects done</div>
            </FadeInSection>
            <Box className="rating">
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <FadeInSection>
                    <p>4.9</p>
                    <div>Ratings on SHOPEE</div>
                  </FadeInSection>
                </Grid>
                <Grid item xs={6}>
                  <FadeInSection>
                    <p>76</p>
                    <div>Clients</div>
                  </FadeInSection>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
      {/* </FadeInSection> */}
    </div>
  );
};

export default About;
