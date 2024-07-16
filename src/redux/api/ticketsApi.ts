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
      }),
      invalidatesTags: ["event"],
    }),
  }),
});

export const {
  usePostEventMutation
} = ticketsApi;
