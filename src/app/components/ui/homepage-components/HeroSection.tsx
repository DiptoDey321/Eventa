/* eslint-disable @next/next/no-img-element */
"use client";
import "./HomeStyle.css";

const HeroSection = ()=> {

  return (
    <div className="dep-hero-sectiom">
      {/* <Row> */}
      {/* <Col lg={24} xl={24}> */}
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
      {/* </Col> */}
      {/* <Col lg={24} xl={12}>
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
        </Col> */}
      {/* </Row> */}
    </div>
  );
}

export default HeroSection