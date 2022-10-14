import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { spotifyScraperApi } from './services/spotifyScraper';

export const store = configureStore({
  reducer: {
    [spotifyScraperApi.reducerPath]: spotifyScraperApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spotifyScraperApi.middleware),
});
