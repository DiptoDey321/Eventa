import { baseApi } from "./baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    payment: build.mutation({
      query: (userData) => ({
        url: `/orders`,
        method: "POST",
        data: userData,
        requiresAuth: true,
      }),
      invalidatesTags: ["payment"],
    }),

    getTickets: build.query({
      query: () => ({
        url: `/generated-tickets`,
        method: "GET",
        requiresAuth: true,
      }),
    }),
  }),
});

export const {usePaymentMutation, useGetTicketsQuery} = paymentApi;
