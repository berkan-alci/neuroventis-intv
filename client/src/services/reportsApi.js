import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://nv-interview.com/report'

const createRequest = (url) => ({ url })


export const reportsApi = createApi({
    reducerPath: 'reportsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getReports: builder.query({
            query: (count) => createRequest(`/`)
        }),
    })
});

export const {
    useGetReportsQuery,
} = reportsApi