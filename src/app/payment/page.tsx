
"use client";
import { usePaymentMutation } from "@/redux/api/paymentApi";
import { initializeCart, removeTicket, updateTicketQuantity } from "@/redux/slice/cartSlice";
import { RootState } from "@/redux/store";
import { DeleteOutlined, MinusOutlined, PlusOutlined, RollbackOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, List, message, Radio, Row } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./payment.css";

const Payment = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [payment] = usePaymentMutation();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cart");
      if (cart) {
        dispatch(initializeCart(JSON.parse(cart)));
      }
    }
  }, [dispatch]);

  const increaseQuantity = (id: string, eventId: string, qty: number, limit_purchase_qty: { min: number; max: number }) => {
    const ticket = tickets.find((ticket) => ticket.id === id && ticket.eventId === eventId);
    if (ticket) {
      if (ticket.quantity < limit_purchase_qty.max && ticket.quantity < qty) {
        dispatch(
          updateTicketQuantity({ id, eventId, quantity: ticket.quantity + 1, qty, limit_purchase_qty })
        );
      } else {
        message.warning(`Cannot add more than ${limit_purchase_qty.max} tickets.`);
      }
    }
  };

  const decreaseQuantity = (id: string, eventId: string, qty: number, limit_purchase_qty: { min: number; max: number }) => {
    const ticket = tickets.find((ticket) => ticket.id === id && ticket.eventId === eventId);
    if (ticket && ticket.quantity > limit_purchase_qty.min) {
      dispatch(
        updateTicketQuantity({ id, eventId, quantity: ticket.quantity - 1, qty, limit_purchase_qty })
      );
    } else if (ticket && ticket.quantity <= limit_purchase_qty.min) {
      message.warning(`You cannot purchase fewer than ${limit_purchase_qty.min} tickets.`);
    }
  };

  const handleRemoveTicket = (id: string, eventId: string) => {
    dispatch(removeTicket({ id, eventId }));
  };

  const calculateTotalAmount = (
    tickets: { price: number; quantity: number }[]
  ) => {
    return tickets.reduce(
      (total, ticket) => total + ticket.price * ticket.quantity,
      0
    );
  };

  function transformData(input:any) {
    return Object.values(
      input.reduce((acc:any, ticket:any) => {
        if (!acc[ticket.eventId]) {
          acc[ticket.eventId] = {
            event_id: ticket.eventId,
            tickets: [],
          };
        }

        const existingTicket = acc[ticket.eventId].tickets.find(
          (t:any) => t.ticket_id === ticket.id
        );

        if (existingTicket) {
          existingTicket.qty += ticket.quantity;
        } else {
          acc[ticket.eventId].tickets.push({
            ticket_id: ticket.id,
            qty: ticket.quantity,
          });
        }

        return acc;
      }, {})
    );
  }

  const handleSubmit = async(values: any) => {

    if(transformData(tickets).length == 0){
      message.error("Opps ! You Don't Have Any Tickets")
      return
    }
    const data = {
      payment_method_id: "66ae060cd0dc1b0211a355c9",
      address: values.address,
      cart: transformData(tickets),
    };
    const res = await payment(data);
    if(res.error){
      message.error("Insufficients tickets, Please remove tickets and add again!")
    }
    if (res?.data?.is_success){
      router.push(res?.data?.data);
    }
  };

  const tickets = useSelector((state: RootState) => state.cart.tickets);
  const totalAmount = calculateTotalAmount(tickets);
  return (
    <div className="payment-page">
      <div className="payment-inner">
        <div className="">
          <div className=""></div>
          <div className="items-userdetails">
            <Row align="middle">
              <Col span={12}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3 style={{ padding: "20px 10px 10px 0px" }}>
                    Your Tickets{" "}
                  </h3>
                  <span style={{ padding: "10px 0px 0px 0px" }}>
                    <Button href="/">
                      {" "}
                      <RollbackOutlined />
                      Home
                    </Button>
                  </span>
                </div>
                <hr />
                <List
                  style={{
                    background: "white",
                    width: "100%",
                    paddingTop: "20px",
                  }}
                  dataSource={tickets}
                  renderItem={(ticket) => (
                    <List.Item
                      actions={[
                        <Button
                          className="count-btn"
                          key={1}
                          icon={<MinusOutlined />}
                          onClick={() =>
                            decreaseQuantity(ticket.id, ticket.eventId , ticket.qty , ticket.limit_purchase_qty)
                          }
                        />,
                        <span key={2} style={{ margin: "0 10px" }}>
                          {ticket.quantity}
                        </span>,
                        <Button
                          className="count-btn"
                          key={3}
                          icon={<PlusOutlined />}
                          onClick={() =>
                            increaseQuantity(ticket.id, ticket.eventId ,ticket.qty, ticket.limit_purchase_qty)
                          }
                        />,
                        <Button
                          key={4}
                          type="primary"
                          danger
                          icon={<DeleteOutlined />}
                          onClick={() =>
                            handleRemoveTicket(ticket.id, ticket.eventId)
                          }
                        />,
                      ]}
                    >
                      <List.Item.Meta
                        title={`${ticket.eventName} - Ticket ${ticket.id}`}
                        description={`Price: $${ticket.price} x ${
                          ticket.quantity
                        } = $${ticket.price * ticket.quantity}`}
                      />
                    </List.Item>
                  )}
                />

                <div
                  style={{
                    marginTop: "20px",
                    color: "#fff",
                    padding: "20px 0px 20px 0px",
                  }}
                >
                  <span
                    style={{
                      color: "black",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Total Amount:{" "}
                    <span style={{ color: "green" }}>
                      {" "}
                      ${totalAmount.toFixed(2)}{" "}
                    </span>
                  </span>
                </div>
              </Col>
              <Col span={12}>
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "40px",
                    borderRadius: "0px 20px 20px 0px",
                  }}
                  className=""
                >
                  <Form
                    initialValues={{ paymentMethod: "amarpay" }}
                    layout="vertical"
                    onFinish={handleSubmit}
                  >

                    <Form.Item
                      className="common-style"
                      name="address"
                      label={
                        <span style={{ color: "#fff" }}>Billing Address</span>
                      }
                      rules={[
                        {
                          required: true,
                          message: "Please enter your address",
                        },
                      ]}
                    >
                      <Input.TextArea
                        placeholder="Enter your address"
                        rows={4}
                      />
                    </Form.Item>

                    <Form.Item
                      name="paymentMethod"
                      className="common-style"
                      label={
                        <span style={{ color: "#fff" }}>Payment Method</span>
                      }
                      rules={[
                        {
                          required: true,
                          message: "Please select a payment method",
                        },
                      ]}
                    >
                      <Radio.Group disabled>
                        <Radio value="amarpay">AmarPay</Radio>
                        <Radio value="bkash">bKash</Radio>
                      </Radio.Group>
                    </Form.Item>

                    <Form.Item>
                      <Button
                        className="common-style"
                        type="primary"
                        htmlType="submit"
                        block
                      >
                        Payment Now
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
