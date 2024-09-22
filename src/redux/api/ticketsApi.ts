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
        url: `/events/public/${id}`,
        method: "GET",
        requiresAuth: false,
      }),
    }),

    getEventForUser: build.query({
      query: (id) => ({
        url: `/events/${id}`,
        method: "GET",
        requiresAuth: true,
      }),
    }),

    updateEvent: build.mutation({
      query: ({ id, data }) => ({
        url: `/events/${id}`,
        method: "PUT",
        data, 
        contentType: "multipart/form-data", 
        requiresAuth: true,
      }),
      invalidatesTags: ["event", "eventUpdate"], 
    }),

    updateTickets: build.mutation({
      query: ({ id, ticketObj }) => {
        console.log(id);
        
        console.log("Ticket data being sent:", ticketObj); 
        return {
          url: `/tickets/event-tickets/${id}`,
          method: "PUT",
          data: ticketObj,
          requiresAuth: true,
        };
      },
      invalidatesTags: ["tickets","eventUpdate"],
    }),

    getEventsForUser: build.query({
      query: () => ({
        url: `/events?page=1&limit=100`,
        method: "GET",
        requiresAuth: true,
      }),
    }),
  }),
});

    // tickets/event-tickets


export const {
  usePostEventMutation, useGetEventCategoryQuery, useCreateTicketsMutation, useGetEventsQuery, useGetEventDetailsQuery, useGetEventsForUserQuery,useGetEventForUserQuery, useUpdateEventMutation, useUpdateTicketsMutation
} = ticketsApi;
