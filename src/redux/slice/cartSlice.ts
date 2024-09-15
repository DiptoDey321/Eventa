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
        const newQuantity = existingTicket.quantity + incomingTicket.quantity;
        if (newQuantity > limit_purchase_qty.max) {
          message.warning(`Cannot add more than ${limit_purchase_qty.max} tickets.`);
        } else if (newQuantity < limit_purchase_qty.min) {
          message.warning(`You must purchase at least ${limit_purchase_qty.min} tickets.`);
        } else if (newQuantity <= incomingTicket.qty) {
          existingTicket.quantity = newQuantity; 
        } else {
          message.warning(`Cannot add more than ${incomingTicket.qty} tickets in stock.`);
        }
      } else {

        if (incomingTicket.quantity > limit_purchase_qty.max) {
          message.warning(`Cannot add more than ${limit_purchase_qty.max} tickets.`);
        } else if (incomingTicket.quantity < limit_purchase_qty.min) {
          message.warning(`You must purchase at least ${limit_purchase_qty.min} tickets.`);
        } else if (incomingTicket.quantity <= incomingTicket.qty) {
          state.tickets.push(incomingTicket); 
        } else {
          message.warning(`Cannot add more than ${incomingTicket.qty} tickets in stock.`);
        }
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.tickets));
      }
    },

    updateTicketQuantity: (
      state,
      action: PayloadAction<{ id: string; eventId: string; quantity: number; qty: number; limit_purchase_qty: { min: number; max: number } }>
    ) => {
      const { id, eventId, quantity, qty, limit_purchase_qty } = action.payload;
      const ticket = state.tickets.find(
        (ticket) =>
          ticket.id === id &&
          ticket.eventId === eventId
      );
    
      if (ticket) {
        if (quantity >= limit_purchase_qty.min && quantity <= limit_purchase_qty.max && quantity <= qty) {
          ticket.quantity = quantity;
        } else if (quantity > limit_purchase_qty.max) {
          message.warning(`Cannot add more than ${limit_purchase_qty.max} tickets.`);
        } else if (quantity < limit_purchase_qty.min) {
          message.warning(`You must purchase at least ${limit_purchase_qty.min} tickets.`);
        } else if (quantity > qty) {
          message.warning(`Cannot add more than ${qty} tickets in stock.`);
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
