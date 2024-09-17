"use client";
import { useGetEventCategoryQuery } from "@/redux/api/ticketsApi";
import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Row,
  Select,
  Switch,
  Upload,
} from "antd";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import initialBackground from "../../../../../../public/selltickets-sidebg.webp";
import "./eventEdit.css";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
const { Option } = Select;

const EventEdit = ({ eventData }: any) => {
  const [form] = Form.useForm();
  const { data, error, isLoading } = useGetEventCategoryQuery(undefined);
  const [isPhone, setIsPhone] = useState(false);
  const [editorValue, setEditorValue] = useState(eventData?.description || "");
  const [formValues, setFormValues] = useState<any>({});
  const [img, setImg] = useState<File | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<
    string | StaticImageData
  >(initialBackground);
  console.log("event details", eventData);

  useEffect(() => {
    form.setFieldsValue({
      title: eventData?.title,
      event_start_date_time: dayjs(eventData?.event_start_date_time),
      event_end_date_time: dayjs(eventData?.event_end_date_time),
      venue_name: eventData?.venue_name,
      address: eventData?.address,
      category_id: eventData?.category_id,
      event_phone: eventData?.phone,
      event_email: eventData?.email,
      description: eventData?.description,
      imageUrl: eventData?.event_image_url,
    });
    setEditorValue(eventData?.description || "");
    setBackgroundImage(
      eventData?.event_image_url
        ? eventData?.event_image_url
        : initialBackground
    );
  }, [eventData, form]);

  const validatePhoneNumber = (_: any, value: string) => {
    const phonePattern = /^[0-9]{11}$/;
    if (value && !phonePattern.test(value)) {
      return Promise.reject(new Error("Invalid phone number!"));
    }
    return Promise.resolve();
  };

  const validateEmail = (_: any, value: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (value && !emailPattern.test(value)) {
      return Promise.reject(new Error("Invalid email address!"));
    }
    return Promise.resolve();
  };

  const handleFormChange = (changedValues: any, allValues: any) => {
    setFormValues({ ...allValues, description: editorValue });
  };

  const handleChange = (info: any) => {
    if (info.file.status === "done") {
      setImg(info.file.originFileObj as File);
      const url = URL.createObjectURL(info.file.originFileObj);
      setBackgroundImage(url);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const uploadProps = {
    onChange: handleChange,
    beforeUpload: (file: File) => {
      const isImage = file.type.startsWith("image/");
      if (!isImage) {
        message.error("You can only upload image files!");
      }
      return isImage;
    },
    showUploadList: false,
  };

  return (
    <div>
      <Form form={form} layout="vertical" onValuesChange={handleFormChange}>
        <Form.Item
          name="title"
          rules={[{ required: true, message: "Please input the event name!" }]}
          label="Event name"
        >
          <Input
            className="input-field-event-create"
            placeholder="Enter event name"
          />
        </Form.Item>

        {/* Start Date & End Date */}

        <Row>
          <Col span={12}>
            <Form.Item
              className="common-class "
              name="event_start_date_time"
              rules={[
                { required: true, message: "Please select the start time!" },
              ]}
              label="Event start date"
            >
              <DatePicker
                className="input-field-event-create"
                style={{ width: "100%" }}
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="Enter Start Date"
              />
            </Form.Item>

            <Form.Item
              className="common-class "
              name="event_end_date_time"
              label="Event end date"
              dependencies={["event_start_date_time"]}
              rules={[
                { required: true, message: "Please select the end time!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const startDate = getFieldValue("event_start_date_time");
                    if (!value || !startDate || value.isAfter(startDate)) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("End date must be later than start date!")
                    );
                  },
                }),
              ]}
            >
              <DatePicker
                className="input-field-event-create"
                style={{ width: "100%" }}
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="Enter End Date"
              />
            </Form.Item>

            {/* Venue Name */}
            <Form.Item
              name="venue_name"
              rules={[
                { required: true, message: "Please input the venue name!" },
              ]}
              label="Venue name"
              className="common-class"
            >
              <Input
                className="input-field-event-create"
                placeholder="Enter venue name"
              />
            </Form.Item>

            {/* Address */}
            <Form.Item
              name="address"
              className="common-class"
              label="Address"
              rules={[{ required: true, message: "Please input the address!" }]}
            >
              <Input
                className="input-field-event-create"
                placeholder="Enter address"
              />
            </Form.Item>

            {/* Category */}
            <Form.Item
              className="common-class"
              label="Category"
              name="category_id"
              rules={[{ required: true, message: "Please select a category!" }]}
            >
              <Select
                className="input-field-event-create"
                placeholder="Select a category"
              >
                {data?.data?.map((category: any) => (
                  <Option key={category._id} value={category._id}>
                    {category.title}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="basic-style2">
              <div className="event_image_url">
                <div className="sell-tickets-side-bg">
                  <Image
                    className="right-img-property"
                    src={backgroundImage} // Default or uploaded image
                    alt="Event image"
                    width={300}
                    height={660}
                  />
                  <div className="img-blur-effect"></div>
                  <div className="upload-options">
                    <Upload {...uploadProps}>
                      <Button className="cutsom-btn" icon={<UploadOutlined />}>
                        Upload Image
                      </Button>
                    </Upload>
                  </div>
                </div>
              </div>
            </Form.Item>
          </Col>
        </Row>

        {/* Description */}
        <Form.Item
          className="common-class"
          label="Descriptions"
          name="description"
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <ReactQuill value={editorValue} onChange={setEditorValue} />
        </Form.Item>

        {/* Phone or Email Switch */}
        <Form.Item>
          <Row justify="end">
            <Col>
              <Switch
                checkedChildren="Phone"
                unCheckedChildren="Email"
                checked={isPhone}
                onChange={setIsPhone}
              />
            </Col>
          </Row>
        </Form.Item>

        {/* Phone or Email based on Switch */}
        {!isPhone ? (
          <Form.Item
            label="Phone Number"
            name="event_phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
              { validator: validatePhoneNumber },
            ]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>
        ) : (
          <Form.Item
            name="event_email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email address!" },
              { validator: validateEmail },
            ]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

export default EventEdit;
