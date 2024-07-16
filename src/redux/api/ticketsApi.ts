import { baseApi } from "./baseApi";
const AUTH_URL = "/auth";

export const ticketsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postEvent: build.mutation({
      query: (data) => ({
        url: `/events`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
        requiresAuth: true,
      }),
      invalidatesTags: ["event"],
    }),

    getEventCategory: build.query({
      query: () => ({
        url: `/event-categories`,
        method: "GET",
        requiresAuth: false,
      }),
    }),

    createTickets: build.mutation({
      query: (ticketsdata) => ({
        url: `/tickets`,
        method: "POST",
        data: ticketsdata,
        requiresAuth: true,
      }),
      invalidatesTags: ["tickets"],
    }),
  }),
});

export const {
  usePostEventMutation, useGetEventCategoryQuery, useCreateTicketsMutation
} = ticketsApi;
