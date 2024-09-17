"use client";
import { isUserLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import FooterSection from "../components/share-component/FooterSection";
import '../components/ui/homepage-components/HomeStyle.css';
import Contents from "../components/ui/user-route-components/Contents";
import Navbar from "../components/ui/user-route-components/Navbar";
import Loading from "../loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const userLoggedIn = isUserLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, userLoggedIn]);

  if (!isLoading) {
    return <Loading></Loading>;
  }


  return (
    <div>
      <div className="user-width">
        <div className="user-main-layout">
          <Navbar></Navbar>
        </div>
        <div style={{padding:'0px 60px 50px 60px'}}>
          <Contents>{children}</Contents>
        </div>
      </div>
      <FooterSection></FooterSection>
    </div>
  );
};

export default DashboardLayout;
