/* eslint-disable @next/next/no-img-element */
"use client";
import "./HomeStyle.css";

const UserCountSection = () => {
  return (
    <div className="user-count-info">
      <div className="main-container">
        <img src="https://i.ibb.co/VwNrq6h/users.png" alt="" />
        <div className="heading">
          <span>Join 1 million+ Event-lovers</span>
          <span>
            It’s time to take your live experiences to the next level...
          </span>
        </div>

        <div className="btns">
          <a className="sec-btn" href="">
            Explore Events
          </a>
          <a className="first-btn" href="">
            Lunch an event
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserCountSection