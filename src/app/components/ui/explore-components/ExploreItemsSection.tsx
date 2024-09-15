"use client";
import { useGetEventCategoryQuery } from "@/redux/api/ticketsApi";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { useState } from "react";
import itemFour from "../../../../../public/item4.webp";
import orgIcon from "../../../../../public/org_icon.png";
import ExploreItemsCard from "../../resuable-component/ExploreItemsCard";
const { Option } = Select;

const { RangePicker } = DatePicker;

const ExploreItemsSection = ({ data }: any) => {
  const [form] = Form.useForm();
  const {
    data: eventCategories,
    error,
    isLoading,
  } = useGetEventCategoryQuery(undefined);

  const [filteredData, setFilteredData] = useState(data?.data);

  const handleSearch = () => {
    form.validateFields().then((values: any) => {
      const { title, timeFrame, city, category_id } = values;
  
      let filtered: any[] = data?.data || []; // Use `any[]` for filtered data
  
      if (title) {
        filtered = filtered.filter((event: any) =>
          event.title.toLowerCase().includes(title.toLowerCase())
        );
      }
  
      if (timeFrame && timeFrame.length === 2) {
        const [startDate, endDate] = timeFrame;
        filtered = filtered.filter((event: any) =>
          new Date(event.event_start_date_time) >= new Date(startDate) &&
          new Date(event.event_end_date_time) <= new Date(endDate)
        );
      }
  
      if (city) {
        filtered = filtered.filter((event: any) =>
          event.address.toLowerCase().includes(city.toLowerCase())
        );
      }
  
      if (category_id) {
        filtered = filtered.filter((event: any) =>
          event.category_id === category_id
        );
      }
  
      setFilteredData(filtered);
    });
  };
  

  const handleReset = () => {
    form.resetFields();
    setFilteredData(data?.data); // Reset to original data
  };

  console.log(data);
  
  return (
    <div className="">
      <div className="explore-items-sections">
        <div className="explore-width-container">
          <div className="exlore-filter">
            <Form
              form={form}
              layout="vertical"
            >
              <Row align="middle" gutter={[12, 12]} justify="space-evenly">

                <Col xs={24} sm={12} md={8} lg={6}>
                  <Form.Item name="title">
                    <Input placeholder="Type title" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={12} md={8} lg={6}>
                  <Form.Item name="timeFrame">
                    <RangePicker style={{ width: '100%' }} />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={12} md={8} lg={4}>
                  <Form.Item name="city">
                    <Input placeholder="Type City" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={12} md={8} lg={4}>
                  <Form.Item
                    name="category_id"
                  >
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Event category"
                    >
                      {eventCategories?.data?.map((category: any) => (
                        <Option key={category._id} value={category._id}>
                          {category.title}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                <Col xs={24} sm={12} md={8} lg={3}>
                  <div style={{display:"flex" , alignItems:"center", gap:"10px"}}>
                  <Button
                    className="custpm-btn"
                    icon={<SearchOutlined />}
                    type="primary"
                    style={{ width: "100%" }}
                    onClick={handleSearch}
                  >
                  </Button>
                  <Button
                    className="custpm-btn"
                    icon={<CloseOutlined />}
                    type="primary"
                    style={{ width: "100%" }}
                    onClick={handleReset}
                  >
                  </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>


          <Row align="middle" gutter={[32, 32]}>
            {filteredData.map((data: any, index: number) => (
              <Col sm={24} md={12} lg={8} key={index}>
                <ExploreItemsCard
                  id={data._id}
                  imageSrc={
                    data?.event_image_url
                      ? `https://link.storjshare.io/raw/jw2ydrl6k3ff65py2xpvvgm3qseq/${data?.event_image_url}`
                      : itemFour
                  }
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
};

export default ExploreItemsSection;
