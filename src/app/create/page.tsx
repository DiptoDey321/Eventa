/* eslint-disable react/no-unescaped-entities */
"use client"
import { isUserLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SellTickets from "../components/ui/create-components/SellTickets";
import './createPageStyle.css';

const CreatePage = () => {
   const router = useRouter();
    // const [activeMainpage, setActiveMainPage] = useState(true)
    // const [isSellTicket, setIsSellTicket] = useState(true);
    // const [activeSellTicketComponent, setActiveSellTicketComponent] = useState(false)

    // const handleChange = () => {
    //   setIsSellTicket(!isSellTicket);
    // };

    const activeComponents  = () =>{
      // if (isSellTicket) {
      //   setActiveSellTicketComponent(!activeSellTicketComponent);
      //   setActiveMainPage(!activeMainpage);
      // }
      // else{
      //   message.info("Cominng soon")
      // }
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
      return <div>loading ...</div>;
    }


  return (
    <>
      {/* {activeMainpage && (
        <div className="create-page">
          <div className="blur-container">
            <div className="">
              <span className="heading">Let's launch your event</span>
              <div className="switch-container">
                <div className="">
                  <label
                    htmlFor="filter"
                    className="switch"
                    aria-label="Toggle Filter"
                  >
                    <input
                      type="checkbox"
                      id="filter"
                      onChange={handleChange}
                    />
                    <span>Sell Tickets</span>
                    <span>RSVP Only</span>
                  </label>
                </div>
              </div>

              <div className="button">
                <Button onClick={activeComponents} className="customize-btn">
                  Continues
                </Button>
              </div>

              <div className="cancel-btn">
                <a href="/">Cancel</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSellTicketComponent && ( */}
        <SellTickets activeComponents={activeComponents}></SellTickets>
      {/* )} */}
    </>
  );
}

export default CreatePage