"use client";
import "./createEvent.css";
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Switch,
  Row,
  Col,
  Upload,
  message,
} from "antd";
import { MailOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";
import Tickets from "./Tickets";
import { TicketType } from "@/types/ticketsInterfece";
import moment from "moment";
import initialBackground from '../../../../../public/selltickets-sidebg.webp'
import Image, { StaticImageData } from "next/image";
import { useCreateTicketsMutation, useGetEventCategoryQuery, usePostEventMutation } from "@/redux/api/ticketsApi";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});

const { Option } = Select;

interface SellTicketsProps {
  activeComponents: () => void;
}

interface Image {
  uid: string;
}

const SellTickets: React.FC<SellTicketsProps> = ({ activeComponents }) => {
  const [form] = Form.useForm();
  const [isPhone, setIsPhone] = useState(false);
  const [editorValue, setEditorValue] = useState("");
  const [formValues, setFormValues] = useState<any>({});
  const [backgroundImage, setBackgroundImage] = useState<
    string | StaticImageData
  >(initialBackground);
  const router = useRouter();
  const { data, error, isLoading } = useGetEventCategoryQuery(undefined);
  const [postEvent] = usePostEventMutation();
  const [createTickets] = useCreateTicketsMutation();
  const [img, setImg] = useState<Image | null>(null);
  const [tickets, setTickets] = useState<TicketType[]>([
    {
      id: 1,
      name: "Concert Ticket",
      price: 50,
      quantity: 10,
      description: "A great concert ticket",
      salePeriod: [
        moment().toISOString(),
        moment().add(1, "month").toISOString(),
      ],
      validPeriod: [
        moment().toISOString(),
        moment().add(1, "month").toISOString(),
      ],
      minPurchase: 1,
      maxPurchase: 10,
    },
  ]);

  const transformTickets = (tickets:any) => {
    return tickets.map((ticket: any) => ({
      title: ticket.name,
      ticket_type_id: "668458900c4a7b1d8494880a",
      description: ticket.description,
      qty: ticket.quantity,
      price: ticket.price,
      sale_period: true,
      sale_period_date_time: {
        start: ticket.salePeriod[0],
        end: ticket.salePeriod[1],
      },
      valid_from: true,
      valid_from_date_time: {
        start: ticket.validPeriod[0],
        end: ticket.validPeriod[1],
      },
      limit_purchase: true,
      limit_purchase_qty: {
        min: ticket.minPurchase,
        max: ticket.maxPurchase,
      },
    }));
  };

  const onSubmitAllData = async() => {
   const formData = new FormData();
   formData.append("title", formValues.title);
   formData.append("event_start_date_time", formValues.event_start_date_time);
   formData.append("event_end_date_time", formValues.event_end_date_time);
   formData.append("venue_name", formValues.venue_name);
   formData.append("address", formValues.address);
   formData.append("category_id", formValues.category_id);
   formData.append("description", formValues.description);
   if (formValues.event_phone == undefined){
    formData.append("event_email", formValues.event_email);
    formData.append("is_phone_selected", "false");
   }else{
    formData.append("iso_code", "BD");
    formData.append("phone", formValues.event_phone);
    formData.append("is_phone_selected", "true");
   } 
   formData.append("event_image_url", img == null ? "" : img.uid);
   

  try {
    const resultOfEventCreate = await postEvent(formData);

    if (resultOfEventCreate?.data?.data?._id){
       const resultOfTicketsCreate = await createTickets({
         event_id: resultOfEventCreate?.data?.data?._id,
         tickets: transformTickets(tickets),
       });
       if (resultOfTicketsCreate?.data?.is_success){
        message.success("Event Created successfully!");
        router.push("/explore");
       }
         console.log(
           "ticekts posted successfully:",
           resultOfTicketsCreate?.data?.is_success
         );
    }
     
    console.log("Event posted successfully:", resultOfEventCreate?.data?.data?._id);
    
  } catch (error) {
    console.error("Failed to post event:", error);
  }
  };

  const cancelEventCreate = () =>{
    activeComponents();
  }

  
  const updateTicket = (updatedTicket: TicketType) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === updatedTicket.id ? updatedTicket : ticket
      )
    );
  };

  const addTicket = (newTicket: TicketType) => {
    newTicket.id = tickets.length + 1;
    setTickets([...tickets, newTicket]);
  };

  const handleFormChange = (changedValues: any, allValues: any) => {
    setFormValues({ ...allValues, description: editorValue });
  };

  const validatePhoneNumber = (_: any, value: string) => {
    const phonePattern = /^[0-9]{10}$/;
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

   const handleChange = (info: any) => {
     if (info.file.status === "uploading") {
       setImg(info.file.originFileObj);
       const url = URL.createObjectURL(info.file.originFileObj);
       setBackgroundImage(url);
       message.success(`${info.file.name} file uploaded successfully`);
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
    <div className="cell-ticket-container">
      {data !== null && (
        <div className="cell-ticket-inner">
          <div className="tickets-btn-container">
            <div className="create-cancel-btn btn2">
              <Button
                onClick={cancelEventCreate}
                icon={<CloseOutlined />}
                className="custom-btn"
              >
                Exit Event Creation
              </Button>

              <Button
                style={{ width: "200px" }}
                onClick={onSubmitAllData}
                className="custom-btn sub-btn"
              >
                Create Event
              </Button>
            </div>
          </div>
          <div className="main-container">
            <Row>
              <Col span={12}>
                <div className="form-cotainer">
                  <Form
                    form={form}
                    layout="vertical"
                    onValuesChange={handleFormChange}
                  >
                    <Form.Item
                      name="title"
                      rules={[
                        {
                          required: true,
                          message: "Please input the event name!",
                        },
                      ]}
                    >
                      <Input
                        className="input-field-event-create"
                        placeholder="Enter event name"
                      />
                    </Form.Item>

                    {/* start date & end date  */}
                    <Row>
                      <Col span={12}>
                        <Form.Item
                          className="common-class common-classOne"
                          name="event_start_date_time"
                          rules={[
                            {
                              required: true,
                              message: "Please select the start time!",
                            },
                          ]}
                        >
                          <DatePicker
                            className="input-field-event-create"
                            style={{ width: "100%" }}
                            showTime
                            format="YYYY-MM-DD HH:mm:ss"
                          />
                        </Form.Item>
                      </Col>

                      <Col span={12}>
                        <Form.Item
                          className="common-class common-classTwo"
                          name="event_end_date_time"
                          rules={[
                            {
                              required: true,
                              message: "Please select the end time!",
                            },
                          ]}
                        >
                          <DatePicker
                            className="input-field-event-create"
                            style={{ width: "100%" }}
                            showTime
                            format="YYYY-MM-DD HH:mm:ss"
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item
                      className="common-class"
                      name="venue_name"
                      rules={[
                        {
                          required: true,
                          message: "Please input the venue name!",
                        },
                      ]}
                    >
                      <Input
                        className="input-field-event-create"
                        placeholder="Enter venue name"
                      />
                    </Form.Item>

                    <Form.Item
                      className="common-class"
                      name="address"
                      rules={[
                        {
                          required: true,
                          message: "Please input the address!",
                        },
                      ]}
                    >
                      <Input
                        className="input-field-event-create"
                        placeholder="Enter address"
                      />
                    </Form.Item>

                    <Form.Item
                      className="common-class"
                      name="category_id"
                      rules={[
                        {
                          required: true,
                          message: "Please select a category!",
                        },
                      ]}
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

                    <Form.Item
                      className="common-class"
                      name="description"
                      rules={[
                        {
                          required: true,
                          message: "Please input the description!",
                        },
                      ]}
                    >
                      <ReactQuill
                        value={editorValue}
                        onChange={setEditorValue}
                      />
                    </Form.Item>

                    <Form.Item className="common-class">
                      <Row justify="end">
                        <Col>
                          <Switch
                            style={{ border: "1px solid #ffbf00" }}
                            checkedChildren={<MailOutlined />}
                            checked={isPhone}
                            onChange={setIsPhone}
                          />
                        </Col>
                      </Row>
                    </Form.Item>

                    {!isPhone ? (
                      <Form.Item
                        className="common-class"
                        name="event_phone"
                        rules={[
                          {
                            required: true,
                            message: "Please input your phone number!",
                          },
                          { validator: validatePhoneNumber },
                        ]}
                      >
                        <Input
                          className="input-field-event-create"
                          placeholder="Enter phone number"
                        />
                      </Form.Item>
                    ) : (
                      <Form.Item
                        className="common-class"
                        name="event_email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email address!",
                          },
                          { validator: validateEmail },
                        ]}
                      >
                        <Input
                          className="input-field-event-create"
                          placeholder="Enter email address"
                        />
                      </Form.Item>
                    )}
                  </Form>
                </div>
              </Col>
              <Col span={12}>
                <div className="sell-tickets-side-bg">
                  <Image
                    className="right-img-property"
                    src={backgroundImage}
                    alt="Event image"
                    // layout="responsive"
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
              </Col>
            </Row>
          </div>

          {/* tickets container  */}
          <div className="tickets-container-components">
            <Tickets
              tickets={tickets}
              addTicket={addTicket}
              updateTicket={updateTicket}
            ></Tickets>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellTickets;
