"use client";
import { Col, Row } from "antd";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import consultancy from './../../../../../public/help-desk-pp.png';
import venue from './../../../../../public/placeholder-pp.png';
import rsvp from './../../../../../public/rsvp-pp.png';
import ticket from './../../../../../public/ticket-pp.png';
import "./HomeStyle.css";

const EveryThingScaleSection = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const controls7 = useAnimation();

  const router = useRouter();

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: ref6, inView: inView6 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: ref7, inView: inView7 } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView1) controls1.start("visible");
    else controls1.start("hidden");
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) controls2.start("visible");
    else controls2.start("hidden");
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) controls3.start("visible");
    else controls3.start("hidden");
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) controls4.start("visible");
    else controls4.start("hidden");
  }, [controls4, inView4]);

  useEffect(() => {
    if (inView5) controls5.start("visible");
    else controls5.start("hidden");
  }, [controls5, inView5]);

  useEffect(() => {
    if (inView6) controls6.start("visible");
    else controls6.start("hidden");
  }, [controls6, inView6]);

  useEffect(() => {
    if (inView7) controls7.start("visible");
    else controls7.start("hidden");
  }, [controls7, inView7]);

  const variants = {
    div1: {
      hidden: {
        opacity: 0,
        x: -20,
        y: -20,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.2,
        },
      },
    },
    div2: {
      hidden: {
        opacity: 0,
        x: -20,
        // y: -20,
      },
      visible: {
        opacity: 1,
        x: 0,
        // y: 0,
        transition: {
          duration: 0.4,
          delay: 0.2,
        },
      },
    },
    div3: {
      hidden: {
        opacity: 0,
        x: -20,
        y: 20,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.4,
          delay: 0.2,
        },
      },
    },
    div4: {
      hidden: {
        opacity: 0,
        x: 20,
        y: -20,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.4,
          delay: 0.2,
        },
      },
    },
    div5: {
      hidden: {
        opacity: 0,
        x: 20,
      },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 0.4,
          delay: 0.2,
        },
      },
    },
    div6: {
      hidden: {
        opacity: 0,
        x: 20,
        y: 20,
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.4,
          delay: 0.2,
        },
      },
    },
  };

  const containerVariants = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.4,
        ease: "linear",
      },
    },
  };


  return (
    <div className="RSVP-Section">
      <Row align="middle">
        <Col md={24} lg={12}>
          <motion.div
            ref={ref7}
            initial="hidden"
            animate={controls7}
            variants={containerVariants}
          >
            <div className="RSVP-description">
              <span>
                Our Services
              </span>
              <span className="basic-descriptions">
              At Eventa, we offer a complete range of event solutions to make your planning experience seamless and stress-free. From e-ticketing and free RSVP services to expert event consultancy and venue booking, we handle every detail so you can focus on what matters most – enjoying the moment! Whether it’s a private gathering or a grand celebration, Eventa is here to bring your vision to life.
              </span>
            </div>
            <div className="btn">
              <a onClick={() => location.href = "/create"}>
                Lunch an event
              </a>
            </div>
          </motion.div>
        </Col>

        <Col md={24} lg={12}>
          <div className="scale-right-section">
            <Row gutter={12}>
              <Col xs={24} md={24} lg={12}>
                <motion.div
                  ref={ref1}
                  initial="hidden"
                  animate={controls1}
                  variants={variants.div1}
                  className="icon-with-des"
                >
                  <div className="icon">
                    <Image
                      src={ticket}
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="des">
                    <span>E-Ticketing</span>
                  </div>
                </motion.div>

                <motion.div
                  ref={ref2}
                  initial="hidden"
                  animate={controls2}
                  variants={variants.div2}
                  className="icon-with-des"
                >
                  <div className="icon">
                  <Image
                      src={rsvp}
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="des">
                    <span>RSVP</span>
                  </div>
                </motion.div>

               
              </Col>

              <Col xs={24} md={24} lg={12}>
                <motion.div
                  ref={ref4}
                  initial="hidden"
                  animate={controls4}
                  variants={variants.div4}
                  className="icon-with-des"
                >
                  <div className="icon">
                  <Image
                      src={venue}
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="des">
                    <span>Venue Booking</span>
                  </div>
                </motion.div>

                <motion.div
                  ref={ref5}
                  initial="hidden"
                  animate={controls5}
                  variants={variants.div5}
                  className="icon-with-des"
                >
                  <div className="icon">
                  <Image
                      src={consultancy}
                      width={50}
                      height={50}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="des">
                    <span>Free event consultancy</span>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EveryThingScaleSection;
