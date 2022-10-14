import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"



  export const spotifyScraperApi = createApi({
    reducerPath: "spotifyScraperApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://spotify-scraper.p.rapidapi.com/v1",
      prepareHeaders: (headers) => {
        headers.set(
          "X-RapidAPI-Key",
          "361e66dd93mshdac60e431774172p1c8399jsnfb602273dfb1"
        );
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => "/chart/tracks/top" }),
      getHomePageOverview: builder.query({ query: () => "/home" }),
      getSongDetails: builder.query({
        query: () => `/tracks/details?track_id=${songId}`,
      }),
      getPlaylistDetails: builder.query({
        query: (playlistId) => `/playlist/metadata?playlistId=${playlistId}`,
      }),
      getPlaylistTracks: builder.query({
        query: (playlistId) => `/playlist/contents?playlistId=${playlistId}`,
      }),
    }),
  });

  export const { useGetTopChartsQuery, useGetSongDetailsQuery,useGetHomePageOverviewQuery,useGetPlaylistTracksQuery,useGetPlaylistDetailsQuery } = spotifyScraperApi;