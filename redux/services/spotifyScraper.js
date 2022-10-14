import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyScraperApi = createApi({
  reducerPath: "spotifyScraperApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify-scraper.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "b67f11c726mshad8dcee2b8498cep1355b1jsncf24334d2e8f"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/chart/tracks/top" }),
    getHomePageOverview: builder.query({ query: () => "/home" }),
    getSongDetails: builder.query({
      query: (trackName) => `/track/download/soundcloud?track=${trackName}`,
    }),
    getPlaylistDetails: builder.query({
      query: (playlistId) => `/playlist/metadata?playlistId=${playlistId}`,
    }),
    getPlaylistTracks: builder.query({
      query: (playlistId) => `/playlist/contents?playlistId=${playlistId}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetHomePageOverviewQuery,
  useGetPlaylistTracksQuery,
  useGetPlaylistDetailsQuery,
} = spotifyScraperApi;
