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
        label: "What kind of events is EVENTA best for?",
        value:
          "From dinner party RSVPs to music festival tickets, our suite of tools optimize workflows and maximize sales for events of any size. Eventa is mostly used to scale the following communities, festivals, nightlife groups, fashion & wellness brands, startups/VCs, community organizations, and fraternities/sororities",
      },
      {
        label: "How does EVENTA help you reach new audiences?",
        value: "Text of Accordion 2",
      },
      { label: "How does EVENTA make money?", value: "Text of Accordion 3" },
      { label: "How do payouts work?", value: "Text of Accordion 4" },
      { label: "Can I ________ on EVENTA?", value: "Text of Accordion 5" },
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
        <Col span={14}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={listVariants}
            className="accordion"
          >
            {hiddenTexts.map((hiddenText, index) => (
              <div key={hiddenText.label}>
                <button
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
        <Col span={10}>
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
      </Row>
    </div>
  );
}

export default QnaSection