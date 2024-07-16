import React from "react";
import "./UserRouteStyle.css";
import dynamic from "next/dynamic";
import { Select } from "antd";
const { Option } = Select;
const Area = dynamic(
  () => import("@ant-design/plots").then(({ Area }) => Area),
  {
    ssr: false,
  }
);

const BarChart = () => {
  const config = {
    theme: "classicDark",
    data: {
      type: "fetch",
      value: "https://assets.antv.antgroup.com/g2/stocks.json",
      transform: [
        { type: "filter", callback: (d: any) => d.symbol === "GOOG" },
      ],
    },
    xField: (d: any) => new Date(d.date),
    yField: "price",
    style: {
      fill: "linear-gradient(-90deg, white 0%, #ffbf00 100%)",
    },
    axis: {
      y: { labelFormatter: "~s" },
    },
    line: {
      style: {
        stroke: "darkgreen",
        strokeWidth: 2,
      },
    },
  };

  // console.log(config);
  
  return (
    <div>
      <div className="dep-selector-container">
        <Select
          defaultValue="Day"
          style={{ width: 120 }}
          onChange={(value) => console.log(value)}
        >
          <Option value="Day">Day</Option>
          <Option value="Month">Month</Option>
          <Option value="Year">Year</Option>
        </Select>
      </div>
      <div style={{ height: "300px"}}>
        <Area {...config} />
      </div>
    </div>
  );
};

export default BarChart;
