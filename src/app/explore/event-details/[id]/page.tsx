"use client";
import EventDetailsHero from "@/app/components/resuable-component/EventDetailsHero";
import TicktesSell from "@/app/components/resuable-component/TicktesSell";
import FooterSection from "@/app/components/share-component/FooterSection";
import Loading from "@/app/loading";
import { useGetEventDetailsQuery } from "@/redux/api/ticketsApi";
import {
  initializeCart,
  removeTicket,
  updateTicketQuantity,
} from "@/redux/slice/cartSlice";
import { RootState } from "@/redux/store";
import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, List, message, Row, Typography } from "antd";
import Modal from "antd/es/modal/Modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import imgSrc from "./../../../../../public/party-2.png";
import "./../eventDetails.css";

const { Text } = Typography;

function EventDetails({ params }: { params: { id: string } }) {
  const { data, error, isLoading } = useGetEventDetailsQuery(params?.id);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cart");
      if (cart) {
        dispatch(initializeCart(JSON.parse(cart)));
      }
    }
  }, [dispatch]);

  const tickets = useSelector((state: RootState) => state.cart.tickets);

  const totalItems = tickets.reduce(
    (total, ticket) => total + ticket.quantity,
    0
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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

  if (isLoading) {
    return <Loading></Loading>;
  }

  const paymentPage = () =>{
    router.push("/payment");
  }

  console.log(data?.data);
  

  return (
    <>
      {data?.data && (
        <div className="event-details-page">
          <div className="hero-section-container">
            <div className="blur">
              <EventDetailsHero
                companyName={`${data?.data?.created_by.first_name} ${data?.data?.created_by.last_name}`}
                isAuthorized={true}
                eventTitle={data?.data?.title}
                place={data?.data?.venue_name}
                startTime={data?.data?.event_start_date_time}
                endTime = {data?.data?.event_end_date_time}
                location={data?.data?.address}
                details={data?.data?.description}
                imageUrl={data?.data?.event_image_url ?`https://link.storjshare.io/raw/jw2ydrl6k3ff65py2xpvvgm3qseq/${data?.data?.event_image_url}` :imgSrc}
                imageAlt="Event"
              ></EventDetailsHero>
            </div>
          </div>

          <div className="tickets-container">
            <div className="">
              <div className="tickets">
                <h2>Available Tickets</h2>
                <hr />
                <div className="tickets-lists">
                  <Row gutter={[30, 30]} justify="center">
                    {data?.data?.tickets.map((tickets: any, index: number) => (
                      <Col key={index} xs={24} sm={24} md={24} lg={12} xxl={8}>
                        <TicktesSell
                          id={tickets?._id}
                          eventId={tickets?.event_id}
                          price={tickets.price}
                          qty={tickets.available_qty}
                          ticketTitle={tickets.title}
                          details={tickets?.description}
                          eventName={data?.data?.title}
                          limit_purchase_qty={tickets?.limit_purchase_qty}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </div>

            <div className="event-desc">
              <h2 style={{ paddingBottom: "8px", color: "white" }}>
                Description
              </h2>
              <div style={{ height: "1px", backgroundColor: "white" }}></div>
              <p 
                style={{ color: "white", paddingTop: "20px" }}
                dangerouslySetInnerHTML={{ __html: data?.data?.description }} 
              />
            </div>
          </div>

          {totalItems > 0 && (
            <div className="cart-section">
              <div onClick={() => showModal()} className="cart-container-icon">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 9.375C0 8.5462 0.32924 7.75134 0.915291 7.16529C1.50134 6.57924 2.2962 6.25 3.125 6.25H12.5C13.1971 6.25019 13.8741 6.48344 14.4233 6.91265C14.9726 7.34187 15.3626 7.9424 15.5312 8.61875L18.0625 18.75H90.625C91.0839 18.7504 91.537 18.8519 91.9522 19.0472C92.3674 19.2425 92.7345 19.5268 93.0275 19.88C93.3204 20.2332 93.5319 20.6466 93.6471 21.0907C93.7622 21.5349 93.7782 21.999 93.6938 22.45L84.3188 72.45C84.1847 73.1661 83.8047 73.8129 83.2443 74.2785C82.684 74.7441 81.9785 74.9993 81.25 75H25C24.2715 74.9993 23.566 74.7441 23.0057 74.2785C22.4453 73.8129 22.0653 73.1661 21.9313 72.45L12.5625 22.5438L10.0625 12.5H3.125C2.2962 12.5 1.50134 12.1708 0.915291 11.5847C0.32924 10.9987 0 10.2038 0 9.375ZM19.3875 25L27.5937 68.75H78.6563L86.8625 25H19.3875ZM31.25 75C27.9348 75 24.7554 76.317 22.4112 78.6612C20.067 81.0054 18.75 84.1848 18.75 87.5C18.75 90.8152 20.067 93.9946 22.4112 96.3388C24.7554 98.683 27.9348 100 31.25 100C34.5652 100 37.7446 98.683 40.0888 96.3388C42.433 93.9946 43.75 90.8152 43.75 87.5C43.75 84.1848 42.433 81.0054 40.0888 78.6612C37.7446 76.317 34.5652 75 31.25 75ZM75 75C71.6848 75 68.5054 76.317 66.1612 78.6612C63.817 81.0054 62.5 84.1848 62.5 87.5C62.5 90.8152 63.817 93.9946 66.1612 96.3388C68.5054 98.683 71.6848 100 75 100C78.3152 100 81.4946 98.683 83.8388 96.3388C86.183 93.9946 87.5 90.8152 87.5 87.5C87.5 84.1848 86.183 81.0054 83.8388 78.6612C81.4946 76.317 78.3152 75 75 75ZM31.25 81.25C32.9076 81.25 34.4973 81.9085 35.6694 83.0806C36.8415 84.2527 37.5 85.8424 37.5 87.5C37.5 89.1576 36.8415 90.7473 35.6694 91.9194C34.4973 93.0915 32.9076 93.75 31.25 93.75C29.5924 93.75 28.0027 93.0915 26.8306 91.9194C25.6585 90.7473 25 89.1576 25 87.5C25 85.8424 25.6585 84.2527 26.8306 83.0806C28.0027 81.9085 29.5924 81.25 31.25 81.25ZM75 81.25C76.6576 81.25 78.2473 81.9085 79.4194 83.0806C80.5915 84.2527 81.25 85.8424 81.25 87.5C81.25 89.1576 80.5915 90.7473 79.4194 91.9194C78.2473 93.0915 76.6576 93.75 75 93.75C73.3424 93.75 71.7527 93.0915 70.5806 91.9194C69.4085 90.7473 68.75 89.1576 68.75 87.5C68.75 85.8424 69.4085 84.2527 70.5806 83.0806C71.7527 81.9085 73.3424 81.25 75 81.25Z"
                    fill="black"
                  />
                </svg>
                <span className="tickets-number">{totalItems}</span>
              </div>
            </div>
          )}

          <Modal
            title="Cart"
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            centered
            className="modal-container"
          >
            <List
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
                    <Text key={2} style={{ margin: "0 10px" }}>
                      {ticket.quantity}
                    </Text>,
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
                    title={`${ticket.eventName} - ${ticket.ticketTitle}`}
                    description={`Price: $${ticket.price} x ${
                      ticket.quantity
                    } = $${ticket.price * ticket.quantity}`}
                  />
                </List.Item>
              )}
            />

            <div className="payment-btn">
              {totalItems > 0 && (
                <Button onClick={() => paymentPage()} className="custom-btn">
                  Process to Payment
                </Button>
              )}
            </div>
          </Modal>
        </div>
      )}

      <FooterSection></FooterSection>
    </>
  );
}

export default EventDetails;
