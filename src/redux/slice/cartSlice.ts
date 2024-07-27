import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Ticket {
  id: string;
  price: number;
  quantity: number;
  eventId: string;
  eventName: string;
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

      const existingTicket = state.tickets.find(
        (ticket) =>
          ticket.id === action.payload.id &&
          ticket.eventId === action.payload.eventId
      );
      if (existingTicket) {
        existingTicket.quantity += action.payload.quantity;
      } else {
        state.tickets.push(action.payload);
      }
      
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.tickets));
      }
    },

    updateTicketQuantity: (
      state,
      action: PayloadAction<{ id: string; eventId: string; quantity: number }>
    ) => {

      const ticket = state.tickets.find(
        (ticket) =>
          ticket.id === action.payload.id &&
          ticket.eventId === action.payload.eventId
      );
      if (ticket) {
        ticket.quantity = action.payload.quantity;
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
