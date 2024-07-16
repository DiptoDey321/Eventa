"use client"
import ExploreItemsCard from "../../resuable-component/ExploreItemsCard";
import itemOne from '../../../../../public/item1.webp'
import itemTwo from '../../../../../public/items2.webp'
import itemThree from '../../../../../public/item3.webp'
import itemFour from "../../../../../public/item4.webp";
import orgIcon from "../../../../../public/org_icon.png";
import { Button, Col, Row, Select } from "antd";
const { Option } = Select;
import { SearchOutlined } from "@ant-design/icons";

const ExploreItemsSection =() => {
  return (
    <div className="">
      <div className="explore-items-sections">
        <div className="exlore-filter">
          <Row gutter={16} align="middle" justify="space-evenly">
            <Col>
              <Select placeholder="Select Event Type" style={{ width: "100%" }}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
              </Select>
            </Col>
            <Col>
              <Select placeholder="Select City" style={{ width: "100%" }}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
              </Select>
            </Col>
            <Col>
              <Select placeholder="Select Month" style={{ width: "100%" }}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
              </Select>
            </Col>
            <Col>
              <Select placeholder="Select Timeframe" style={{ width: "100%" }}>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
              </Select>
            </Col>
            <Col>
              <Button className="custpm-btn" icon={<SearchOutlined />} type="primary">
                Search
              </Button>
            </Col>
          </Row>
        </div>
        <div className="card-lists">
          <ExploreItemsCard
            imageSrc={itemFour}
            organizerName="Organizer Name"
            organizerIcon={orgIcon}
            heading="Event Heading Event Heading"
            fromDate="June 28, 2024"
            toDate="June 30, 2024"
            location="Bozeman, MT Street 59718, USA"
          />

          <ExploreItemsCard
            imageSrc={itemTwo}
            organizerName="Organizer Name"
            organizerIcon={orgIcon}
            heading="Event Heading Event Heading"
            fromDate="June 28, 2024"
            toDate="June 30, 2024"
            location="Bozeman, MT Street 59718, USA"
          />
          <ExploreItemsCard
            imageSrc={itemThree}
            organizerName="Organizer Name"
            organizerIcon={orgIcon}
            heading="Event Heading Event Heading"
            fromDate="June 28, 2024"
            toDate="June 30, 2024"
            location="Bozeman, MT Street 59718, USA"
          />
          <ExploreItemsCard
            imageSrc={itemOne}
            organizerName="Organizer Name"
            organizerIcon={orgIcon}
            heading="Event Heading Event Heading"
            fromDate="June 28, 2024"
            toDate="June 30, 2024"
            location="Bozeman, MT Street 59718, USA"
          />
        </div>
      </div>
    </div>
  );
}

export default ExploreItemsSection