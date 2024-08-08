/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Col, Input, Row } from "antd";
import "./../ui/homepage-components/HomeStyle.css";

const FooterSection = () => {
  return (
    <div className="home-footer-container">
      <Row align="middle">
        <Col xs={12} md={16}>
          <div className="footer-left-side">
            <div className="logo">
              <img src="https://i.ibb.co/Tm5thSk/logo.png" alt="" srcSet="" />
            </div>
            <div className="footer-desc">
              <span>
                Providing the world with tools to create incredible experiences
              </span>
              <span>Subscribe to "HOSTED" — our weekly newsletter</span>
            </div>

            <div className="input-container">
              <Input className="input-field" placeholder="Enter your email" />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 38 38"
                >
                  <path
                    id="paper-plane-svgrepo-com"
                    d="M0,16.644l10.944,8.208L33.25,4.75,15.922,28.576,28.5,38,38,0ZM9.5,38l7.144-4.75L9.5,28.5Z"
                    fill="#ffbf00"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <div className="footer-right-container">
            <div className="">
              <span>Eventa</span>
              <ul>
                <li>Careers</li>
                <li>Magazine</li>
                <li>Eventa TV</li>
              </ul>
            </div>

            <div className="">
              <span>Resources</span>
              <ul>
                <li>Support</li>
                <li>Request A Demo</li>
                <li>FAQ</li>
                <li>Tutorials</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>

      <div className="break"></div>
      <Row align="middle">
        <Col xs={12} md={16}>
          <div className="below-options">
            <span>Copyright © 2024 Eventa All rights reserved</span>
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
            <span>Copyright Policy</span>
          </div>
        </Col>
        <Col xs={12} md={8}>
          <div className="social-icons">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13.424"
                height="28.706"
                viewBox="0 0 13.424 28.706"
              >
                <path
                  id="Union_4"
                  data-name="Union 4"
                  d="M2.9,5.56V9.51H0v4.834H2.9V28.706H8.862V14.345h4s.375-2.319.556-4.852H8.884v-3.3a1.407,1.407,0,0,1,1.292-1.159h3.247V0H9.009C2.754,0,2.9,4.837,2.9,5.56Z"
                  transform="translate(0 0)"
                  fill="#707070"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33.939"
                height="27.506"
                viewBox="0 0 33.939 27.506"
              >
                <path
                  id="Path_76"
                  data-name="Path 76"
                  d="M612.28-1296.249a14.52,14.52,0,0,1-3.489,3.587q.022.3.022.9a19.673,19.673,0,0,1-.818,5.576,20.148,20.148,0,0,1-2.487,5.34,21.012,21.012,0,0,1-3.973,4.524,17.676,17.676,0,0,1-5.557,3.137,20.321,20.321,0,0,1-6.955,1.171,19.354,19.354,0,0,1-10.682-3.115,15.057,15.057,0,0,0,1.68.086,13.635,13.635,0,0,0,8.635-2.966,6.8,6.8,0,0,1-4.048-1.386,6.8,6.8,0,0,1-2.455-3.43,8.582,8.582,0,0,0,1.313.109,7.248,7.248,0,0,0,1.831-.235,6.852,6.852,0,0,1-3.994-2.4,6.7,6.7,0,0,1-1.583-4.416v-.086a6.887,6.887,0,0,0,3.144.881,6.947,6.947,0,0,1-2.261-2.47,6.759,6.759,0,0,1-.84-3.31,6.792,6.792,0,0,1,.948-3.5,19.69,19.69,0,0,0,6.342,5.125,19.407,19.407,0,0,0,8,2.14,7.68,7.68,0,0,1-.172-1.591,6.684,6.684,0,0,1,2.035-4.912,6.714,6.714,0,0,1,4.921-2.03,6.709,6.709,0,0,1,5.082,2.192,13.709,13.709,0,0,0,4.415-1.676,6.748,6.748,0,0,1-3.058,3.825A13.976,13.976,0,0,0,612.28-1296.249Z"
                  transform="translate(-578.341 1299.516)"
                  fill="#707070"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28.713"
                height="28.706"
                viewBox="0 0 28.713 28.706"
              >
                <path
                  id="Icon_awesome-instagram"
                  data-name="Icon awesome-instagram"
                  d="M14.354,9.231a7.36,7.36,0,1,0,7.36,7.36A7.348,7.348,0,0,0,14.354,9.231Zm0,12.145a4.785,4.785,0,1,1,4.785-4.785,4.794,4.794,0,0,1-4.785,4.785ZM23.732,8.93a1.717,1.717,0,1,1-1.717-1.717A1.713,1.713,0,0,1,23.732,8.93Zm4.875,1.742a8.5,8.5,0,0,0-2.319-6.015,8.551,8.551,0,0,0-6.015-2.319C17.9,2.2,10.8,2.2,8.429,2.339A8.539,8.539,0,0,0,2.414,4.651,8.523,8.523,0,0,0,.1,10.666c-.135,2.37-.135,9.474,0,11.844a8.5,8.5,0,0,0,2.319,6.015,8.562,8.562,0,0,0,6.015,2.319c2.37.135,9.474.135,11.844,0a8.5,8.5,0,0,0,6.015-2.319,8.551,8.551,0,0,0,2.319-6.015c.135-2.37.135-9.467,0-11.837Zm-3.062,14.38a4.844,4.844,0,0,1-2.729,2.729c-1.89.749-6.373.576-8.462.576s-6.578.167-8.462-.576a4.844,4.844,0,0,1-2.729-2.729c-.749-1.89-.576-6.373-.576-8.462s-.167-6.578.576-8.462A4.844,4.844,0,0,1,5.893,5.4c1.89-.749,6.373-.576,8.462-.576s6.578-.167,8.462.576a4.844,4.844,0,0,1,2.729,2.729c.749,1.89.576,6.373.576,8.462S26.294,23.169,25.545,25.052Z"
                  transform="translate(0.005 -2.238)"
                  fill="#707070"
                />
              </svg>
            </span>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FooterSection;
