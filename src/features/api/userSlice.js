import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut, userRegistration } from "../auth/authSlice";

export const userSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    // Register User Mutation
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "auth/register",
        method: "POST",
        body: userData,
        headers: { "Content-Type": "application/json" },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
            const result = await queryFulfilled;
            dispatch(userRegistration({
                token: result.data.activationToken,
            }));
        } catch (error) {
            console.log(error);
        }
    }
    }),
    // Activate User Mutation
    activateUser: builder.mutation({
      query: (activationData) => ({
        url: "auth/activate-user",
        method: "POST",
        body: activationData,
        headers: { "Content-Type": "application/json" },
      }),
    }),
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "auth/login",
        method: "POST",
        body: loginData,
        headers: { "Content-Type": "application/json" },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
            const result = await queryFulfilled;
            dispatch(userLoggedIn({
                accessToken: result.data.accessToken,
                user: result.data.user,
            }));
        } catch (error) {
            console.log(error);
        }
    }
    }),
    loadUser:builder.query({
        query: () => ({
            url: "auth/me",
            method: "GET",
        }),
        async onQueryStarted(arg, { queryFulfilled, dispatch }) {
            try {
                const result = await queryFulfilled;
                dispatch(userLoggedIn({
                    accessToken: result.data.accessToken,
                    
                    user: result.data.user,
                    
                }));
            } catch (error) {
                console.log(error);
            }
        }
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "auth/logout",
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }),
      async onQueryStarted(arg, { dispatch }) {
        try {
            dispatch(userLoggedOut());
        } catch (error) {
            console.log(error);
        }
    }
    }),
    refreshToken: builder.mutation({
      query: () => ({
        url: "auth/refresh-token",
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }),
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "auth/all-user",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
    }),
    updateUser: builder.mutation({
      query: (userDetails) => ({
        url: 'auth/update', 
        method: 'PUT',
        body: userDetails, 
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useActivateUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useRefreshTokenMutation,
  useLazyLoadUserQuery,
  useGetAllUsersQuery,
  useUpdateUserMutation
} = userSlice;
