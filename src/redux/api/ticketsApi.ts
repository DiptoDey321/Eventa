import { baseApi } from "./baseApi";

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

    getEvents: build.query({
      query: () => ({
        url: `/events/public`,
        method: "GET",
        requiresAuth: false,
      }),
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

    getEventDetails: build.query({
      query: (id) => ({
        url: `events/public/${id}`,
        method: "GET",
        requiresAuth: false,
      }),
    }),
  }),
});

export const {
  usePostEventMutation, useGetEventCategoryQuery, useCreateTicketsMutation, useGetEventsQuery, useGetEventDetailsQuery
} = ticketsApi;
