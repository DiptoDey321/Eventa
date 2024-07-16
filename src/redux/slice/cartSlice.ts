import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Ticket {
  id: number;
  price: number;
  quantity: number;
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
    addTicket: (state, action: PayloadAction<Ticket>) => {
      const existingTicket = state.tickets.find(
        (ticket) => ticket.id === action.payload.id
      );
      if (existingTicket) {
        existingTicket.quantity += action.payload.quantity;
      } else {
        state.tickets.push(action.payload);
      }
    },

    updateTicketQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const ticket = state.tickets.find(
        (ticket) => ticket.id === action.payload.id
      );
      if (ticket) {
        ticket.quantity = action.payload.quantity;
      }
    },

    removeTicket: (state, action: PayloadAction<number>) => {
      state.tickets = state.tickets.filter(
        (ticket) => ticket.id !== action.payload
      );
    },
  },
});

export const { addTicket, updateTicketQuantity, removeTicket } = cartSlice.actions;

export default cartSlice.reducer;
