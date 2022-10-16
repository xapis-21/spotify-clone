import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spotifyScraperApi = createApi({
  reducerPath: "spotifyScraperApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify-scraper.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        process.env.NEXT_PUBLIC_SPOTIFY_SCRAPER_KEY
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/chart/tracks/top?type=daily",
    }),
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
