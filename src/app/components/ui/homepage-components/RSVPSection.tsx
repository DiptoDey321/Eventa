"use client";
import "./HomeStyle.css";
import {motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Carousel, Col, Row } from "antd";
import { useEffect } from "react";

const RSVPSection = () => {

  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const listVariants = {
    hidden: {
      y: 60,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 2,
        ease: "linear",
      },
    },
  };

  const containerVariants = {
    hidden: {
      scale: 1.4,
      opacity: 0,
      rotate: 35,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="RSVP-Section">
      <Row align="middle">
        <Col md={24} lg={12}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={listVariants}
          >
            <div className="RSVP-description">
              <span>
                Free RSVP & Ticketed Events: <br /> Customize Your Way
              </span>
              <span className="basic-descriptions">
                Craft a unique event experience. Design your event page with
                your brand in mind. Choose colors, fonts, and layouts that
                reflect your style. Free RSVP and paid ticketing options
                available.
              </span>
            </div>
            <div className="btn">
              <a href="">Lunch an event</a>
            </div>
          </motion.div>
        </Col>
        <Col md={24} lg={12}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="cau-parent-div common-margin-top-mobile"
          >
            <Carousel autoplay>
              <div className="cau-content-parent">
                <div className="caur-details">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="240"
                    viewBox="0 0 222.784 296.297"
                  >
                    <g
                      id="two-wine-glasses-with-heart-svgrepo-com"
                      transform="translate(-36.757 -0.001)"
                    >
                      <path
                        id="Path_2712"
                        data-name="Path 2712"
                        d="M259.541,118.026c0-21.374-8.473-42.031-23.393-56.289A8.035,8.035,0,0,0,230.7,59.3H198.073c17.142-30,2.086-52.865-12.51-57.543-18.158-5.794-31.012,3.477-37.25,17.273C140.823,6.668,129.227-4.094,111.079,1.7c-14.6,4.677-29.662,27.6-12.523,57.6H65.928A8.236,8.236,0,0,0,60.4,61.736a78.081,78.081,0,0,0-23.644,56.178c0,38.575,27.225,70.555,62.225,74.814V280.3H83.315a8,8,0,0,0,0,16h47a8,8,0,0,0,0-16H114.982v-87.57a64.5,64.5,0,0,0,33-13.631,68.287,68.287,0,0,0,33,13.631V280.3H165.315a8,8,0,0,0,0,16h47a8,8,0,0,0,0-16H196.982v-87.57C231.982,188.47,259.541,156.6,259.541,118.026ZM177.468,112.3a82.222,82.222,0,0,0-11.976-37h61.879a63.177,63.177,0,0,1,16.066,37Zm-32.1-37a63.177,63.177,0,0,1,16.066,37H53.193a63.19,63.19,0,0,1,16.066-37Z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  <span>Annual Party</span>
                </div>
              </div>
              <div>
                <div className="cau-content-parent">
                  <div className="caur-details">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="200"
                      height="240"
                      viewBox="0 0 222.784 296.297"
                    >
                      <g
                        id="two-wine-glasses-with-heart-svgrepo-com"
                        transform="translate(-36.757 -0.001)"
                      >
                        <path
                          id="Path_2712"
                          data-name="Path 2712"
                          d="M259.541,118.026c0-21.374-8.473-42.031-23.393-56.289A8.035,8.035,0,0,0,230.7,59.3H198.073c17.142-30,2.086-52.865-12.51-57.543-18.158-5.794-31.012,3.477-37.25,17.273C140.823,6.668,129.227-4.094,111.079,1.7c-14.6,4.677-29.662,27.6-12.523,57.6H65.928A8.236,8.236,0,0,0,60.4,61.736a78.081,78.081,0,0,0-23.644,56.178c0,38.575,27.225,70.555,62.225,74.814V280.3H83.315a8,8,0,0,0,0,16h47a8,8,0,0,0,0-16H114.982v-87.57a64.5,64.5,0,0,0,33-13.631,68.287,68.287,0,0,0,33,13.631V280.3H165.315a8,8,0,0,0,0,16h47a8,8,0,0,0,0-16H196.982v-87.57C231.982,188.47,259.541,156.6,259.541,118.026ZM177.468,112.3a82.222,82.222,0,0,0-11.976-37h61.879a63.177,63.177,0,0,1,16.066,37Zm-32.1-37a63.177,63.177,0,0,1,16.066,37H53.193a63.19,63.19,0,0,1,16.066-37Z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <span>monthly Party</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="cau-content-parent">
                  <div className="caur-details">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="200"
                      height="240"
                      viewBox="0 0 222.784 296.297"
                    >
                      <g
                        id="two-wine-glasses-with-heart-svgrepo-com"
                        transform="translate(-36.757 -0.001)"
                      >
                        <path
                          id="Path_2712"
                          data-name="Path 2712"
                          d="M259.541,118.026c0-21.374-8.473-42.031-23.393-56.289A8.035,8.035,0,0,0,230.7,59.3H198.073c17.142-30,2.086-52.865-12.51-57.543-18.158-5.794-31.012,3.477-37.25,17.273C140.823,6.668,129.227-4.094,111.079,1.7c-14.6,4.677-29.662,27.6-12.523,57.6H65.928A8.236,8.236,0,0,0,60.4,61.736a78.081,78.081,0,0,0-23.644,56.178c0,38.575,27.225,70.555,62.225,74.814V280.3H83.315a8,8,0,0,0,0,16h47a8,8,0,0,0,0-16H114.982v-87.57a64.5,64.5,0,0,0,33-13.631,68.287,68.287,0,0,0,33,13.631V280.3H165.315a8,8,0,0,0,0,16h47a8,8,0,0,0,0-16H196.982v-87.57C231.982,188.47,259.541,156.6,259.541,118.026ZM177.468,112.3a82.222,82.222,0,0,0-11.976-37h61.879a63.177,63.177,0,0,1,16.066,37Zm-32.1-37a63.177,63.177,0,0,1,16.066,37H53.193a63.19,63.19,0,0,1,16.066-37Z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <span>Quater Party</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="cau-content-parent">
                  <div className="caur-details">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="200"
                      height="240"
                      viewBox="0 0 222.784 296.297"
                    >
                      <g
                        id="two-wine-glasses-with-heart-svgrepo-com"
                        transform="translate(-36.757 -0.001)"
                      >
                        <path
                          id="Path_2712"
                          data-name="Path 2712"
                          d="M259.541,118.026c0-21.374-8.473-42.031-23.393-56.289A8.035,8.035,0,0,0,230.7,59.3H198.073c17.142-30,2.086-52.865-12.51-57.543-18.158-5.794-31.012,3.477-37.25,17.273C140.823,6.668,129.227-4.094,111.079,1.7c-14.6,4.677-29.662,27.6-12.523,57.6H65.928A8.236,8.236,0,0,0,60.4,61.736a78.081,78.081,0,0,0-23.644,56.178c0,38.575,27.225,70.555,62.225,74.814V280.3H83.315a8,8,0,0,0,0,16h47a8,8,0,0,0,0-16H114.982v-87.57a64.5,64.5,0,0,0,33-13.631,68.287,68.287,0,0,0,33,13.631V280.3H165.315a8,8,0,0,0,0,16h47a8,8,0,0,0,0-16H196.982v-87.57C231.982,188.47,259.541,156.6,259.541,118.026ZM177.468,112.3a82.222,82.222,0,0,0-11.976-37h61.879a63.177,63.177,0,0,1,16.066,37Zm-32.1-37a63.177,63.177,0,0,1,16.066,37H53.193a63.19,63.19,0,0,1,16.066-37Z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <span>Birthday Party</span>
                  </div>
                </div>
              </div>
            </Carousel>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default RSVPSection;
