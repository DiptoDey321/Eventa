/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu, message, type MenuProps } from "antd";
import "./../ui/homepage-components/HomeStyle.css";

const MobileNavbar: React.FC = () => {

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const menuItems = [
    { key: "/explore", label: "Explore Events" },
    { key: "/demo", label: "Request A Demo" },
    { key: "/magazine", label: "Magazine" },
    { key: "/login", label: "Login" },
    { key: "/create", label: "Lunch An Event" },
  ];

  const onClose = () => {
    setVisible(false);
  };

  const router = useRouter();

  const onClick: MenuProps["onClick"] = (event) => {
    console.log(event);
       if (event.key == "/demo" || event.key == "/magazine") {
         message.info("Coming Soon...");
         return;
       }
       router.push(event.key);
  };

  return (
    <div>
      <div className="hamburger-menu">
        <Button
          style={{
            color: "#ffbf00",
            background: "transparent",
            border: "1px solid #ffbf00",
          }}
          onClick={showDrawer}
          icon={<MenuOutlined />}
        />
        <Drawer placement="left" onClose={onClose} open={visible}>
          <div
            onClick={() => router.push("/")}
            className="dep-menu-logo-container"
            style={{ cursor: "pointer", paddingLeft: "25px" }}
          >
            <img src="https://i.ibb.co/Tm5thSk/logo.png" alt="" srcSet="" />
          </div>
          <div className="mobile-menu">
            <Menu
              className=""
              theme="dark"
              onClick={onClick}
              mode="inline"
              items={menuItems}
            />
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default MobileNavbar;
