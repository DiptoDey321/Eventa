/* eslint-disable react/no-unescaped-entities */
"use client"
import { isUserLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SellTickets from "../components/ui/create-components/SellTickets";
import Loading from "../loading";
import './createPageStyle.css';

const CreatePage = () => {
   const router = useRouter();
    const activeComponents  = () =>{
      router.push("/");
    }

    const userLoggedIn = isUserLoggedIn();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
      if (!userLoggedIn) {
        localStorage.setItem('redirectAfterLogin', '/create');
        router.push("/login");
      }
      setIsLoading(true);
    }, [router, userLoggedIn]);

    if (!isLoading) {
      return <><Loading></Loading></>;
    }
  return (
    <>
      <SellTickets activeComponents={activeComponents}></SellTickets>
    </>
  );
}

export default CreatePage