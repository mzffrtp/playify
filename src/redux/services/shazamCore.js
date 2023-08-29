/* 
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world",
        prepareHeader: (headers) => {
            headers.set("X-RapidAPI-Key", "529011e247msh7c7a8f92b4b961dp11b1b2jsn04e415593b02");
            return headers
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => ""
        })
    })
})

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;



https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-country
https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world
https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in_country_by_genre

https://shazam-core7.p.rapidapi.com/songs/list-recommendations

https://shazam-core7.p.rapidapi.com/artist/get-top-songs

*/
/*
import axios from "axios";
import { Actiontypes } from "../actionTypes";

export const options = {
    method: 'GET',
    url: 'https://shazam-core7.p.rapidapi.com/charts/get-top-songs-in-world',
    params: { limit: '10' },
    headers: {
        'X-RapidAPI-Key': '529011e247msh7c7a8f92b4b961dp11b1b2jsn04e415593b02',
        'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
    }
}

axios.defaults.baseURL = "https://shazam-core7.p.rapidapi.com"

export const useGetTopCharts = () => (dispatch) => {
    axios
        .get("//charts/get-top-songs-in-world", options)
        .then((res) => {
            console.log("cart´s data", res),
                dispatch({
                    type: Actiontypes.GET_CHARTS,
                    payload: res.data
                })
        })
}



export const options = {
    method: 'GET',
    url: 'https://shazam-core7.p.rapidapi.com',
    params: { limit: '10' },
    headers: {
        'X-RapidAPI-Key': '529011e247msh7c7a8f92b4b961dp11b1b2jsn04e415593b02',
        'X-RapidAPI-Host': 'shazam-core7.p.rapidapi.com'
    }
};

*/

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '529011e247msh7c7a8f92b4b961dp11b1b2jsn04e415593b02');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => '/charts/get-top-songs-in-world', // Relative to the baseUrl
        }),
    }),
});

export const {
    useGetTopChartsQuery
} = shazamCoreApi;

