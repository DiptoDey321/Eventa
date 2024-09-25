"use client";
import { useGetEventCategoryQuery, useUpdateEventMutation, useUpdateTicketsMutation } from "@/redux/api/ticketsApi";
import { TicketType } from "@/types/ticketsInterfece";
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
import Tickets from "../../create-components/Tickets";
import "./eventEdit.css";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
const { Option } = Select;

const generateRandomString = (length: number) => Array.from({ length }, () => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.charAt(Math.floor(Math.random() * 62))).join('');


interface Ticket {
  _id: string | undefined;
  title: string;
  description: string;
  qty: number;
  price: number;
  sale_period_date_time: {
    start: string;
    end: string;
  };
  valid_from_date_time: {
    start: string; 
    end: string;
  };
  limit_purchase_qty: {
    min: number;
    max: number;
  };
  newTickets ?: boolean;
}

interface TransformedTicket {
  id: string | undefined;
  name: string;
  price: number;
  quantity: number;
  description: string;
  salePeriod: [dayjs.Dayjs, dayjs.Dayjs];
  validPeriod: [dayjs.Dayjs, dayjs.Dayjs];
  minPurchase: number;
  maxPurchase: number;
}

type EventEditProps = {
  eventData: any;
  handleCloseModal: () => void;
  refetchEventDetails: () => void;
};

const EventEdit =  ({ eventData, handleCloseModal,refetchEventDetails  }: EventEditProps) => {
  const [form] = Form.useForm();
  const { data, error, isLoading } = useGetEventCategoryQuery(undefined);
  const [isPhone, setIsPhone] = useState(false);
  const [editorValue, setEditorValue] = useState(eventData?.description || "");
  const [formValues, setFormValues] = useState<any>({});
  const [img, setImg] = useState<File | null>(null);
  const [backgroundImage, setBackgroundImage] = useState<
    string | StaticImageData
  >(initialBackground);
  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [updateEvent] = useUpdateEventMutation();
  const [updateTickets] = useUpdateTicketsMutation();

  function transformTicketData(tickets: Ticket[]): TransformedTicket[] {
    return tickets.map((ticket) => ({
      id: ticket._id,
      name: ticket.title,
      price: ticket.price,
      quantity: ticket.qty,
      description: ticket.description,
      salePeriod: [
        dayjs(ticket.sale_period_date_time.start),
        dayjs(ticket.sale_period_date_time.end),
      ],
      validPeriod: [
        dayjs(ticket.valid_from_date_time.start),
        dayjs(ticket.valid_from_date_time.end),
      ],
      minPurchase: ticket.limit_purchase_qty.min,
      maxPurchase: ticket.limit_purchase_qty.max,
    }));
  }

  const transformTickets = (tickets:any) => {
    return tickets.map((ticket: any) => ({
      _id : ticket.newTickets ? undefined : ticket._id,
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
    if (eventData?.tickets?.length) {
      setTickets(transformTicketData(eventData.tickets));
    } else {
      setTickets([]);
    }
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
      id: generateRandomString(8) ,
      newTickets : true,
    };
    setTickets([...tickets, newTicketWithId]);
  };

  const deleteTicket = (ticketId: string) => {
    const updatedTickets = tickets.filter((ticket) => ticket.id !== ticketId);
    setTickets(updatedTickets);
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
      const resultOfEventCreate = await updateEvent({ id: eventData._id, data: formData });

      const transformedTickets =  transformTickets(tickets)
      if (resultOfEventCreate?.data?.data?._id && transformedTickets.length > 0 ) {
        
        const resultOfTicketsCreate = await updateTickets({
          id: eventData._id,
          ticketObj: {tickets : transformTickets(tickets)},
        }).unwrap();
        
        if (resultOfTicketsCreate?.is_success) {
          message.success("Event edited successfully successfully!");
          handleCloseModal()
          refetchEventDetails();
        }
      } else {
        message.error("Please fill required field");
      }
    } catch (error) {
      console.error("Failed to post event:", error);
    }
  };

  

  return (
    <div>
      <div className="modal-height-define">
        <Form form={form} layout="vertical" onValuesChange={handleFormChange}>
          <Row>
            <Col xs={24} sm={12} md={12}>
              <Form.Item
                name="title"
                rules={[
                  { required: true, message: "Please input the event name!" },
                ]}
                label="Event name"
              >
                <Input
                  className="input-field-event-create"
                  placeholder="Enter event name"
                />
              </Form.Item>

              <Form.Item
                className="common-class-edit-edit "
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
                className="common-class-edit "
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
                className="common-class-edit"
              >
                <Input
                  className="input-field-event-create"
                  placeholder="Enter venue name"
                />
              </Form.Item>

              {/* Address */}
              <Form.Item
                name="address"
                className="common-class-edit"
                label="Address"
                rules={[{ required: true, message: "Please input the address!" }]}
              >
                <Input
                  className="input-field-event-create"
                  placeholder="Enter address"
                />
              </Form.Item>
            </Col>

            <Col  xs={24} sm={12} md={12}>
              <Form.Item name="basic-style2-edit">
                <div className="event_image_url">
                  <div className="event-tickets-on-edit">
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

          <Row>
            <Col  xs={24} sm={12} md={12}>
              {/* Description */}
              <Form.Item
                className="common-class-edit desc"
                label="Descriptions"
                name="description"
                rules={[
                  { required: true, message: "Please input the description!" },
                ]}
              >
                <ReactQuill value={editorValue} onChange={setEditorValue} />
              </Form.Item>
            </Col>

            <Col  xs={24} sm={12} md={12}>
              {/* Category */}
              <Form.Item
                className="common-class-edit basic-style2-edit"
                label="Category"
                name="category_id"
                rules={[{ required: true, message: "Please select a category!" }]}
                style={{ paddingTop: "20px" }}
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
                  className="basic-style2-edit"
                  label="Phone Number"
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
                  name="event_email"
                  label="Email"
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
            </Col>
          </Row>
        </Form>

        <div style={{paddingTop: '20px'}} className="tickets-container-components">
          {tickets.length > 0 && (
            <Tickets
              tickets={tickets}
              addTicket={addTicket}
              updateTicket={updateTicket}
              deleteTicket={deleteTicket}
              userEditTicket={true}
            ></Tickets>
          )}
        </div>
      </div>

      <div style={{paddingTop:'20px', display:'flex',justifyContent: 'flex-end'}}>
        <Button onClick={onSubmitAllData}>Save Event</Button>
      </div>
    </div>
  );
};

export default EventEdit;
