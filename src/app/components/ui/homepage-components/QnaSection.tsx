/* eslint-disable @next/next/no-img-element */

"use client";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import faqImage from "./../../../../../public/FAQ.png";
import "./HomeStyle.css";

interface HiddenText {
  label: string;
  value: string;
}

const QnaSection = () => {
  const controls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const listVariants = {
    hidden: {
      y: 20,
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

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const hiddenTexts: HiddenText[] = [
    {
      label: "How does Eventa  platform handle payment processing?",
      value:
        "We integrate with various payment gateways to ensure secure and seamless payment processing. You can retrieve payouts directly through the platform",
    },
    {
      label:
        "What is included in your free event consultancy?",
      value:
        "Our free event consultancy includes personalized advice on event planning, venue selection, and logistical support. We provide expert guidance to help you create a successful event tailored to your needs and budget",
    },
    {
      label: "I am not willing to visit the event!! Will I get a refund?",
      value:
        "You will get the refund on an event based on the organizer's refund policy. Please refer to the refund policy page",
    },
    {
      label: " What type of events can be launched on Eventa?",
      value:
      "From dinner party RSVPs to music festival tickets, our suite of tools optimize workflows and maximize sales for events of any size. Eventa is mostly used to scale the following communities, festivals, nightlife groups, fashion & wellness brands, startups/VCs, community organizations, and fraternities/sororities(trending,)",
    },
    {
      label: "How do I request a quote for my Event?",
      value:
        "To request a quote, simply reach out to us via email or phone or whatsapp. Provide details about your event, including the type, date, and any specific requirements, and we’ll get back to you with a customized quote."
    },
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
        <span>Still have some questions?</span>
      </div>

      <Row align="middle">
        <Col md={24} lg={12}>
          <motion.div
            animate={{ y: ["0px", "20px", "0px", "-20px", "0px"] }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="acc-image-container"
          >
            {/* <img src="https://i.ibb.co/bs8T11D/faq.png" alt="" srcSet="" /> */}
            <Image
              src={faqImage}
              width={500}
              height={450}
              alt="Picture of the author"
            />
          </motion.div>
        </Col>
        <Col md={24} lg={12}>
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
};

export default QnaSection;
