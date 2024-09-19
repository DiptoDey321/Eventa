import { Dayjs } from "dayjs";

export interface TicketType {
  id: string | undefined;
  name: string;
  title ?: string
  price: number;
  quantity: number;
  description: string;
  salePeriod: [Dayjs, Dayjs];    // Updated to Dayjs objects
  validPeriod: [Dayjs, Dayjs];    // Updated to Dayjs objects
  minPurchase: number;
  maxPurchase: number;
  newTickets ?: boolean,
}

export interface TicketProps {
  ticket: TicketType;
  showEditModal: (ticket: TicketType) => void;
  deleteTicket: (ticketId: string) => void;
}

export interface TicketsExtraProps {
  tickets: TicketType[];
  addTicket: (ticket: TicketType) => void;
  updateTicket: (ticket: TicketType) => void;
  deleteTicket: (ticketId: string) => void;
  userEditTicket?:boolean
}

export interface EditModalProps {
  ticket: TicketType | null;
  updateTicket: (ticket: TicketType) => void;
  addTicket: (ticket: TicketType) => void;
  closeModal: () => void;
  isEditing: boolean;
}
