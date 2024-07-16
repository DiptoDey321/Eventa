import React from "react";
import { Card } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { TicketProps } from "@/types/ticketsInterfece";

const TicketCard: React.FC<TicketProps> = ({ ticket, showEditModal }) => {
  return (
    <Card
      className="ticket-card"
      title={<span className="ticket-title">{ticket.name}</span>}
      extra={<EditOutlined onClick={() => showEditModal(ticket)} />}
    >
      <p className="ticket-body">Price: ${ticket.price}</p>
      <p className="ticket-body">{ticket.description}</p>
    </Card>
  );
};

export default TicketCard;
