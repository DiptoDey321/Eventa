/* eslint-disable @next/next/no-img-element */
"use client"
import { RootState } from "@/redux/store";
import { message, Spin } from "antd";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./../ui/homepage-components/HomeStyle.css";
import MobileNavbar from "./MobileNavbar";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const user = useSelector((state: RootState) => state.auth.user);
  const routeName = usePathname();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const handleNavigation =(route:string) =>{
    console.log("calling");
    
    try {
      setLoading(true);
      if (route == "/cs") {
        message.info("Coming Soon...");
        return;
      }

      window.location.href = route
      setLoading(false);
    } catch (error) {
      console.error("Navigation error:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user?.first_name) {
      setLoggedIn(true);
    };
  }, [user]);
  
  

  return (
    <>
      {loading && (
        <div className="loadingOverlay">
          <Spin size="large" />
        </div>
      )}
      <div className="dep-main-menu-container">
        <div
          onClick={() => router.push("/")}
          className="dep-menu-logo-container"
          style={{ cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="248.001"
            height="40.552"
            viewBox="0 0 248.001 40.552"
          >
            <g id="logo-alter" transform="translate(-0.038 0)">
              <path
                id="Path_2673"
                data-name="Path 2673"
                d="M53.308,49.039H22.883a8.654,8.654,0,0,1-8.654-8.654V18.618a8.69,8.69,0,0,1,8.689-8.689h30.39v8.689H23.784a.85.85,0,0,0-.86.86v5.661H53.308v8.654H22.883v5.666a.891.891,0,0,0,.249.657.83.83,0,0,0,.611.249H53.308Z"
                transform="translate(-14.19 -9.145)"
                fill="#F6C631"
              />
              <path
                id="Path_2674"
                data-name="Path 2674"
                d="M142.226,10l-16.7,35.816a6.536,6.536,0,0,1-2.576,2.9,7.371,7.371,0,0,1-3.838,1.018,7.574,7.574,0,0,1-3.864-.952,6.2,6.2,0,0,1-2.545-2.937L96,10h9.982l12.334,26.384a.784.784,0,0,0,.769.54.7.7,0,0,0,.769-.54L132.239,10Z"
                transform="translate(-54.337 -9.18)"
                fill="#F6C631"
              />
              <path
                id="Path_2675"
                data-name="Path 2675"
                d="M231.408,49.039H201a8.654,8.654,0,0,1-8.654-8.654V18.618a8.353,8.353,0,0,1,2.545-6.144,8.364,8.364,0,0,1,6.144-2.545h30.405v8.689h-29.6a.85.85,0,0,0-.855.86v5.661h30.4v8.654H201v5.666a.871.871,0,0,0,.249.657.809.809,0,0,0,.606.249h29.524Z"
                transform="translate(-101.64 -9.145)"
                fill="#F6C631"
              />
              <path
                id="Path_2676"
                data-name="Path 2676"
                d="M313,48.284h-8.654v-27.7a2.7,2.7,0,0,0-1.985-2.5,19.157,19.157,0,0,0-6.735-.835,19.885,19.885,0,0,0-6.73.789,2.666,2.666,0,0,0-1.939,2.545v27.7H278.3V19.675q0-6.368,5.014-9.071,4.108-2.214,12.329-2.214,8.084,0,12.38,2.392a9.447,9.447,0,0,1,5.014,8.893Z"
                transform="translate(-143.839 -8.39)"
                fill="#F6C631"
              />
              <path
                id="Path_2677"
                data-name="Path 2677"
                d="M391.059,18.654H352V10h39.079Zm-15.18,30.42h-8.654V23.006h8.654Z"
                transform="translate(-180.022 -9.18)"
                fill="#F6C631"
              />
              <path
                id="Path_2678"
                data-name="Path 2678"
                d="M429.076,12.68a6.154,6.154,0,0,1,5.966-3.93,6.232,6.232,0,0,1,6.007,3.93L457.72,48.46H448.19L435.856,22.031a.774.774,0,0,0-.814-.509.85.85,0,0,0-.769.509l-8.328,17.755h13.841l4.072,8.654H412.41Z"
                transform="translate(-209.681 -8.567)"
                fill="#F6C631"
              />
            </g>
          </svg>
        </div>

        <div className="dep-menu-container desktop-menu">
          <ul>
            {routeName !== "/explore" && (
              <>
                <li
                  onClick={() => handleNavigation("/explore")}
                  className="cool-link"
                >
                  Explore Events
                </li>
                <li
                  onClick={() => handleNavigation("/cs")}
                  className="cool-link"
                >
                  Request A Demo
                </li>
                <li
                  onClick={() => handleNavigation("/cs")}
                  className="cool-link"
                >
                  About Us
                </li>
              </>
            )}
            {!loggedIn && (
              <li
                onClick={() => handleNavigation("/login")}
                className="cool-link"
              >
                Login
              </li>
            )}

            {loggedIn && (
              <li
                
                className="cool-link"
              >
                <a style={{textDecoration :"none", color:"inherit" }} href="/user">Profile</a>
              </li>
            )}

            <li
              onClick={() => router.push("/create")}
              className="create-hover-btn create-hover-btn-2"
            >
              Lunch An Event
            </li>
          </ul>
        </div>

        <div className="mobile-menu">
          <MobileNavbar></MobileNavbar>
        </div>
      </div>
    </>
  );
}

export default NavBar