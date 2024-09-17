"use client";
import EventDetailsForUser from "@/app/components/ui/user-route-components/EventDetailsForUser";
import UserDashboard from "@/app/components/ui/user-route-components/UserDashboard";
import UsersTickets from "@/app/components/ui/user-route-components/UsersTickets";
import { Tabs, TabsProps } from "antd";

const LoggedUser = () => {

  const onChange = (key: string) => {
    console.log(key);
  };


  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Overview",
      children: <UserDashboard />,
    },
    {
      key: "2",
      label: "Tickets",
      children: <UsersTickets />,
    },
    {
      key: "3",
      label: "Events",
      children: <EventDetailsForUser />,
    },
  ];
  return (
    <div>
      <div className="dep-user-main-menu">
        <Tabs centered defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default LoggedUser;
