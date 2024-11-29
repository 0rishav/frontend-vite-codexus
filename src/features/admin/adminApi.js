import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getInternshipRegistration: builder.query({
      query: () => ({
        url: "get-internship",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
    }),
    getProjectRegistration: builder.query({
      query: () => ({
        url: "get-registration",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
    }),
    registerProject: builder.mutation({
      query: (projectData) => ({
        url: "project-registration",
        method: "POST",
        body: projectData,
      }),
    }),
    registerInternship: builder.mutation({
      query: (projectData) => ({
        url: "internship-registration",
        method: "POST",
        body: projectData,
      }),
    }),
    getProjectDetails: builder.query({
      query: () => ({
        url: "all-project-status",
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }),
    }),
    updateProjectStatus: builder.mutation({
      query: (projectId) => ({
        url: `project-status/${projectId}`, 
        method: 'PUT',
      }),
    }),
    getStatusHistory: builder.query({
      query: (projectId) => `status-history/${projectId}`,
    }),
  }),
});

export const {
  
  useGetInternshipRegistrationQuery,
  useGetProjectRegistrationQuery,
  useRegisterProjectMutation,
  useRegisterInternshipMutation,
  useGetProjectDetailsQuery,
  useUpdateProjectStatusMutation,
  useGetStatusHistoryQuery,
} = adminApi;
