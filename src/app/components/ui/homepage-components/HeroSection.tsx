/* eslint-disable @next/next/no-img-element */
"use client";
import "./HomeStyle.css";
import { Col, Row } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import hero from './../../../../../public/hero2.webp'

const HeroSection = ()=> {


  return (
    <div className="dep-hero-sectiom">
      <Row align="middle">
        <Col lg={24} xl={12}>
          <div className="dep-hero-right-side">
            <p className="title">Stress-free events</p>
            <p className="title gradient-color">Graranteed</p>
            <div className="dep-peoples-with-info">
              <img src="https://i.ibb.co/VwNrq6h/users.png" alt="" />
              <span style={{ color: "white" }}>
                Connect, create, experience. <br /> The ultimate event platform.
              </span>
            </div>

            <div className="btns">
              <a className="sec-btn" href="">
                Explore Events
              </a>
              <a className="first-btn" href="">
                Lunch an event
              </a>
            </div>

            <div className="application-link" style={{ paddingTop: "20px" }}>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.266"
                  height="42.106"
                  viewBox="0 0 34.266 42.106"
                >
                  <path
                    id="Path_2704"
                    data-name="Path 2704"
                    d="M79.815,47.267a9.567,9.567,0,0,1,4.558-8.028,9.8,9.8,0,0,0-7.72-4.172c-3.247-.342-6.4,1.943-8.051,1.943-1.687,0-4.235-1.91-6.98-1.853a10.278,10.278,0,0,0-8.651,5.275c-3.741,6.475-.951,15.99,2.633,21.223,1.793,2.565,3.888,5.425,6.63,5.324,2.683-.109,3.685-1.708,6.922-1.708,3.208,0,4.149,1.708,6.945,1.644,2.879-.045,4.692-2.575,6.422-5.161a21.155,21.155,0,0,0,2.937-5.98A9.256,9.256,0,0,1,79.815,47.267ZM74.532,31.624a9.415,9.415,0,0,0,2.156-6.749,9.6,9.6,0,0,0-6.2,3.208,8.96,8.96,0,0,0-2.212,6.5A7.926,7.926,0,0,0,74.532,31.624Z"
                    transform="translate(-51.195 -24.875)"
                    fill="#fff"
                  />
                </svg>

                <span
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <span>Download on the</span>
                  <span className="store-name">App Store</span>
                </span>
              </a>
            </div>
          </div>
        </Col>
        <Col lg={24} xl={12}>
          <div className="hero-image-container common-margin-top-mobile">
            <motion.div
              className="main-img"
              animate={{ y: ["0px", "20px", "0px", "-20px", "0px"] }}
              transition={{
                y: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <Image
                src={hero}
                width={600}
                height={500}
                alt="Picture of the author"
              />
            </motion.div>
            <div className="">
              <div className="horn-img">
                <img
                  src="https://i.ibb.co/nsrfDSP/horn-kickback.png"
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HeroSection