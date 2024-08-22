/* eslint-disable @next/next/no-img-element */
"use client";
import "./HomeStyle.css";
import { Col, message, Row } from "antd";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import toolBgImg from '../../../../../public/tools-bg-img.webp'

const ToolManagmentSections = () => {

   const controls = useAnimation();

   const { ref, inView } = useInView({
     threshold: 0.2,
    //  triggerOnce: true,
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
        duration: 0.2,
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
      <div className="tools-max-width ">
        <Row align="middle">
          <Col md={24} lg={24} xl={12}>
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
                <a onClick={() => message.info("comign soon..")}>Get Started</a>
              </div>
            </motion.div>
          </Col>
          <Col md={22} lg={24} xl={12}>
            <div className="tool-image-parent common-margin-top-mobile">
              <Image layout="responsive" src={toolBgImg} alt="Description" />
              <div className="inner-img">
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
                  <img
                    src="https://i.ibb.co/XX4B5kY/mobile.png"
                    alt=""
                    srcSet=""
                  />
                </motion.div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ToolManagmentSections;
