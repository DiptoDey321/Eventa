import { baseApi } from "./baseApi";

export const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    payment: build.mutation({
      query: (userData) => ({
        url: `/tickets`,
        method: "POST",
        data: userData,
        requiresAuth: true,
      }),
      invalidatesTags: ["payment"],
    }),
  }),
});

export const {usePaymentMutation} = paymentApi;
