import { TicketsExtraProps, TicketType } from "@/types/ticketsInterfece";
import { RiseOutlined } from "@ant-design/icons";
import { Button, Col, Modal, Row } from "antd";
import { useState } from "react";
import TicketsAddEditModal from "../../resuable-component/TicketsAddEditModal";
import TicketCard from "../../resuable-component/TicktesCard";
import "./createEvent.css";

const Tickets: React.FC<TicketsExtraProps> = ({
  tickets,
  addTicket,
  updateTicket,
  deleteTicket,
  userEditTicket
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentTicket, setCurrentTicket] = useState<TicketType | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const showAddModal = () => {
    setCurrentTicket(null);
    setIsEditing(false);
    setIsModalVisible(true);
  };

  const showEditModal = (ticket: TicketType) => {
    setCurrentTicket(ticket);
    setIsEditing(true);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentTicket(null);
  };
  

  return (
    <div>
      <div className="tickets-container">
        <div className="tickets-heading-container">
          <span>Tickets</span>
          <Button onClick={() => showAddModal()} icon={<RiseOutlined />}>
            Add Tickets
          </Button>
        </div>
        <hr />

        <div className="tickets-show-edit">
          <Row gutter={[20, 20]}>
            {tickets.map((ticket) => (
              <Col key={ticket.id} xs={24} sm={24} md={12}>
                <TicketCard ticket={ticket} showEditModal={showEditModal} deleteTicket={deleteTicket} />
              </Col>
            ))}
          </Row>

          <div>
            <Modal
              title={isEditing ? "Edit Ticket" : "Add Ticket"}
              visible={isModalVisible}
              footer={null}
              onCancel={handleCancel}
              centered
              className="modal-container"
            >
              <TicketsAddEditModal
                ticket={currentTicket}
                updateTicket={updateTicket}
                addTicket={addTicket}
                closeModal={handleCancel}
                isEditing={isEditing}
              />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets