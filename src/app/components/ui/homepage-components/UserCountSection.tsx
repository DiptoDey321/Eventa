/* eslint-disable @next/next/no-img-element */
"use client";
import { message } from "antd";
import "./HomeStyle.css";

const UserCountSection = () => {
  return (
    <div className="user-count-info">
      <div className="main-container">
        <img src="https://i.ibb.co/VwNrq6h/users.png" alt="" />
        <div className="heading">
          <span>Curious to know more!!</span>
          <span>Have more questions regarding our serivices?</span>
        </div>

        <div className="btns">
          <a style={{cursor:"pointer"}} className="sec-btn" onClick={() => message.info("comign soon..")}>
            CTA-Request a demo
          </a>
          {/* <a className="first-btn" href="">
            Lunch an event
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default UserCountSection