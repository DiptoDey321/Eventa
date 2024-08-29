"use client";
import { Col, Row } from "antd";
import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
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
                {/* Everything required to scale from
                <br /> dinner party to music festival */}
                Our Services
              </span>
              <span className="basic-descriptions">
                Craft a unique event experience. Design your event page with
                your brand in mind. Choose colors, fonts, and layouts that
                reflect your style. Free RSVP and paid ticketing options
                available.
              </span>
            </div>
            <div className="btn">
              <a onClick={() =>router.push("/create")}>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="38.917"
                      height="38.241"
                      viewBox="0 0 54.917 53.241"
                    >
                      <g
                        id="creality-cloud-svgrepo-com"
                        transform="translate(0.5 0.5)"
                      >
                        <path
                          id="c"
                          d="M19.1,6.142,32.64,15.67,45.678,6.142l13.74,9.427L32.64,34.625,5.5,15.57,19.1,6.142Z"
                          transform="translate(-5.5 -6.142)"
                          fill="none"
                          stroke="#ffbf00"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                        />
                        <path
                          id="d"
                          d="M32.64,31.667V55.23L5.5,36.969V12.611"
                          transform="translate(-5.5 -3.184)"
                          fill="none"
                          stroke="#ffbf00"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                        />
                        <path
                          id="e"
                          d="M50.9,12.611V36.969L24.124,55.23"
                          transform="translate(3.016 -3.184)"
                          fill="none"
                          stroke="#ffbf00"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                        />
                        <path
                          id="f"
                          d="M41.771,46.068V22.108L28.382,12.68l-13.57,9.427V46.068"
                          transform="translate(-1.242 -3.153)"
                          fill="none"
                          stroke="#ffbf00"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                        />
                      </g>
                    </svg>
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="53"
                      height="38"
                      viewBox="0 0 73 58"
                    >
                      <g
                        id="Layer_2"
                        data-name="Layer 2"
                        transform="translate(0.197 -0.354)"
                      >
                        <path
                          id="Path_2718"
                          data-name="Path 2718"
                          d="M180.561,90.541v2.414L173.332,94.2,166.1,92.956V90.541l2.929-3.791h8.606Z"
                          transform="translate(-118.931 -69.432)"
                          fill="#ffd659"
                        />
                        <path
                          id="Path_2719"
                          data-name="Path 2719"
                          d="M171.914,93.35h-.1l-7.229-1.245a.575.575,0,0,1-.477-.575V89.116a.575.575,0,0,1,.121-.351l2.923-3.791a.575.575,0,0,1,.454-.224h8.606a.575.575,0,0,1,.454.224l2.932,3.791a.575.575,0,0,1,.121.351v2.415a.575.575,0,0,1-.477.575l-7.229,1.245Zm-6.654-2.3,6.654,1.15,6.654-1.15V89.326l-2.633-3.412h-8.048l-2.633,3.412Z"
                          transform="translate(-117.513 -68.007)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2720"
                          data-name="Path 2720"
                          d="M173.874,100.977v11.262a7.243,7.243,0,0,1-7.243,7.243h-9.017a7.243,7.243,0,0,1-7.243-7.243V100.977a2.9,2.9,0,0,1,1.851-2.7l1.5-.575,8.4,4.312,8.4-4.312,1.5.575a2.9,2.9,0,0,1,1.848,2.7Z"
                          transform="translate(-107.722 -77.234)"
                          fill="#6dd0fc"
                        />
                        <path
                          id="Path_2721"
                          data-name="Path 2721"
                          d="M173.874,100.977v8.4a7.243,7.243,0,0,1-7.243,7.243h-9.017a7.243,7.243,0,0,1-7.243-7.243v-8.4a2.9,2.9,0,0,1,1.851-2.7l1.5-.575,8.4,4.312,8.4-4.312,1.5.575a2.9,2.9,0,0,1,1.848,2.7Z"
                          transform="translate(-107.722 -77.234)"
                          fill="#a4ecff"
                        />
                        <path
                          id="Path_2722"
                          data-name="Path 2722"
                          d="M160.426,106.729a2.851,2.851,0,0,0,1.673-.149l.2.2a4.332,4.332,0,0,0,6.053,0l.2-.2a2.874,2.874,0,0,0,1.078.213,2.911,2.911,0,0,0,.6-.063,2.874,2.874,0,0,0,1.932-1.437l3.613-6.729a2.9,2.9,0,0,0-.549-.287l-1.5-.575-8.4,4.312-8.41-4.332-1.5.575a2.9,2.9,0,0,0-.549.287l3.613,6.732A2.874,2.874,0,0,0,160.426,106.729Z"
                          transform="translate(-110.929 -77.22)"
                          fill="#6dd0fc"
                        />
                        <path
                          id="Path_2723"
                          data-name="Path 2723"
                          d="M165.205,118.615h-9.017a7.827,7.827,0,0,1-7.818-7.818V99.535a3.5,3.5,0,0,1,2.216-3.237l1.5-.575a.575.575,0,0,1,.471.026l8.137,4.177,8.14-4.185a.575.575,0,0,1,.471-.026l1.5.575a3.5,3.5,0,0,1,2.216,3.237v11.262A7.827,7.827,0,0,1,165.205,118.615ZM152.271,96.881l-1.262.489a2.337,2.337,0,0,0-1.483,2.164V110.8a6.677,6.677,0,0,0,6.669,6.669h9.017a6.677,6.677,0,0,0,6.669-6.669V99.535A2.337,2.337,0,0,0,170.4,97.37l-1.262-.489-8.172,4.191a.575.575,0,0,1-.526,0Z"
                          transform="translate(-106.297 -75.792)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2724"
                          data-name="Path 2724"
                          d="M186.023,133.609l-1.437,1.983a1.437,1.437,0,0,1-2.348,0l-1.437-1.983a2.9,2.9,0,0,1-.515-2.139L181.617,123h3.622l1.311,8.462A2.9,2.9,0,0,1,186.023,133.609Z"
                          transform="translate(-129.015 -95.262)"
                          fill="#f88"
                        />
                        <path
                          id="Path_2725"
                          data-name="Path 2725"
                          d="M184.969,123l-.469,3.024a3.533,3.533,0,0,0,3.883,0L187.915,123Z"
                          transform="translate(-132.042 -95.262)"
                          fill="#f97171"
                        />
                        <path
                          id="Path_2726"
                          data-name="Path 2726"
                          d="M182,135.375a2.012,2.012,0,0,1-1.641-.839l-1.437-1.983a3.449,3.449,0,0,1-.615-2.564l1.319-8.462a.575.575,0,0,1,.575-.486h3.622a.575.575,0,0,1,.575.486l1.311,8.462a3.449,3.449,0,0,1-.615,2.564l-1.437,1.983A2.012,2.012,0,0,1,182,135.375Zm-1.319-13.2-1.233,7.974a2.3,2.3,0,0,0,.411,1.725l1.437,1.983a.862.862,0,0,0,1.417,0l1.437-1.983h0a2.3,2.3,0,0,0,.411-1.725l-1.245-7.974Z"
                          transform="translate(-127.598 -93.865)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2727"
                          data-name="Path 2727"
                          d="M185.487,113.234l-2.889,2.828a1.437,1.437,0,0,1-2.029,0l-2.889-2.834,3.9-1.578Z"
                          transform="translate(-127.182 -87.174)"
                          fill="#f88"
                        />
                        <path
                          id="Path_2728"
                          data-name="Path 2728"
                          d="M180.159,115.646a2.012,2.012,0,0,1-1.417-.575l-2.889-2.834a.575.575,0,0,1,.187-.943l3.9-1.578a.575.575,0,0,1,.431,0l3.9,1.578a.575.575,0,0,1,.187.943l-2.889,2.834a2.012,2.012,0,0,1-1.417.575Zm-2.874-3.616,2.262,2.219a.877.877,0,0,0,1.224,0l2.262-2.219-2.874-1.15Z"
                          transform="translate(-125.759 -85.766)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2729"
                          data-name="Path 2729"
                          d="M165.022,89.08l-2.992,2.472,4.1,7.626,4.306-3.317Z"
                          transform="translate(-116.031 -71.092)"
                          fill="#fff"
                        />
                        <path
                          id="Path_2730"
                          data-name="Path 2730"
                          d="M164.7,98.327a.486.486,0,0,1-.506-.287L160.1,90.4a.575.575,0,0,1,.141-.716l2.989-2.472a.575.575,0,0,1,.816.083l5.41,6.784a.575.575,0,0,1-.1.813l-4.312,3.317A.575.575,0,0,1,164.7,98.327Zm-3.363-8.048,3.55,6.611,3.306-2.547-4.68-5.875Z"
                          transform="translate(-114.607 -69.666)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2731"
                          data-name="Path 2731"
                          d="M196.67,89.08l2.989,2.472-4.093,7.626-4.306-3.317Z"
                          transform="translate(-136.859 -71.092)"
                          fill="#fff"
                        />
                        <path
                          id="Path_2732"
                          data-name="Path 2732"
                          d="M194.129,98.319a.575.575,0,0,1-.351-.121l-4.312-3.317a.575.575,0,0,1-.1-.813l5.41-6.784a.575.575,0,0,1,.816-.083l2.989,2.472a.575.575,0,0,1,.141.716l-4.09,7.629a.59.59,0,0,1-.506.3Zm-3.492-3.99,3.306,2.547,3.55-6.611-2.176-1.8Z"
                          transform="translate(-135.422 -69.659)"
                          fill="#2fb1ea"
                        />
                        <rect
                          id="Rectangle_2226"
                          data-name="Rectangle 2226"
                          width="11.59"
                          height="14.487"
                          rx="5.795"
                          transform="translate(48.603 5.03)"
                          fill="#ffc444"
                        />
                        <rect
                          id="Rectangle_2227"
                          data-name="Rectangle 2227"
                          width="11.59"
                          height="12.475"
                          rx="5.795"
                          transform="translate(48.603 5.03)"
                          fill="#ffe76e"
                        />
                        <path
                          id="Path_2733"
                          data-name="Path 2733"
                          d="M175.47,57.637a6.378,6.378,0,0,1-6.37-6.37v-2.9a6.37,6.37,0,1,1,12.739,0v2.9A6.378,6.378,0,0,1,175.47,57.637Zm0-14.487a5.226,5.226,0,0,0-5.22,5.22v2.9a5.22,5.22,0,1,0,10.44,0v-2.9A5.226,5.226,0,0,0,175.47,43.15Z"
                          transform="translate(-121.069 -37.545)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2734"
                          data-name="Path 2734"
                          d="M54.048,90.541v2.414L46.819,94.2,39.59,92.956V90.541l2.926-3.791h8.606Z"
                          transform="translate(-28.785 -69.432)"
                          fill="#ffd659"
                        />
                        <path
                          id="Path_2735"
                          data-name="Path 2735"
                          d="M45.394,93.35h-.1l-7.229-1.245a.575.575,0,0,1-.477-.575V89.116a.575.575,0,0,1,.118-.351l2.929-3.791a.575.575,0,0,1,.454-.224H49.7a.575.575,0,0,1,.454.224l2.929,3.791a.575.575,0,0,1,.121.351v2.415a.575.575,0,0,1-.477.575L45.494,93.35Zm-6.654-2.3,6.654,1.15,6.654-1.15V89.326L49.415,85.9H41.367l-2.633,3.412Z"
                          transform="translate(-27.36 -68.007)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2736"
                          data-name="Path 2736"
                          d="M47.364,100.963v11.262a7.244,7.244,0,0,1-7.243,7.243H31.1a7.243,7.243,0,0,1-7.243-7.243V100.963a2.9,2.9,0,0,1,1.851-2.7l1.5-.575,8.4,4.312,8.408-4.317,1.5.575A2.9,2.9,0,0,1,47.364,100.963Z"
                          transform="translate(-17.577 -77.22)"
                          fill="#6dd0fc"
                        />
                        <path
                          id="Path_2737"
                          data-name="Path 2737"
                          d="M47.364,100.963v8.4a7.244,7.244,0,0,1-7.243,7.243H31.1a7.243,7.243,0,0,1-7.243-7.243v-8.4a2.9,2.9,0,0,1,1.851-2.7l1.5-.575,8.4,4.312,8.408-4.317,1.5.575A2.9,2.9,0,0,1,47.364,100.963Z"
                          transform="translate(-17.577 -77.22)"
                          fill="#a4ecff"
                        />
                        <path
                          id="Path_2738"
                          data-name="Path 2738"
                          d="M33.93,106.743a2.851,2.851,0,0,0,1.673-.149l.2.2a4.332,4.332,0,0,0,6.053,0l.2-.2a2.874,2.874,0,0,0,1.078.213,2.911,2.911,0,0,0,.6-.063,2.874,2.874,0,0,0,1.932-1.437l3.61-6.743a2.894,2.894,0,0,0-.549-.287l-1.5-.575-8.4,4.312-8.4-4.312-1.5.575a2.894,2.894,0,0,0-.549.287l3.627,6.729a2.874,2.874,0,0,0,1.923,1.452Z"
                          transform="translate(-20.797 -77.234)"
                          fill="#6dd0fc"
                        />
                        <path
                          id="Path_2739"
                          data-name="Path 2739"
                          d="M38.7,118.615H29.678A7.827,7.827,0,0,1,21.86,110.8V99.535A3.5,3.5,0,0,1,24.076,96.3l1.5-.575a.575.575,0,0,1,.471.026l8.137,4.177,8.14-4.185a.575.575,0,0,1,.471-.026l1.5.575a3.5,3.5,0,0,1,2.216,3.237v11.262a7.827,7.827,0,0,1-7.818,7.827ZM25.761,96.881l-1.273.489A2.337,2.337,0,0,0,23,99.535V110.8a6.677,6.677,0,0,0,6.669,6.669H38.7a6.677,6.677,0,0,0,6.669-6.669V99.535a2.337,2.337,0,0,0-1.483-2.164l-1.262-.489-8.169,4.191a.575.575,0,0,1-.526,0Z"
                          transform="translate(-16.151 -75.792)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2740"
                          data-name="Path 2740"
                          d="M59.5,133.609l-1.437,1.983a1.437,1.437,0,0,1-2.348,0l-1.437-1.983a2.9,2.9,0,0,1-.515-2.139L55.085,123H58.7l1.311,8.462A2.9,2.9,0,0,1,59.5,133.609Z"
                          transform="translate(-38.862 -95.262)"
                          fill="#f88"
                        />
                        <path
                          id="Path_2741"
                          data-name="Path 2741"
                          d="M58.466,123,58,126.035a3.533,3.533,0,0,0,3.883,0L61.412,123Z"
                          transform="translate(-41.903 -95.262)"
                          fill="#f97171"
                        />
                        <path
                          id="Path_2742"
                          data-name="Path 2742"
                          d="M55.457,135.382a2.012,2.012,0,0,1-1.65-.836l-1.437-1.983A3.449,3.449,0,0,1,51.755,130l1.311-8.462a.575.575,0,0,1,.575-.486h3.616a.575.575,0,0,1,.575.486L59.142,130a3.449,3.449,0,0,1-.615,2.564l-1.437,1.983a2.012,2.012,0,0,1-1.633.836Zm-1.316-13.2-1.233,7.974a2.3,2.3,0,0,0,.411,1.725l1.437,1.983a.862.862,0,0,0,1.417,0l1.437-1.983h0a2.3,2.3,0,0,0,.411-1.725l-1.245-7.974Z"
                          transform="translate(-37.423 -93.872)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2743"
                          data-name="Path 2743"
                          d="M58.97,113.234l-2.892,2.828a1.437,1.437,0,0,1-2.029,0l-2.889-2.834,3.9-1.578Z"
                          transform="translate(-37.029 -87.174)"
                          fill="#f88"
                        />
                        <path
                          id="Path_2744"
                          data-name="Path 2744"
                          d="M53.639,115.646a2.012,2.012,0,0,1-1.417-.575l-2.889-2.834a.575.575,0,0,1,.187-.943l3.906-1.578a.575.575,0,0,1,.431,0l3.9,1.578a.575.575,0,0,1,.187.943l-2.889,2.834A2.012,2.012,0,0,1,53.639,115.646Zm-2.874-3.616,2.262,2.219a.877.877,0,0,0,1.225,0l2.262-2.219-2.874-1.15Z"
                          transform="translate(-35.605 -85.766)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2745"
                          data-name="Path 2745"
                          d="M38.509,89.08,35.52,91.552l4.093,7.626,4.306-3.317Z"
                          transform="translate(-25.885 -71.092)"
                          fill="#fff"
                        />
                        <path
                          id="Path_2746"
                          data-name="Path 2746"
                          d="M38.189,98.327a.486.486,0,0,1-.506-.287L33.59,90.4a.575.575,0,0,1,.141-.716l2.989-2.472a.575.575,0,0,1,.816.083l5.41,6.784a.575.575,0,0,1-.1.813l-4.3,3.317a.575.575,0,0,1-.356.118Zm-3.363-8.048,3.55,6.611,3.306-2.547L37,88.467Z"
                          transform="translate(-24.461 -69.666)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2747"
                          data-name="Path 2747"
                          d="M70.15,89.08l2.992,2.472-4.1,7.626L64.74,95.861Z"
                          transform="translate(-46.706 -71.092)"
                          fill="#fff"
                        />
                        <path
                          id="Path_2748"
                          data-name="Path 2748"
                          d="M67.619,98.327a.575.575,0,0,1-.351-.121l-4.312-3.317a.575.575,0,0,1-.1-.813l5.412-6.781a.575.575,0,0,1,.816-.083l2.989,2.472a.575.575,0,0,1,.141.716l-4.093,7.626a.59.59,0,0,1-.506.3Zm-3.492-3.99,3.306,2.547,3.55-6.611-2.176-1.8Z"
                          transform="translate(-45.276 -69.666)"
                          fill="#2fb1ea"
                        />
                        <rect
                          id="Rectangle_2228"
                          data-name="Rectangle 2228"
                          width="11.59"
                          height="14.487"
                          rx="5.795"
                          transform="translate(12.239 5.03)"
                          fill="#ffc444"
                        />
                        <rect
                          id="Rectangle_2229"
                          data-name="Rectangle 2229"
                          width="11.59"
                          height="12.475"
                          rx="5.795"
                          transform="translate(12.239 5.03)"
                          fill="#ffe76e"
                        />
                        <path
                          id="Path_2749"
                          data-name="Path 2749"
                          d="M48.95,57.637a6.378,6.378,0,0,1-6.37-6.37v-2.9a6.37,6.37,0,1,1,12.739,0v2.9A6.378,6.378,0,0,1,48.95,57.637Zm0-14.487a5.226,5.226,0,0,0-5.22,5.22v2.9a5.22,5.22,0,0,0,10.44,0v-2.9A5.226,5.226,0,0,0,48.95,43.15Z"
                          transform="translate(-30.916 -37.545)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2750"
                          data-name="Path 2750"
                          d="M117.248,129.061v2.415l-7.229,1.245-7.229-1.245v-2.415l2.926-3.791h8.606Z"
                          transform="translate(-73.819 -96.88)"
                          fill="#ffd659"
                        />
                        <path
                          id="Path_2751"
                          data-name="Path 2751"
                          d="M108.594,131.835h-.1l-7.229-1.245a.575.575,0,0,1-.477-.575V127.6a.575.575,0,0,1,.121-.351l2.926-3.806a.575.575,0,0,1,.454-.224H112.9a.575.575,0,0,1,.454.224l2.926,3.791a.575.575,0,0,1,.121.351V130a.575.575,0,0,1-.477.575l-7.229,1.245Zm-6.654-2.3,6.654,1.15,6.654-1.15V127.81l-2.633-3.412h-8.028l-2.633,3.412Z"
                          transform="translate(-72.394 -95.419)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2752"
                          data-name="Path 2752"
                          d="M110.561,139.5v11.262A7.243,7.243,0,0,1,103.318,158H94.3a7.243,7.243,0,0,1-7.243-7.243V139.5a2.9,2.9,0,0,1,1.851-2.7l1.5-.575,8.4,4.312,8.4-4.312,1.5.575A2.9,2.9,0,0,1,110.561,139.5Z"
                          transform="translate(-62.61 -104.682)"
                          fill="#6dd0fc"
                        />
                        <path
                          id="Path_2753"
                          data-name="Path 2753"
                          d="M110.561,139.5v8.4a7.244,7.244,0,0,1-7.243,7.243H94.3A7.243,7.243,0,0,1,87.06,147.9v-8.4a2.9,2.9,0,0,1,1.851-2.7l1.5-.575,8.4,4.312,8.4-4.312,1.5.575A2.9,2.9,0,0,1,110.561,139.5Z"
                          transform="translate(-62.61 -104.682)"
                          fill="#a4ecff"
                        />
                        <path
                          id="Path_2754"
                          data-name="Path 2754"
                          d="M97.128,145.3a2.851,2.851,0,0,0,1.673-.149l.2.2a4.332,4.332,0,0,0,6.053,0l.2-.2a2.875,2.875,0,0,0,1.078.213,2.912,2.912,0,0,0,.6-.063,2.874,2.874,0,0,0,1.932-1.437l3.613-6.729a2.9,2.9,0,0,0-.549-.287l-1.5-.575-8.4,4.312-8.4-4.312-1.5.575a2.894,2.894,0,0,0-.549.287l3.613,6.732A2.874,2.874,0,0,0,97.128,145.3Z"
                          transform="translate(-65.831 -104.718)"
                          fill="#6dd0fc"
                        />
                        <path
                          id="Path_2755"
                          data-name="Path 2755"
                          d="M101.893,157.156H92.878a7.827,7.827,0,0,1-7.818-7.818V138.076a3.5,3.5,0,0,1,2.216-3.237l1.5-.575a.575.575,0,0,1,.471.026l8.137,4.176,8.137-4.176a.575.575,0,0,1,.471-.026l1.5.575a3.5,3.5,0,0,1,2.216,3.237v11.262A7.827,7.827,0,0,1,101.893,157.156ZM88.958,135.423l-1.262.489a2.337,2.337,0,0,0-1.483,2.164v11.262a6.677,6.677,0,0,0,6.669,6.669H101.9a6.677,6.677,0,0,0,6.669-6.669V138.076a2.337,2.337,0,0,0-1.483-2.164l-1.262-.489-8.175,4.2a.575.575,0,0,1-.526,0Z"
                          transform="translate(-61.185 -103.261)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2756"
                          data-name="Path 2756"
                          d="M122.693,172.151l-1.437,1.983a1.437,1.437,0,0,1-2.348,0l-1.437-1.983a2.9,2.9,0,0,1-.515-2.139l1.311-8.462h3.622l1.322,8.465A2.9,2.9,0,0,1,122.693,172.151Z"
                          transform="translate(-83.889 -122.731)"
                          fill="#f88"
                        />
                        <path
                          id="Path_2757"
                          data-name="Path 2757"
                          d="M121.649,161.55l-.469,3.024a3.533,3.533,0,0,0,3.883,0l-.469-3.024Z"
                          transform="translate(-86.923 -122.731)"
                          fill="#f97171"
                        />
                        <path
                          id="Path_2758"
                          data-name="Path 2758"
                          d="M118.679,173.895a2.012,2.012,0,0,1-1.641-.839l-1.437-1.983a3.449,3.449,0,0,1-.615-2.564l1.311-8.462a.575.575,0,0,1,.575-.486h3.622a.575.575,0,0,1,.575.486l1.311,8.462a3.449,3.449,0,0,1-.615,2.564l-1.437,1.983A2.012,2.012,0,0,1,118.679,173.895Zm-1.319-13.185-1.233,7.974a2.3,2.3,0,0,0,.411,1.725l1.437,1.983a.862.862,0,0,0,1.417,0l1.437-1.983h0a2.3,2.3,0,0,0,.411-1.725l-1.233-7.976Z"
                          transform="translate(-82.479 -121.313)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2759"
                          data-name="Path 2759"
                          d="M122.167,151.768l-2.889,2.834a1.437,1.437,0,0,1-2.029,0l-2.889-2.834,3.9-1.578Z"
                          transform="translate(-82.063 -114.637)"
                          fill="#f88"
                        />
                        <path
                          id="Path_2760"
                          data-name="Path 2760"
                          d="M116.868,154.175a2.012,2.012,0,0,1-1.417-.575l-2.877-2.843a.575.575,0,0,1,.187-.943l3.9-1.578a.575.575,0,0,1,.431,0l3.9,1.578a.575.575,0,0,1,.187.943l-2.9,2.843A2.012,2.012,0,0,1,116.868,154.175Zm-2.874-3.616,2.262,2.219a.877.877,0,0,0,1.224,0l2.262-2.219-2.874-1.15Z"
                          transform="translate(-80.668 -113.214)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2761"
                          data-name="Path 2761"
                          d="M101.709,127.59l-2.989,2.475,4.093,7.626,4.306-3.317Z"
                          transform="translate(-70.919 -98.533)"
                          fill="#fff"
                        />
                        <path
                          id="Path_2762"
                          data-name="Path 2762"
                          d="M101.429,136.847a.486.486,0,0,1-.506-.287l-4.093-7.64a.575.575,0,0,1,.141-.716l2.989-2.472a.575.575,0,0,1,.816.083l5.41,6.784a.575.575,0,0,1-.1.813l-4.312,3.317A.575.575,0,0,1,101.429,136.847ZM98.066,128.8l3.55,6.611,3.306-2.547-4.68-5.87Z"
                          transform="translate(-69.523 -97.114)"
                          fill="#2fb1ea"
                        />
                        <path
                          id="Path_2763"
                          data-name="Path 2763"
                          d="M133.35,127.59l2.989,2.475-4.093,7.626-4.306-3.317Z"
                          transform="translate(-91.74 -98.533)"
                          fill="#fff"
                        />
                        <path
                          id="Path_2764"
                          data-name="Path 2764"
                          d="M130.809,136.839a.575.575,0,0,1-.351-.121l-4.312-3.317a.575.575,0,0,1-.1-.813l5.41-6.784a.575.575,0,0,1,.816-.083l2.989,2.472a.575.575,0,0,1,.141.716l-4.093,7.626a.618.618,0,0,1-.5.3Zm-3.492-3.99,3.306,2.547,3.55-6.611-2.176-1.8Z"
                          transform="translate(-90.303 -97.107)"
                          fill="#2fb1ea"
                        />
                        <rect
                          id="Rectangle_2230"
                          data-name="Rectangle 2230"
                          width="11.59"
                          height="14.487"
                          rx="5.795"
                          transform="translate(30.405 16.102)"
                          fill="#ffc444"
                        />
                        <rect
                          id="Rectangle_2231"
                          data-name="Rectangle 2231"
                          width="11.59"
                          height="12.475"
                          rx="5.795"
                          transform="translate(30.405 16.102)"
                          fill="#ffe76e"
                        />
                        <path
                          id="Path_2765"
                          data-name="Path 2765"
                          d="M112.15,96.157a6.378,6.378,0,0,1-6.37-6.37v-2.9a6.37,6.37,0,0,1,12.739,0v2.9A6.378,6.378,0,0,1,112.15,96.157Zm0-14.487a5.226,5.226,0,0,0-5.22,5.22v2.9a5.22,5.22,0,1,0,10.44,0v-2.9a5.226,5.226,0,0,0-5.22-5.22Z"
                          transform="translate(-75.949 -64.992)"
                          fill="#2fb1ea"
                        />
                        <ellipse
                          id="Ellipse_2924"
                          data-name="Ellipse 2924"
                          cx="2"
                          cy="1"
                          rx="2"
                          ry="1"
                          transform="translate(-0.197 25.353)"
                          fill="#d4ffd4"
                        />
                        <circle
                          id="Ellipse_2925"
                          data-name="Ellipse 2925"
                          cx="1"
                          cy="1"
                          r="1"
                          transform="translate(20.803 56.353)"
                          fill="#d4ffd4"
                        />
                        <ellipse
                          id="Ellipse_2926"
                          data-name="Ellipse 2926"
                          cx="1.5"
                          cy="0.5"
                          rx="1.5"
                          ry="0.5"
                          transform="translate(59.803 44.353)"
                          fill="#d4ffd4"
                        />
                        <circle
                          id="Ellipse_2927"
                          data-name="Ellipse 2927"
                          cx="0.5"
                          cy="0.5"
                          r="0.5"
                          transform="translate(51.803 1.353)"
                          fill="#d4ffd4"
                        />
                        <circle
                          id="Ellipse_2928"
                          data-name="Ellipse 2928"
                          transform="translate(68.803 4.353)"
                          fill="#d4ffd4"
                        />
                        <ellipse
                          id="Ellipse_2929"
                          data-name="Ellipse 2929"
                          cx="1.5"
                          cy="1"
                          rx="1.5"
                          ry="1"
                          transform="translate(63.803 14.353)"
                          fill="#ffbdbd"
                        />
                        <ellipse
                          id="Ellipse_2930"
                          data-name="Ellipse 2930"
                          cx="1"
                          cy="2"
                          rx="1"
                          ry="2"
                          transform="translate(28.803 8.353)"
                          fill="#ffbdbd"
                        />
                        <circle
                          id="Ellipse_2931"
                          data-name="Ellipse 2931"
                          cx="0.5"
                          cy="0.5"
                          r="0.5"
                          transform="translate(3.803 33.353)"
                          fill="#ffbdbd"
                        />
                        <circle
                          id="Ellipse_2932"
                          data-name="Ellipse 2932"
                          cx="0.5"
                          cy="0.5"
                          r="0.5"
                          transform="translate(5.803 8.353)"
                          fill="#ffbdbd"
                        />
                        <circle
                          id="Ellipse_2933"
                          data-name="Ellipse 2933"
                          cx="0.5"
                          cy="0.5"
                          r="0.5"
                          transform="translate(21.803 0.353)"
                          fill="#ffbdbd"
                        />
                        <ellipse
                          id="Ellipse_2934"
                          data-name="Ellipse 2934"
                          cx="0.5"
                          cy="2"
                          rx="0.5"
                          ry="2"
                          transform="translate(14.803 45.353)"
                          fill="#bbf1ff"
                        />
                        <circle
                          id="Ellipse_2935"
                          data-name="Ellipse 2935"
                          cx="1"
                          cy="1"
                          r="1"
                          transform="translate(57.803 0.353)"
                          fill="#bbf1ff"
                        />
                        <ellipse
                          id="Ellipse_2936"
                          data-name="Ellipse 2936"
                          cx="1"
                          cy="0.5"
                          rx="1"
                          ry="0.5"
                          transform="translate(39.803 7.353)"
                          fill="#bbf1ff"
                        />
                        <ellipse
                          id="Ellipse_2937"
                          data-name="Ellipse 2937"
                          cx="1"
                          rx="1"
                          transform="translate(60.803 52.353)"
                          fill="#bbf1ff"
                        />
                        <circle
                          id="Ellipse_2938"
                          data-name="Ellipse 2938"
                          transform="translate(59.803 57.353)"
                          fill="#bbf1ff"
                        />
                        <ellipse
                          id="Ellipse_2939"
                          data-name="Ellipse 2939"
                          cx="1"
                          cy="2"
                          rx="1"
                          ry="2"
                          transform="translate(2.803 44.353)"
                          fill="#fff4c5"
                        />
                        <ellipse
                          id="Ellipse_2940"
                          data-name="Ellipse 2940"
                          cx="1"
                          cy="1.5"
                          rx="1"
                          ry="1.5"
                          transform="translate(70.803 28.353)"
                          fill="#fff4c5"
                        />
                        <ellipse
                          id="Ellipse_2941"
                          data-name="Ellipse 2941"
                          cx="1.5"
                          cy="1"
                          rx="1.5"
                          ry="1"
                          transform="translate(48.803 50.353)"
                          fill="#fff4c5"
                        />
                        <ellipse
                          id="Ellipse_2942"
                          data-name="Ellipse 2942"
                          cx="1"
                          cy="0.5"
                          rx="1"
                          ry="0.5"
                          transform="translate(33.803 1.353)"
                          fill="#fff4c5"
                        />
                        <ellipse
                          id="Ellipse_2943"
                          data-name="Ellipse 2943"
                          cx="1"
                          cy="0.5"
                          rx="1"
                          ry="0.5"
                          transform="translate(42.803 2.353)"
                          fill="#fff4c5"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="des">
                    <span>RSVP</span>
                  </div>
                </motion.div>

                {/* <motion.div
                  ref={ref3}
                  initial="hidden"
                  animate={controls3}
                  variants={variants.div3}
                  className="icon-with-des"
                >
                  <div className="icon">
                    <svg
                      id="b"
                      xmlns="http://www.w3.org/2000/svg"
                      width="34.389"
                      height="42.785"
                      viewBox="0 0 44.389 52.785"
                    >
                      <path
                        id="Path_2766"
                        data-name="Path 2766"
                        d="M28.411,5A13.2,13.2,0,0,0,22.4,29.958l7.176,5.571,9.3-9.279A13.2,13.2,0,0,0,28.411,5Z"
                        transform="translate(-9.773 -4.109)"
                        fill="#f2d865"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_2767"
                        data-name="Path 2767"
                        d="M29.84,5a11.573,11.573,0,0,0-1.48.089,13.2,13.2,0,0,1,8.985,21.161l-8,7.978,1.667,1.292,9.3-9.279A13.2,13.2,0,0,0,29.849,4.99h0Z"
                        transform="translate(-11.201 -4.108)"
                        fill="#f2d865"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_2768"
                        data-name="Path 2768"
                        d="M13.97,33a3.86,3.86,0,0,0,0,7.719v7.728a3.864,3.864,0,0,0,0,7.728H32.064a3.851,3.851,0,0,0,2.371-.811L32.724,38.49l-6.15-5.5H13.97Z"
                        transform="translate(-9.219 -7.149)"
                        fill="#f2d865"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_2769"
                        data-name="Path 2769"
                        d="M24.309,49.389H13.979a3.86,3.86,0,1,1,0-7.719h8.86L24.309,49.4Z"
                        transform="translate(-9.219 -8.092)"
                        fill="#e9c03d"
                        fillRule="evenodd"
                      />
                      <circle
                        id="Ellipse_2944"
                        data-name="Ellipse 2944"
                        cx="13.201"
                        cy="13.201"
                        r="13.201"
                        transform="matrix(0.897, -0.442, 0.442, 0.897, 9.038, 29.1)"
                        fill="#f5e680"
                      />
                      <circle
                        id="Ellipse_2945"
                        data-name="Ellipse 2945"
                        cx="7.238"
                        cy="7.238"
                        r="7.238"
                        transform="translate(19.476 27.873)"
                        fill="#ebb680"
                      />
                      <circle
                        id="Ellipse_2946"
                        data-name="Ellipse 2946"
                        cx="7.238"
                        cy="7.238"
                        r="7.238"
                        transform="translate(10.921 20.808) rotate(-86.02)"
                        fill="#ebb680"
                      />
                      <path
                        id="Path_2770"
                        data-name="Path 2770"
                        d="M38.862,28.579a13.083,13.083,0,0,0-1.774.125,13.194,13.194,0,0,1-.018,26.144,13.451,13.451,0,0,0,1.792.125,13.2,13.2,0,1,0,0-26.4Z"
                        transform="translate(-12.147 -6.669)"
                        fill="#f2d865"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_2771"
                        data-name="Path 2771"
                        d="M38.934,35.27a7.534,7.534,0,0,0-1.194.1,7.238,7.238,0,0,1,0,14.28,7.448,7.448,0,0,0,1.194.1,7.238,7.238,0,1,0,0-14.476Z"
                        transform="translate(-12.22 -7.397)"
                        fill="#e6a361"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_2772"
                        data-name="Path 2772"
                        d="M29.88,11.69a8.115,8.115,0,0,0-1.15.089,7.241,7.241,0,0,1,0,14.3,6.984,6.984,0,0,0,1.15.089,7.238,7.238,0,0,0,0-14.476Z"
                        transform="translate(-11.241 -4.835)"
                        fill="#e6a361"
                        fillRule="evenodd"
                      />
                      <path
                        id="Path_2773"
                        data-name="Path 2773"
                        d="M39.613,25.6a14.071,14.071,0,1,0-20.8,3.36H13.861a4.739,4.739,0,0,0-2.745,8.611,4.717,4.717,0,0,0,0,7.719A4.739,4.739,0,0,0,13.861,53.9H31.956a4.677,4.677,0,0,0,2.63-.838c.41.036.811.125,1.23.125a14.053,14.053,0,0,0,3.788-27.6ZM15.439,18.093A12.31,12.31,0,1,1,37.75,25.215a13.678,13.678,0,0,0-1.925-.2,14.035,14.035,0,0,0-9.725,3.94H21.981a12.238,12.238,0,0,1-6.543-10.866ZM10.893,33.709a2.973,2.973,0,0,1,2.968-2.968h10.7a13.944,13.944,0,0,0-2.576,5.945h-8.12a2.973,2.973,0,0,1-2.968-2.968Zm2.968,10.7a2.968,2.968,0,0,1,0-5.937H21.8c-.009.223-.062.428-.062.642a13.954,13.954,0,0,0,1.052,5.295Zm0,7.728a2.968,2.968,0,0,1,0-5.937h9.85a14.078,14.078,0,0,0,6.774,5.945H13.861Zm21.963-.713a12.31,12.31,0,1,1,12.31-12.31A12.324,12.324,0,0,1,35.824,51.421Z"
                        transform="translate(-9.11 -4)"
                      />
                      <path
                        id="Path_2774"
                        data-name="Path 2774"
                        d="M38.089,34.27A8.129,8.129,0,1,0,46.219,42.4,8.137,8.137,0,0,0,38.089,34.27Zm0,14.476A6.347,6.347,0,1,1,44.436,42.4,6.355,6.355,0,0,1,38.089,48.746Z"
                        transform="translate(-11.375 -7.288)"
                      />
                      <path
                        id="Path_2775"
                        data-name="Path 2775"
                        d="M29.029,26.949A8.129,8.129,0,1,0,20.9,18.819,8.137,8.137,0,0,0,29.029,26.949Zm0-14.476a6.347,6.347,0,1,1-6.347,6.347A6.355,6.355,0,0,1,29.029,12.473Z"
                        transform="translate(-10.391 -4.727)"
                      />
                      <path
                        id="Path_2776"
                        data-name="Path 2776"
                        d="M29.725,20.1a.642.642,0,0,1,0,1.284.672.672,0,0,1-.455-.187.889.889,0,1,0-1.257,1.257,2.461,2.461,0,0,0,.82.535v.25a.891.891,0,1,0,1.783,0V22.98a2.419,2.419,0,0,0-.891-4.671.642.642,0,1,1,0-1.284.656.656,0,0,1,.455.187.889.889,0,1,0,1.257-1.257,2.461,2.461,0,0,0-.82-.535v-.25a.891.891,0,1,0-1.783,0v.258a2.419,2.419,0,0,0,.891,4.671Z"
                        transform="translate(-11.086 -5.117)"
                      />
                      <path
                        id="Path_2777"
                        data-name="Path 2777"
                        d="M38.785,41.9a.642.642,0,1,1,.455-1.1A.889.889,0,1,0,40.5,39.546a2.331,2.331,0,0,0-.82-.535v-.25a.891.891,0,0,0-1.783,0v.258a2.419,2.419,0,0,0,.891,4.671.642.642,0,1,1,0,1.284.672.672,0,0,1-.455-.187.889.889,0,1,0-1.257,1.257,2.461,2.461,0,0,0,.82.535v.25a.891.891,0,1,0,1.783,0V46.57a2.419,2.419,0,0,0-.891-4.671Z"
                        transform="translate(-12.07 -7.679)"
                      />
                      <circle
                        id="Ellipse_2947"
                        data-name="Ellipse 2947"
                        cx="0.891"
                        cy="0.891"
                        r="0.891"
                        transform="translate(25.823 23.996)"
                      />
                      <circle
                        id="Ellipse_2948"
                        data-name="Ellipse 2948"
                        cx="0.891"
                        cy="0.891"
                        r="0.891"
                        transform="translate(25.823 44.435)"
                      />
                      <circle
                        id="Ellipse_2949"
                        data-name="Ellipse 2949"
                        cx="0.891"
                        cy="0.891"
                        r="0.891"
                        transform="translate(36.047 34.22)"
                      />
                      <circle
                        id="Ellipse_2950"
                        data-name="Ellipse 2950"
                        cx="0.891"
                        cy="0.891"
                        r="0.891"
                        transform="translate(15.608 34.22)"
                      />
                      <path
                        id="Path_2778"
                        data-name="Path 2778"
                        d="M47.715,35.805a.889.889,0,1,0-1.257,0A.888.888,0,0,0,47.715,35.805Z"
                        transform="translate(-13.139 -7.29)"
                      />
                      <path
                        id="Path_2779"
                        data-name="Path 2779"
                        d="M30.238,50.758a.889.889,0,1,0,1.257,0A.888.888,0,0,0,30.238,50.758Z"
                        transform="translate(-11.377 -9.051)"
                      />
                      <path
                        id="Path_2780"
                        data-name="Path 2780"
                        d="M47.081,50.49a.921.921,0,0,0-.633.258.887.887,0,0,0,.633,1.515.921.921,0,0,0,.633-.258.887.887,0,0,0-.633-1.515Z"
                        transform="translate(-13.138 -9.05)"
                      />
                      <path
                        id="Path_2781"
                        data-name="Path 2781"
                        d="M30.871,36.064a.937.937,0,0,0,.633-.258.887.887,0,0,0-.633-1.515.921.921,0,0,0-.633.258.887.887,0,0,0,.633,1.515Z"
                        transform="translate(-11.377 -7.29)"
                      />
                      <circle
                        id="Ellipse_2951"
                        data-name="Ellipse 2951"
                        cx="0.891"
                        cy="0.891"
                        r="0.891"
                        transform="translate(17.747 2.977)"
                      />
                      <circle
                        id="Ellipse_2952"
                        data-name="Ellipse 2952"
                        cx="0.891"
                        cy="0.891"
                        r="0.891"
                        transform="translate(27.962 13.201)"
                      />
                      <circle
                        id="Ellipse_2953"
                        data-name="Ellipse 2953"
                        cx="0.891"
                        cy="0.891"
                        r="0.891"
                        transform="translate(7.523 13.201)"
                      />
                      <path
                        id="Path_2782"
                        data-name="Path 2782"
                        d="M38.645,12.225a.889.889,0,1,0-1.257,0A.888.888,0,0,0,38.645,12.225Z"
                        transform="translate(-12.154 -4.729)"
                      />
                      <path
                        id="Path_2783"
                        data-name="Path 2783"
                        d="M21.168,27.178a.889.889,0,1,0,1.257,0A.888.888,0,0,0,21.168,27.178Z"
                        transform="translate(-10.392 -6.49)"
                      />
                      <path
                        id="Path_2784"
                        data-name="Path 2784"
                        d="M21.8,12.484a.921.921,0,0,0,.633-.258A.887.887,0,0,0,21.8,10.71a.921.921,0,0,0-.633.258.887.887,0,0,0,.633,1.515Z"
                        transform="translate(-10.392 -4.729)"
                      />
                    </svg>
                  </div>
                  <div className="des">
                    <span> Instant Payout</span>
                  </div>
                </motion.div> */}
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
                    <svg
                      id="selfie-svgrepo-com"
                      xmlns="http://www.w3.org/2000/svg"
                      width="34.625"
                      height="34.625"
                      viewBox="0 0 39.625 39.625"
                    >
                      <path
                        id="Path_2785"
                        data-name="Path 2785"
                        d="M337.732,209.47c0-.3.1-.693.1-.991v-6.934c0-7.529-17.831-4.953-17.831,0v6.934a3.371,3.371,0,0,0,.1.991Z"
                        transform="translate(-309.104 -191.639)"
                        fill="#ffb74d"
                      />
                      <path
                        id="Path_2786"
                        data-name="Path 2786"
                        d="M121,491.127H89.3a3.974,3.974,0,0,1-3.962-3.962V473.3a3.974,3.974,0,0,1,3.962-3.962H121a3.974,3.974,0,0,1,3.962,3.962v13.869A3.974,3.974,0,0,1,121,491.127Z"
                        transform="translate(-85.334 -451.503)"
                        fill="#37474f"
                      />
                      <path
                        id="Path_2787"
                        data-name="Path 2787"
                        d="M149.333,534.324v13.868a.936.936,0,0,0,.991.991h28.728a.936.936,0,0,0,.991-.991V534.324a.936.936,0,0,0-.991-.991H150.324a.936.936,0,0,0-.991.991Z"
                        transform="translate(-146.361 -512.531)"
                        fill="#bbdefb"
                      />
                      <path
                        id="Path_2788"
                        data-name="Path 2788"
                        d="M853.333,640h1.981v5.944h-1.981Z"
                        transform="translate(-817.671 -614.244)"
                        fill="#78909c"
                      />
                      <path
                        id="Path_2789"
                        data-name="Path 2789"
                        d="M405.333,682.667h7.925v8.916h-7.925Z"
                        transform="translate(-390.474 -654.93)"
                        fill="#bf360c"
                      />
                      <path
                        id="Path_2790"
                        data-name="Path 2790"
                        d="M437.333,800h4.953v3.467h-4.953Z"
                        transform="translate(-420.988 -766.814)"
                        fill="#ff9800"
                      />
                      <path
                        id="Path_2791"
                        data-name="Path 2791"
                        d="M403.583,634.106c0-3.764-8.916-2.476-8.916,0v3.467a4.458,4.458,0,0,0,8.916,0Z"
                        transform="translate(-380.303 -606.369)"
                        fill="#ffb74d"
                      />
                      <path
                        id="Path_2792"
                        data-name="Path 2792"
                        d="M576.99,427.657m-.991,0a.991.991,0,1,0,.991-.991A.991.991,0,0,0,576,427.657Z"
                        transform="translate(-553.216 -410.817)"
                        fill="#784719"
                      />
                      <path
                        id="Path_2793"
                        data-name="Path 2793"
                        d="M406.324,427.657m-.991,0a.991.991,0,1,0,.991-.991A.991.991,0,0,0,405.334,427.657Z"
                        transform="translate(-390.474 -410.817)"
                        fill="#784719"
                      />
                      <path
                        id="Path_2794"
                        data-name="Path 2794"
                        d="M523.162,747.162m-.5,0a.5.5,0,1,0,.5-.5A.5.5,0,0,0,522.666,747.162Z"
                        transform="translate(-502.359 -715.957)"
                        fill="#784719"
                      />
                      <path
                        id="Path_2795"
                        data-name="Path 2795"
                        d="M437.829,747.162m-.5,0a.5.5,0,1,0,.5-.5A.5.5,0,0,0,437.333,747.162Z"
                        transform="translate(-420.988 -715.957)"
                        fill="#784719"
                      />
                      <path
                        id="Path_2796"
                        data-name="Path 2796"
                        d="M209.937,108.117c-2.972,0-7.925,1.288-7.925,10.9l3.962,2.972v-6.439l5.944-3.467,1.981,2.477v7.43l3.962-2.972c0-1.981-.792-9.906-5.944-9.906l-.5-.991h-1.486ZM203,103.164v-2.972l11.887-6.934,3.962,4.953v4.953h6.736c-.5-6.142-2.675-15.85-10.7-15.85l-.991-1.981h-2.972c-5.448,0-13.175,2.774-14.661,17.831Z"
                        transform="translate(-191.116 -85.333)"
                        fill="#ff5722"
                      />
                    </svg>
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
                    <svg
                      id="Icons"
                      xmlns="http://www.w3.org/2000/svg"
                      width="35.042"
                      height="35.042"
                      viewBox="0 0 42.042 42.042"
                    >
                      <g id="Color-">
                        <path
                          id="Facebook"
                          d="M222.456,202.042H202.32a2.32,2.32,0,0,1-2.32-2.32v-37.4a2.32,2.32,0,0,1,2.32-2.32h37.4a2.32,2.32,0,0,1,2.32,2.32v37.4a2.32,2.32,0,0,1-2.32,2.32H229.008V185.761h5.465l.818-6.345h-6.283v-4.051c0-1.838.511-3.089,3.144-3.089l3.36,0V166.6a45,45,0,0,0-4.9-.25c-4.844,0-8.161,2.957-8.161,8.386v4.68h-5.479v6.345h5.479v16.281Z"
                          transform="translate(-200 -160)"
                          fill="#5980da"
                          fillRule="evenodd"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="des">
                    <span>Free event consultancy</span>
                  </div>
                </motion.div>

                {/* <motion.div
                  ref={ref6}
                  initial="hidden"
                  animate={controls6}
                  variants={variants.div6}
                  className="icon-with-des"
                >
                  <div className="icon">
                    <svg
                      id="stylable-svgrepo-com"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32.86"
                      height="36.876"
                      viewBox="0 0 36.86 39.876"
                    >
                      <defs>
                        <linearGradient
                          id="linear-gradient"
                          x1="-146.444"
                          y1="-95.646"
                          x2="-146.435"
                          y2="-95.591"
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset="0" stop-color="#7ad852" />
                          <stop offset="0.536" stop-color="#3ab38b" />
                          <stop offset="1" stop-color="#00bfc9" />
                        </linearGradient>
                        <linearGradient
                          id="linear-gradient-2"
                          x1="-148.219"
                          y1="-95.195"
                          x2="-148.262"
                          y2="-95.139"
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset="0" stop-color="#ff2953" />
                          <stop offset="1" stop-color="#ea3333" />
                        </linearGradient>
                      </defs>
                      <path
                        id="Path_2798"
                        data-name="Path 2798"
                        d="M14.284,2.72C10.868,4.143,3.051,11.251,3.051,16.938c0,5.835,7.827,12.8,11.233,14.219a10.137,10.137,0,0,0,3.273.712,4.14,4.14,0,0,0,3.131-1.708,4.312,4.312,0,0,0-.712-6.4c-2.7-1.85-4.839-3.558-4.981-6.831,0-3.273,2.277-5.55,4.981-7.4a3.8,3.8,0,0,0,1-5.977,4.285,4.285,0,0,0-3.416-1.565,10.137,10.137,0,0,0-3.273.737Z"
                        transform="translate(-3.051 -1.981)"
                        fill="url(#linear-gradient)"
                      />
                      <path
                        id="Path_2799"
                        data-name="Path 2799"
                        d="M18.221,27.51a4.227,4.227,0,0,0-.712-6.4c-3.273-2.135-4.981-4.27-4.981-6.974a7.981,7.981,0,0,1,2.562-5.55c-7.543,8.1-8.532,17.062-1.281,20.333A3.907,3.907,0,0,0,18.221,27.51Z"
                        transform="translate(-0.589 0.812)"
                        fill="#005892"
                      />
                      <path
                        id="Path_2800"
                        data-name="Path 2800"
                        d="M14.745,23.931a3.309,3.309,0,0,0-.427-4.412A6.794,6.794,0,0,1,11.9,13.827a6.061,6.061,0,0,1,1.565-3.843C8.625,15.534,7.2,22.781,11.9,25.057A2.738,2.738,0,0,0,14.745,23.931Z"
                        transform="translate(-0.526 1.405)"
                        fill="#00418e"
                      />
                      <path
                        id="Path_2801"
                        data-name="Path 2801"
                        d="M12.568,20.743a2.187,2.187,0,0,0-.285-2.846,4.742,4.742,0,0,1-1.565-3.7c0-1.281.427-2.562-.285-1s-2.7,6.689.285,8.1a1.612,1.612,0,0,0,1.85-.562Z"
                        transform="translate(-0.482 2.461)"
                        fill="#002355"
                      />
                      <path
                        id="Path_2802"
                        data-name="Path 2802"
                        d="M20.082,38.929a4.483,4.483,0,0,1-3.416-1.565,3.8,3.8,0,0,1,1-5.977c2.7-1.85,4.839-4.127,4.981-7.4,0-3.273-2.277-5.408-4.981-7.4a4.127,4.127,0,0,1-1-6.12A4.483,4.483,0,0,1,20.082,8.9a9.326,9.326,0,0,1,3.273.712C26.771,11.035,34.446,18,34.588,23.831c0,5.55-7.827,12.8-11.233,14.219A7.382,7.382,0,0,1,20.082,38.929Z"
                        transform="translate(2.272 0.947)"
                        fill="url(#linear-gradient-2)"
                      />
                      <path
                        id="Path_2803"
                        data-name="Path 2803"
                        d="M16.544,10.465a4.012,4.012,0,0,0,1.139,6.12c3.273,2.277,4.839,4.7,4.839,7.4a7.981,7.981,0,0,1-2.562,5.55c7.827-5.55,8.532-17.062,1.281-20.333a4.321,4.321,0,0,0-4.7,1.262Z"
                        transform="translate(2.255 0.973)"
                        fill="#470000"
                        opacity="0.6"
                      />
                      <path
                        id="Path_2804"
                        data-name="Path 2804"
                        d="M19.467,12.352a3.165,3.165,0,0,0,.427,4.412,6.794,6.794,0,0,1,2.419,5.693,5.835,5.835,0,0,1-.712,3.416c3.843-4.27,5.123-12.513.569-14.5A2.193,2.193,0,0,0,19.467,12.352Z"
                        transform="translate(3.598 1.93)"
                        fill="#670010"
                      />
                      <path
                        id="Path_2805"
                        data-name="Path 2805"
                        d="M20.874,13.732a2.187,2.187,0,0,0,.285,2.846,6.137,6.137,0,0,1,1.85,3.558,6.949,6.949,0,0,1-.142,1.85c.569-1,3.131-7.97-.142-8.957A1.96,1.96,0,0,0,20.874,13.732Z"
                        transform="translate(4.323 2.683)"
                        fill="#730000"
                      />
                    </svg>
                  </div>
                  <div className="des">
                    <span>Event UI</span>
                  </div>
                </motion.div> */}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EveryThingScaleSection;
