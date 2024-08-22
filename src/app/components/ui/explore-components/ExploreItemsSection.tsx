"use client"
import ExploreItemsCard from "../../resuable-component/ExploreItemsCard";
import itemFour from "../../../../../public/item4.webp";
import orgIcon from "../../../../../public/org_icon.png";
import { Button, Col, Row, Select } from "antd";
const { Option } = Select;
import { SearchOutlined } from "@ant-design/icons";

const ExploreItemsSection =({data}:any) => {

  console.log(data?.data?.rows);
  return (
    <div className="">
      <div className="explore-items-sections">
        <div className="explore-width-container">
          <div className="exlore-filter">
            <Row align="middle" gutter={[16, 16]} justify="space-evenly">
              <Col xs={24} sm={12} md={8} lg={5}>
                <Select
                  placeholder="Select Event Type"
                  style={{ width: "100%" }}
                >
                  <Option value="option1">Option 1</Option>
                  <Option value="option2">Option 2</Option>
                </Select>
              </Col>
              <Col xs={24} sm={12} md={8} lg={5}>
                <Select placeholder="Select City" style={{ width: "100%" }}>
                  <Option value="option1">Option 1</Option>
                  <Option value="option2">Option 2</Option>
                </Select>
              </Col>
              <Col xs={24} sm={12} md={8} lg={5}>
                <Select placeholder="Select Month" style={{ width: "100%" }}>
                  <Option value="option1">Option 1</Option>
                  <Option value="option2">Option 2</Option>
                </Select>
              </Col>
              <Col xs={24} sm={12} md={8} lg={5}>
                <Select
                  placeholder="Select Timeframe"
                  style={{ width: "100%" }}
                >
                  <Option value="option1">Option 1</Option>
                  <Option value="option2">Option 2</Option>
                </Select>
              </Col>
              <Col xs={24} sm={12} md={8} lg={4}>
                <Button
                  className="custpm-btn"
                  icon={<SearchOutlined />}
                  type="primary"
                  style={{ width: "100%" }}
                >
                  Search
                </Button>
              </Col>
            </Row>
          </div>
          <Row align="middle" gutter={[32, 32]}>
            {data?.data?.map((data: any, index: number) => (
              <Col sm={24} md={12} lg={8} key={index}>
                <ExploreItemsCard
                  id={data._id}
                  imageSrc={itemFour}
                  organizerName={`${data?.created_by.first_name} ${data?.created_by.last_name}`}
                  organizerIcon={orgIcon}
                  heading={data?.title}
                  fromDate={data?.event_start_date_time}
                  toDate={data?.event_end_date_time}
                  location={data?.address}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default ExploreItemsSection