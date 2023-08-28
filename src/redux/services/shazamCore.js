import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core7.p.rapidapi.com",
        prepareHeader: (headers) => {
            headers.set("X-RapidAPI-Key", "529011e247msh7c7a8f92b4b961dp11b1b2jsn04e415593b02");
            return headers
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => "/charts/get-top-songs-in-world"
        })
    })
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;