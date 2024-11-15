"use client";
import { useCreateTicketsMutation, useGetEventCategoryQuery, usePostEventMutation } from "@/redux/api/ticketsApi";
import { TicketType } from "@/types/ticketsInterfece";
import { CloseOutlined, MailOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Switch,
  Upload,
  message,
} from "antd";
import dayjs from "dayjs";
import dynamic from "next/dynamic";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import initialBackground from '../../../../../public/selltickets-sidebg.webp';
import "./createEvent.css";
import Tickets from "./Tickets";
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
  const [img, setImg] = useState<File | null>(null);

  const generateRandomString = (length: number) => Array.from({ length }, () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * 62))).join('');

  
  const [tickets, setTickets] = useState<TicketType[]>([
    {
      id:  generateRandomString(8),
      name: "Concert Ticket",
      price: 50,
      quantity: 10,
      description: "A great concert ticket",
      salePeriod: [
        dayjs(),                         
        dayjs().add(1, 'month'),          
      ],
      validPeriod: [
        dayjs(),                         
        dayjs().add(1, 'month'),         
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
        start: ticket.salePeriod[0].$d,
        end: ticket.salePeriod[1].$d,
      },
      valid_from: true,
      valid_from_date_time: {
        start: ticket.validPeriod[0].$d,
        end: ticket.validPeriod[1].$d,
      },
      limit_purchase: true,
      limit_purchase_qty: {
        min: ticket.minPurchase,
        max: ticket.maxPurchase,
      },
    }));
  };
  
  const onSubmitAllData = async () => {

    if(tickets?.length == 0){
      message.error("Oops ! Your forget to add tickets")
      return;
    }

    try {
      const validFields = await form.validateFields();
      
      const formData = new FormData();
      formData.append("title", validFields.title);
      formData.append("event_start_date_time", validFields.event_start_date_time);
      formData.append("event_end_date_time", validFields.event_end_date_time);
      formData.append("venue_name", validFields.venue_name);
      formData.append("address", validFields.address);
      formData.append("category_id", validFields.category_id);
      formData.append("description", validFields.description);
      if (validFields.event_phone) {
        formData.append("iso_code", "BD");
        formData.append("phone", validFields.event_phone);
        formData.append("is_phone_selected", "true");
      } else {
        formData.append("event_email", validFields.event_email);
        formData.append("is_phone_selected", "false");
      }
      if (img) {
        formData.append("event_image_url", img);
      } else {
        formData.append("event_image_url", "");
      }
      const resultOfEventCreate = await postEvent(formData);

      if (resultOfEventCreate?.data?.data?._id) {
        const resultOfTicketsCreate = await createTickets({
          event_id: resultOfEventCreate?.data?.data?._id,
          tickets: transformTickets(tickets),
        });
        if (resultOfTicketsCreate?.data?.is_success) {
          message.success("Event Created successfully!");
          window.location.href = "/explore"
        }
      } else {
        message.error("Please fill required field");
      }
    } catch (error) {
      console.error("Failed to post event:", error);
    }
  };

  const cancelEventCreate = () =>{
    router.push("/");
  }

  const updateTicket = (updatedTicket: TicketType) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.id === updatedTicket.id ? updatedTicket : ticket
      )
    );
  };

  const addTicket = (newTicket: Omit<TicketType, 'id'>) => {
    const newTicketWithId: TicketType = {
      ...newTicket,
      id: generateRandomString(8) // Generate a unique random string for the ID
    };
    setTickets([...tickets, newTicketWithId]);
  };

  const deleteTicket = (ticketId: number | string) => {
    const updatedTickets = tickets.filter((ticket) => {
      return String(ticket.id) !== String(ticketId);
    });
    setTickets(updatedTickets);
  };

  const handleFormChange = (changedValues: any, allValues: any) => {
    setFormValues({ ...allValues, description: editorValue });
  };

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
                Exit Creation
              </Button>

              <Button
                
                onClick={onSubmitAllData}
                className="custom-btn sub-btn"
              >
                Create Event
              </Button>
            </div>
          </div>

          <div className="main-container">
            <Row gutter={[32,32]}>
              <Col xs={24} sm={24} md={12} lg={12}>
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
                            placeholder="Enter Start Date"
                          />
                        </Form.Item>
                      </Col>

                      <Col span={12}>
                        <Form.Item
                          className="common-class common-classTwo"
                          name="event_end_date_time"
                          dependencies={['event_start_date_time']}
                          rules={[
                            {
                              required: true,
                              message: "Please select the end time!",
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                const startDate = getFieldValue('event_start_date_time');
                                if (!value || !startDate || value.isAfter(startDate)) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(new Error('End date must be later than start date!'));
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

              <Col xs={24} sm={24} md={12} lg={12}>
                <div className="sell-tickets-side-bg">
                  <Image
                    className="right-img-property main-ticket-img"
                    src={backgroundImage}
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
              </Col>
            </Row>
          </div>

          <div className="tickets-container-components">
            <Tickets
              tickets={tickets}
              addTicket={addTicket}
              updateTicket={updateTicket}
              deleteTicket={deleteTicket}
            ></Tickets>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellTickets;
