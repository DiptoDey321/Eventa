"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/ui/user-route-components/Navbar";
import Contents from "../components/ui/user-route-components/Contents";
import { isUserLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import FooterSection from "../components/share-component/FooterSection";
import '../components/ui/homepage-components/HomeStyle.css'

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
    return <div>loading ...</div>;
  }


  return (
    <div>
      <div className="user-width">
        <div className="user-main-layout">
          <Navbar></Navbar>
        </div>
        <div style={{ paddingTop: "50px" }}>
          <Contents>{children}</Contents>
        </div>
      </div>
      <FooterSection></FooterSection>
    </div>
  );
};

export default DashboardLayout;
