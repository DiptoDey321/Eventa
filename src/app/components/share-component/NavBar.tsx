/* eslint-disable @next/next/no-img-element */
"use client"
import { usePathname, useRouter } from "next/navigation";
import "./../ui/homepage-components/HomeStyle.css";
import { message } from "antd";
import MobileNavbar from "./MobileNavbar";
import "./../ui/homepage-components/HomeStyle.css";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const user = useSelector((state: RootState) => state.auth.user);
  const routeName = usePathname();
  const router = useRouter();
  
  const handleNavigation =(route:string) =>{
    if(route == "/cs"){
      message.info("Coming Soon...")
      return
    }
    router.push(route);
  }

  useEffect(() => {
    if (user?.first_name) {
      setLoggedIn(true);
    };
  }, [user]);

  console.log(user?.first_name);
  
  

  return (
    <div className="dep-main-menu-container">
      <div
        onClick={() => router.push("/")}
        className="dep-menu-logo-container"
        style={{ cursor: "pointer" }}
      >
        <img src="https://i.ibb.co/Tm5thSk/logo.png" alt="" srcSet="" />
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
              <li onClick={() => handleNavigation("/cs")} className="cool-link">
                Request A Demo
              </li>
              <li onClick={() => handleNavigation("/cs")} className="cool-link">
                Magazine
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
              onClick={() => handleNavigation("/user")}
              className="cool-link"
            >
              Profile
            </li>
          )}
        </ul>

        <a className="dep-btn-0" href="/create">
          Lunch An Event
        </a>
      </div>

      <div className="mobile-menu">
        <MobileNavbar></MobileNavbar>
      </div>
    </div>
  );
}

export default NavBar