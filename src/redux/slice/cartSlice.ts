import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";

interface Ticket {
  id: string;
  price: number;
  quantity: number;
  eventId: string;
  eventName: string;
  ticketTitle: string;
  qty: number;
}

interface CartState {
  tickets: Ticket[];
}

const initialState: CartState = {
  tickets: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart: (state, action: PayloadAction<Ticket[]>) => {
      state.tickets = action.payload;
    },

    addTicket: (state, action: PayloadAction<Ticket>) => {
      const incomingTicket = action.payload;
      const existingTicket = state.tickets.find(
        (ticket) =>
          ticket.id === incomingTicket.id &&
          ticket.eventId === incomingTicket.eventId
      );

      if (existingTicket) {
        // Check if adding more tickets exceeds available quantity
        const newQuantity = existingTicket.quantity + incomingTicket.quantity;
        if (newQuantity <= incomingTicket.qty) {
          existingTicket.quantity = newQuantity;
        } else {
          // Show a notification to the user
         message.warning(`Cannot add more than ${incomingTicket.qty} tickets.`)
        }
      } else {
        if (incomingTicket.quantity <= incomingTicket.qty) {
          state.tickets.push(incomingTicket);
        } else {
          // Show a notification to the user
          message.warning(`Cannot add more than ${incomingTicket.qty} tickets.`)
          
        }
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.tickets));
      }
    },

    updateTicketQuantity: (
      state,
      action: PayloadAction<{ id: string; eventId: string; quantity: number; qty: number }>
    ) => {
      const { id, eventId, quantity, qty } = action.payload;
      const ticket = state.tickets.find(
        (ticket) =>
          ticket.id === id &&
          ticket.eventId === eventId
      );

      if (ticket) {
        // Update ticket quantity if it does not exceed available quantity
        if (quantity <= qty) {
          ticket.quantity = quantity;
        } else {
          // Show a notification to the user
          message.warning(`Cannot add more than ${qty} tickets.`)
        }
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.tickets));
      }
    },

    removeTicket: (
      state,
      action: PayloadAction<{ id: string; eventId: string }>
    ) => {
      state.tickets = state.tickets.filter(
        (ticket) =>
          !(
            ticket.id === action.payload.id &&
            ticket.eventId === action.payload.eventId
          )
      );
      console.log(state.tickets);
      
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.tickets));
      }
    },
  },
});

export const { addTicket, updateTicketQuantity, removeTicket, initializeCart } =
  cartSlice.actions;

export default cartSlice.reducer;
