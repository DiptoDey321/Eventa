/* eslint-disable @next/next/no-img-element */
"use client";
import "./HomeStyle.css";

const HeroSection = ()=> {

  return (
    <div className="dep-hero-sectiom">
      {/* <Row> */}
      {/* <Col lg={24} xl={24}> */}
      <div className="dep-hero-right-side">
        <p className="title">Your Partner In Perfect </p>
        <p className="title gradient-color">Celebrations</p>
        <div className="dep-peoples-with-info">
          <span style={{ color: "white" }}>
            Connect, create, experience. <br /> The ultimate event platform.
          </span>
        </div>

        <div className="btns">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => location.href = "/explore"}
            className="sec-btn"
          >
            Explore Events
          </a>
          <a
            style={{ cursor: "pointer" }}
            onClick={() =>  location.href ="/create"}
            className="first-btn"
          >
            Lunch an event
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection