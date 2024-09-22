/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import { Col, Row } from "antd";
import "./../ui/homepage-components/HomeStyle.css";

const FooterSection = () => {
  return (
    <div className="home-footer-container">
      <div className="footer-width-container">
        <Row align="middle">
          <Col xs={24} sm={12} md={16}>
            <div className="footer-left-side">
              <div className="logo">
                <img src="https://i.ibb.co/Tm5thSk/logo.png" alt="" srcSet="" />
              </div>
              <div className="footer-desc">
                <span>
                  Join our event management community for exclusive updates,
                  special offers,
                </span>
                <span>
                  and the latest news delivered straight to your inbox
                </span>
              </div>

              {/* <div className="input-container">
                <Input className="input-field" placeholder="Enter your email" />
                <span onClick={() => message.info("comign soon..")}>
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
              </div> */}

              <div className="">
                <div
                  style={{ paddingTop: "20px" }}
                  className="application-link"
                >
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

                  <a href="">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.63683 3.43396L12.3768 12.005L3.70183 20.655C3.55991 20.4701 3.44974 20.263 3.37583 20.042C3.33761 19.7917 3.33761 19.5372 3.37583 19.287V4.56696C3.34983 4.17196 3.44083 3.77696 3.63583 3.43396M16.1418 8.26696L13.2888 11.093L4.65283 2.59996C4.93283 2.50296 5.23283 2.47596 5.52583 2.52196C5.98583 2.64796 6.42483 2.84196 6.82783 3.09496L14.6438 7.41996C15.1518 7.69296 15.6468 7.97996 16.1418 8.26696ZM13.2898 12.93L16.1288 15.718L14.0708 16.864L7.79183 20.354C7.27183 20.641 6.74983 20.915 6.24183 21.228C6.02446 21.3633 5.78072 21.4507 5.52688 21.4843C5.27304 21.5179 5.01495 21.497 4.76983 21.423L13.2898 12.93ZM20.6498 12.005C20.6571 12.3546 20.5688 12.6997 20.3943 13.0028C20.2198 13.3059 19.9659 13.5556 19.6598 13.725L17.3138 15.027L14.2268 12.005L17.3268 8.93096C18.1218 9.37396 18.9038 9.81696 19.6848 10.234C19.9963 10.408 20.2521 10.6668 20.4227 10.9802C20.5933 11.2936 20.6727 11.6489 20.6498 12.005Z"
                        fill="white"
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
                      <span className="store-name">Play Store</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="">
              <div className="footer-right-container">
                <div className="">
                  <span>Eventa</span>
                  <ul>
                    <li onClick={()=>location.href = '/coming-soon'}>Blogs</li>
                    <li onClick={()=>location.href = '/coming-soon'}>About us</li>
                    <li onClick={()=>location.href = '/coming-soon'}>Tutorials</li>
                    <li onClick={()=>location.href = '/coming-soon'}>Contact us</li>
                  </ul>
                </div>

                <div className="">
                  <span>Resources</span>
                  <ul>
                    <li onClick={()=>location.href = '/coming-soon'}>Terms of use</li>
                    <li onClick={()=>location.href = '/coming-soon'}>Privacy policy</li>
                    <li onClick={()=>location.href = '/coming-soon'}>FAQ / Help center </li>
                    <li onClick={()=>location.href = '/coming-soon'}>Copyright policy</li>
                  </ul>
                </div>
              </div>

              <div style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                <p style={{ color: "#fc0", fontSize: "14px" }}>Contact us</p>{" "}
                <br />
                <p style={{ color: "#fc0", fontSize: "12px" }}>
                  House 39/A-2,Road 4/A, <br />
                  Dhanmondi (1209),Dhaka. <br />
                  Contact: 01703916173 <br />
                  Email: info@eventabd.com
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <div className="break"></div>

        <Row align="middle">
          <Col xs={24} sm={12} md={16}>
            <div className="below-options">
              <span> © 2024 Eventa LLC. All rights reserved.</span>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <div className="social-icons">
              <span style={{cursor:'pointer'}}  onClick={ ()=> window.open('https://www.facebook.com/eventa.enterprise', '_blank')}>
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
                    fill="#C0C0C0"
                  />
                </svg>
              </span>

              <span  style={{cursor:'pointer'}}  onClick={ ()=> window.open('https://twitter.com/EventaEnt1', '_blank')}>
                <svg width="27" height="27" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.751 0H18.818L12.118 7.625L20 18H13.828L8.995 11.707L3.464 18H0.394L7.561 9.845L0 0H6.328L10.698 5.752L15.751 0ZM14.675 16.172H16.375L5.404 1.732H3.58L14.675 16.172Z" fill="#C0C0C0"/>
                </svg>
              </span>

              <span  style={{cursor:'pointer'}}  onClick={ ()=> window.open('https://www.instagram.com/eventaenterprise', '_blank')}>
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
                    fill="#C0C0C0"
                  />
                </svg>
              </span>

              <span  style={{cursor:'pointer'}}  onClick={ ()=> window.open('https://www.youtube.com/@EventaEnt1', '_blank')}>
              <svg width="33" height="33" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C10.855 0 11.732 0.0220001 12.582 0.0580001L13.586 0.106L14.547 0.163L15.447 0.224L16.269 0.288C17.1612 0.355891 18.0008 0.736434 18.64 1.3626C19.2791 1.98877 19.6768 2.8204 19.763 3.711L19.803 4.136L19.878 5.046C19.948 5.989 20 7.017 20 8C20 8.983 19.948 10.011 19.878 10.954L19.803 11.864L19.763 12.289C19.6768 13.1798 19.2789 14.0115 18.6396 14.6377C18.0002 15.2639 17.1604 15.6443 16.268 15.712L15.448 15.775L14.548 15.837L13.586 15.894L12.582 15.942C11.7218 15.9793 10.861 15.9986 10 16C9.13902 15.9986 8.27817 15.9793 7.418 15.942L6.414 15.894L5.453 15.837L4.553 15.775L3.731 15.712C2.83881 15.6441 1.9992 15.2636 1.36004 14.6374C0.720888 14.0112 0.323191 13.1796 0.237 12.289L0.197 11.864L0.122 10.954C0.0458327 9.97112 0.00513964 8.98581 0 8C0 7.017 0.052 5.989 0.122 5.046L0.197 4.136L0.237 3.711C0.323157 2.82055 0.720712 1.98905 1.35966 1.36291C1.99861 0.736759 2.83799 0.356116 3.73 0.288L4.551 0.224L5.451 0.163L6.413 0.106L7.417 0.0580001C8.2775 0.0207272 9.13869 0.00138958 10 0ZM8 5.575V10.425C8 10.887 8.5 11.175 8.9 10.945L13.1 8.52C13.1914 8.46739 13.2673 8.39162 13.3201 8.30033C13.3729 8.20904 13.4007 8.10545 13.4007 8C13.4007 7.89455 13.3729 7.79096 13.3201 7.69967C13.2673 7.60838 13.1914 7.53261 13.1 7.48L8.9 5.056C8.80876 5.00332 8.70526 4.9756 8.5999 4.97562C8.49455 4.97563 8.39106 5.00339 8.29983 5.0561C8.20861 5.1088 8.13287 5.1846 8.08024 5.27587C8.02761 5.36713 7.99993 5.47065 8 5.576V5.575Z" fill="#BFBFBF"/>
</svg>

              </span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FooterSection;
