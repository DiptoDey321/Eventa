import { EditModalProps, TicketType } from "@/types/ticketsInterfece";
import { Form, Input, InputNumber, DatePicker, Button, Row, Col } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";

const { RangePicker } = DatePicker;

const TicketsAddEditModal: React.FC<EditModalProps> = ({
  ticket,
  updateTicket,
  addTicket,
  closeModal,
  isEditing,
}) => {
   const [form] = Form.useForm();
   const [resetTrigger, setResetTrigger] = useState<number>(0);

  const onFinish = (values: any) => {
    const newTicket = {
      ...values,
      salePeriod: values.salePeriod.map((date: moment.Moment) =>
        date.toISOString()
      ),
      validPeriod: values.validPeriod.map((date: moment.Moment) =>
        date.toISOString()
      ),
    };
    if (isEditing) {
      updateTicket({ ...ticket, ...newTicket });
    } else {
      addTicket(newTicket as TicketType);
    }
    closeModal();
     form.resetFields();
     console.log("Calling after reset ");
     
    setResetTrigger(resetTrigger+1);
  };

  useEffect(() => {
    if (ticket) {
      console.log("Calling from there");

      form.setFieldsValue({
        name: ticket.name,
        price: ticket.price,
        description: ticket.description,
        quantity: ticket.quantity,
        salePeriod: [
          moment(ticket.salePeriod[0]),
          moment(ticket.salePeriod[1]),
        ],
        validPeriod: [
          moment(ticket.validPeriod[0]),
          moment(ticket.validPeriod[1]),
        ],
        minPurchase: ticket.minPurchase,
        maxPurchase: ticket.maxPurchase,
      });
    } else {
      console.log("calling from there !!!!");
      form.resetFields();
    }
  }, [ticket, form, resetTrigger]);

  const validatePurchase = (_: any, value: any) => {
    const minPurchase = form.getFieldValue("minPurchase");
    const maxPurchase = form.getFieldValue("maxPurchase");

    if (
      minPurchase !== undefined &&
      maxPurchase !== undefined &&
      minPurchase > maxPurchase
    ) {
      return Promise.reject(
        new Error("Max > Min!")
      );
    }
    return Promise.resolve();
  };

  return (
    <div className="edit-add-modal-container">
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Ticket Name"
          rules={[{ required: true, message: "Please enter the ticket name" }]}
        >
          <Input className="input-field-login" />
        </Form.Item>

        <Row>
          <Col span={12}>
            <Form.Item
              name="price"
              label="Price"
              className="common-style label-row price common-right"
              rules={[
                { required: true, message: "Please enter the ticket price" },
              ]}
            >
              <InputNumber
                className="input-field-login"
                min={0}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="quantity"
              label="Quantity"
              className="common-style label-row quantity common-left"
              rules={[
                { required: true, message: "Please enter the ticket quantity" },
              ]}
            >
              <InputNumber
                className="input-field-login"
                min={0}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="description"
          label="Description"
          className="common-style"
        >
          <Input.TextArea className="input-field-login" />
        </Form.Item>

        <Form.Item
          name="salePeriod"
          label="Sale Period"
          className="common-style label-row period"
          rules={[{ required: true, message: "Please select the sale period" }]}
        >
          <RangePicker
            className="input-field-login"
            style={{ width: "100%" }}
            showTime
          />
        </Form.Item>
        <Form.Item
          name="validPeriod"
          label="Valid Period"
          className="common-style label-row period"
          rules={[
            { required: true, message: "Please select the valid period" },
          ]}
        >
          <RangePicker
            className="input-field-login"
            style={{ width: "100%" }}
            showTime
          />
        </Form.Item>

        <Row>
          <Col span={12}>
            <Form.Item
              name="minPurchase"
              label="Minimum Purchase"
              className="common-style label-row purchase common-right"
              rules={[
                {
                  required: true,
                  message: "Please enter the minimum purchase",
                },
                { validator: validatePurchase },
              ]}
            >
              <InputNumber
                className="input-field-login"
                min={0}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="maxPurchase"
              label="Maximum Purchase"
              className="common-style label-row purchase common-left"
              rules={[
                {
                  required: true,
                  message: "Please enter the maximum purchase",
                },
                { validator: validatePurchase },
              ]}
            >
              <InputNumber
                className="input-field-login"
                min={0}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item className="common-style">
          <Row justify="end">
            <Col>
              <Button
                className="modal-custom-btn"
                type="primary"
                htmlType="submit"
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TicketsAddEditModal;
