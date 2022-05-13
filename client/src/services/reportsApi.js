import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://localhost:5000/report'

const createRequest = (url) => ({ url })


export const reportsApi = createApi({
    reducerPath: 'reportsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getReports: builder.query({
            query: () => createRequest(`/`)
        }),
        getDetails: builder.query({
            query: (id) => createRequest(`/${id}`)
        }),
        postReport: builder.query({
            query: (id) => createRequest(`/${id}`)
        }),
    })
});

export const {
    useGetReportsQuery,
    useGetDetailsQuery,
    usePostReportQuery,
} = reportsApi