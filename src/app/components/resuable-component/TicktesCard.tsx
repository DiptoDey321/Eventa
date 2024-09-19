'use client';
import { TicketProps } from "@/types/ticketsInterfece";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const TicketCard: React.FC<TicketProps> = ({ ticket, showEditModal, deleteTicket }) => {
  
  return (
    <Card
      className="ticket-card"
      title={<span className="ticket-title">{ticket?.title ? ticket?.title : ticket?.name}</span>}
      extra={ <div>
        <EditOutlined onClick={() => showEditModal(ticket)} style={{ paddingRight: 16 }} />
        <DeleteOutlined onClick={() => ticket?.id && deleteTicket(ticket?.id)} />
      </div>}
    >
      <p className="ticket-body">Price: ${ticket.price}</p>
      <p className="ticket-body">{ticket.description}</p>
    </Card>
  );
};

export default TicketCard;
