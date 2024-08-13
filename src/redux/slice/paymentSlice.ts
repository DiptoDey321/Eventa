import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state for the payment slice
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// Define the thunk for making the payment request
export const makePayment = createAsyncThunk(
  "payment/makePayment",
  async (paymentData: FormData, { rejectWithValue }) => {
    const sandboxUrl = "https://sandbox.aamarpay.com/index.php";
    try {
      const response = await axios.post(sandboxUrl, paymentData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// Create the payment slice
const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(makePayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(makePayment.rejected, (state:any, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default paymentSlice.reducer;
