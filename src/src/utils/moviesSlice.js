import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    trailerVideo:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addNowTopRatedMovies: (state, action) => {
      state.nowTopRatedMovies = action.payload;
    },
    addNowUpComingMovies: (state, action) => {
      state.nowUpComingMovies = action.payload;
    },


    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addTrailerVideo ,addNowPopularMovies ,addNowTopRatedMovies, addNowUpComingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
