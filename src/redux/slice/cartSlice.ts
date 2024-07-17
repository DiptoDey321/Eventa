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
    initializeCart: (state, action: PayloadAction<Ticket[]>) => {
      state.tickets = action.payload;
    },

    addTicket: (state, action: PayloadAction<Ticket>) => {
      const existingTicket = state.tickets.find(
        (ticket) => ticket.id === action.payload.id
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
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const ticket = state.tickets.find(
        (ticket) => ticket.id === action.payload.id
      );
      if (ticket) {
        ticket.quantity = action.payload.quantity;
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.tickets));
      }
    },

    removeTicket: (state, action: PayloadAction<number>) => {
      state.tickets = state.tickets.filter(
        (ticket) => ticket.id !== action.payload
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.tickets));
      }
    },
  },
});

export const { addTicket, updateTicketQuantity, removeTicket, initializeCart } =
  cartSlice.actions;

export default cartSlice.reducer;
