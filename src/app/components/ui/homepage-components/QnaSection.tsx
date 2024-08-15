/* eslint-disable @next/next/no-img-element */

"use client";
import "./HomeStyle.css";
import { useEffect, useState } from "react";
import { PlusOutlined ,MinusOutlined} from "@ant-design/icons";
import { Col, Row } from "antd";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface HiddenText {
    label: string;
    value: string;
}


const QnaSection = () => {

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

  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

    const hiddenTexts: HiddenText[] = [
      {
        label: "How does Eventar platform handle payment processing?",
        value:
          "We integrate with various payment gateways to ensure secure and seamless payment processing. You can accept payments for tickets, registration fees, and other event-related costs directly through the platform.",
      },
      {
        label:
          "What are the latest and upcoming events that Eventa is planning to launch?",
        value:
          "We have various categories of events that are regularly launched on our platforms. Keep an eye on our App or website for the upcoming events",
      },
      {
        label: "I am not willing to visit the event!! Will I get a refund?",
        value:
          " No but  you can always refer your friends as the condition applies",
      },
      {
        label: "What are the events that are frequently launched on Eventa?",
        value:
          "From dinner party RSVPs to music festival tickets, our suite of tools optimize workflows and maximize sales for events of any size. Eventa is mostly used to scale the following communities, festivals, nightlife groups, fashion & wellness brands, startups/VCs, community organizations, and fraternities/sororities",
      },
      { label: " How often is the platform updated?", value: "We continuously update our platform to introduce new features, improve performance, and enhance security. We also listen to user feedback and make adjustments to ensure the platform meets your evolving needs." },
    ];

    const [visibility, setVisibility] = useState<boolean[]>(
      hiddenTexts.map(() => false)
    );

    const handleToggleVisibility = (index: number) => {
      setVisibility((prevVisibility) => {
        const newVisibility = [...prevVisibility];
        newVisibility[index] = !newVisibility[index];
        return newVisibility;
      });
    };
    
  return (
    <div className="hoempage-qna-section">
      <div className="heading">
        <span>You have some questions?</span>
      </div>

      <Row align="middle">
        <Col md={24} lg={10}>
          <motion.div
            animate={{ y: ["0px", "20px", "0px", "-20px", "0px"] }}
            transition={{
              y: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="acc-image-container"
          >
            <img src="https://i.ibb.co/bs8T11D/faq.png" alt="" srcSet="" />
          </motion.div>
        </Col>
        <Col md={24} lg={14}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={listVariants}
            className="accordion"
          >
            {hiddenTexts.map((hiddenText, index) => (
              <div style={{ cursor: "pointer" }} key={hiddenText.label}>
                <button
                  style={{ cursor: "pointer" }}
                  className="accordion__button"
                  onClick={() => handleToggleVisibility(index)}
                >
                  {hiddenText.label}

                  <span>
                    {visibility[index] ? <MinusOutlined /> : <PlusOutlined />}
                  </span>
                </button>
                <p
                  className={`accordion__content ${
                    visibility[index] ? "active" : ""
                  }`}
                >
                  {hiddenText.value}
                </p>
              </div>
            ))}
          </motion.div>
        </Col>
      </Row>
    </div>
  );
}

export default QnaSection