import { baseApi } from "./baseApi";
const AUTH_URL = "/auth"
const REPORT_URL = "/reports";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
        requiresAuth: false,
      }),
      invalidatesTags: ["user"],
    }),

    userSignup: build.mutation({
      query: (signupData) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        data: signupData,
        requiresAuth: false,
      }),
      invalidatesTags: ["user"],
    }),

    sendOtp: build.mutation({
      query: (otpData) => ({
        url: `${AUTH_URL}/send-otp-sms`,
        method: "POST",
        data: otpData,
        requiresAuth: false,
      }),
      invalidatesTags: ["user"],
    }),

    sendForgetOtp: build.mutation({
      query: (otpData) => ({
        url: `${AUTH_URL}/forgot-password-send-otp`,
        method: "POST",
        data: otpData,
        requiresAuth: false,
      }),
      invalidatesTags: ["user"],
    }),

    getDashboardTotalCount: build.query<any, void>({
      query: () => ({
        url: `${REPORT_URL}/dashboard-total-count`,
        method: "GET",
      }),
      providesTags: ["DashboardTotalCount"],
    }),
  }),
});

export const { useUserLoginMutation, useUserSignupMutation, useSendOtpMutation ,useGetDashboardTotalCountQuery, useSendForgetOtpMutation} = authApi;
