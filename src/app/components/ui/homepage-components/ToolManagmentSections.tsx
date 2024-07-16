/* eslint-disable @next/next/no-img-element */
"use client";
import "./HomeStyle.css";
import { Col, Row } from "antd";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ToolManagmentSections = () => {

   const controls = useAnimation();

   const { ref, inView } = useInView({
     threshold: 0.1,
   });

  const listVariants = {
    hidden: {
      x: -45,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
        ease: "linear",
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
    <div className="tool-management-container">
      <Row align="middle">
        <Col span={12}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={listVariants}
            className="tool-left-container"
          >
            <div className="RSVP-description">
              <span>
                Unrivaled Tools to Manage &
                <br /> Grow Your Community
              </span>
              <span className="basic-descriptions">
                Craft a unique event experience. Design your event page with
                your brand in mind. Choose colors, fonts, and layouts that
                reflect your style. Free RSVP and paid ticketing options
                available.
              </span>
            </div>
            <div className="btn">
              <a href="">Get Started</a>
            </div>
          </motion.div>
        </Col>
        <Col span={12}>
          <div className="tool-image-parent">
            <motion.div
              animate={{ y: ["0px", "30px", "0px", "-30px", "0px"] }}
              transition={{
                y: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className=""
            >
              <img src="https://i.ibb.co/XX4B5kY/mobile.png" alt="" srcSet="" />
            </motion.div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ToolManagmentSections;
