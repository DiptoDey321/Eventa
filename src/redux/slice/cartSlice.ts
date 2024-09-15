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
  limit_purchase_qty: {
    min: number; // minimum quantity allowed per purchase
    max: number; // maximum quantity allowed per purchase
  };
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
      const { limit_purchase_qty } = incomingTicket;
      const existingTicket = state.tickets.find(
        (ticket) =>
          ticket.id === incomingTicket.id &&
          ticket.eventId === incomingTicket.eventId
      );
    
      if (existingTicket) {
        // Calculate new quantity
        const newQuantity = existingTicket.quantity + incomingTicket.quantity;
    
        // Check if new quantity exceeds the purchase limits
        if (newQuantity > limit_purchase_qty.max) {
          message.warning(`Cannot add more than ${limit_purchase_qty.max} tickets.`);
        } else if (newQuantity < limit_purchase_qty.min) {
          message.warning(`You must purchase at least ${limit_purchase_qty.min} tickets.`);
        } else if (newQuantity <= incomingTicket.qty) {
          existingTicket.quantity = newQuantity; // Update if within limits
        } else {
          message.warning(`Cannot add more than ${incomingTicket.qty} tickets in stock.`);
        }
      } else {
        // If ticket doesn't exist in cart, ensure quantity is valid
        if (incomingTicket.quantity > limit_purchase_qty.max) {
          message.warning(`Cannot add more than ${limit_purchase_qty.max} tickets.`);
        } else if (incomingTicket.quantity < limit_purchase_qty.min) {
          message.warning(`You must purchase at least ${limit_purchase_qty.min} tickets.`);
        } else if (incomingTicket.quantity <= incomingTicket.qty) {
          state.tickets.push(incomingTicket); // Add new ticket if within limits
        } else {
          message.warning(`Cannot add more than ${incomingTicket.qty} tickets in stock.`);
        }
      }
    
      // Save the cart state to localStorage
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
