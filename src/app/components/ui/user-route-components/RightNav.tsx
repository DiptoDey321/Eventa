/* eslint-disable @next/next/no-img-element */

"use client"
import { removeUserInfo } from "@/services/auth.service";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import "./UserRouteStyle.css";

const { Option } = Select;


interface MenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const RightNav:React.FC<MenuProps> =({ isOpen, closeMenu })=> {
  const router = useRouter();

  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  const handleChange = (value: string) => {
    setSelectedValue(value);
    console.log(`selected ${value}`);
  };

  const handleButtonClick = () => {
    console.log("Button in option clicked");
  };

  const handleLogOut = () =>{
    removeUserInfo();
     router.push("/login");
  }


  return (
    <div style={{zIndex:'9999999'}} className={`dep-menu ${isOpen ? "open" : ""}`} onClick={closeMenu}>
      <div className="dep-menu-content" onClick={(e) => e.stopPropagation()}>
        <div className="dep-organization-name-pic">
          <Select
            className="dep-custom-select"
            style={{ width: 180, height: "45px" }}
            placeholder="Eventa"
            defaultValue="Organization 1"
            onChange={handleChange}
            dropdownRender={(menu) => (
              <div>
                {menu}
                <div
                  style={{
                    padding: "8px",
                  }}
                >
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={handleButtonClick}
                  >
                    + Add New organization
                  </span>
                </div>
              </div>
            )}
          >
            <Option value="Organization 1">Organization 1</Option>
            <Option value="Organization 2">Organization 2</Option>
            <Option value="Organization 3">Organization 3</Option>
          </Select>
          <div className="dep-profile-pic-container">
            <img
              src="https://i.ibb.co/M6yN563/blank-profile-picture-973460-960-720.webp"
              alt="dp image"
            />
          </div>
        </div>

        <div >
          <Button
            className="dep-custom-btn"
            style={{
              width: "100%",
              color: "white",
              backgroundColor: "black",
              height: "45px",
              fontSize: "18px",
            }}
            type="primary"
            icon={<PlusOutlined />}
          >
            Create New Event
          </Button>
        </div>

        <ul>
          <li>My Dashboard</li>
          <li>My Account</li>
          <li>My Orders</li>
          <li onClick={() => handleLogOut()}>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default RightNav