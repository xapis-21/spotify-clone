import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: {},
  genreListId: "",
  playlistDetails: {},
};

const playerSlice = createSlice({
  name: "player",
  initialState,

  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      state.currentSongs = action.payload.data;
      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]?.name) {
        state.activeSong = {
          name: state.currentSongs[action.payload]?.name,
          image: state.currentSongs[action.payload]?.album.cover[0].url,
          artists: state.currentSongs[action.payload]?.album.artists,
        };
      } else {
        state.activeSong = {
          name: state.currentSongs[action.payload]?.name,
          image: state.currentSongs[action.payload]?.album.cover[0].url,
          artists: state.currentSongs[action.payload]?.album.artists,
        };
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.name) {
        state.activeSong = {
          name: state.currentSongs[action.payload]?.name,
          image: state.currentSongs[action.payload]?.album.cover[0].url,
          artists: state.currentSongs[action.payload]?.album.artists,
        };
      } else {
        state.activeSong = {
          name: state.currentSongs[action.payload]?.name,
          image: state.currentSongs[action.payload]?.album.cover[0].url,
          artists: state.currentSongs[action.payload]?.album.artists,
        };
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },
    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
    setPlaylistDetails: (state, action) => {
      state.playlistDetails = action.payload;
    },
  },
});

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  selectGenreListId,
  setPlaylistDetails,
} = playerSlice.actions;

export default playerSlice.reducer;
