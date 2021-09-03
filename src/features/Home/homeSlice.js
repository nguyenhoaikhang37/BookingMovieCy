import movieApi from "apis/movieApi";
import theaterApi from "apis/theaterApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchMovieList = createAsyncThunk(
  "home/fetchMovieList",
  async () => {
    try {
      const response = movieApi.layDanhSachPhim();
      return response;
    } catch (error) {
      console.log("Failed to fetch movie list", error);
    }
  }
);

export const fetchDetailMovie = createAsyncThunk(
  "home/fetchDetailMovie",
  async (maPhim) => {
    try {
      const response = theaterApi.layThongTinLichChieuPhim(maPhim);
      return response;
    } catch (error) {
      console.log("Failed to fetch movie detail", error);
    }
  }
);

const initialState = {
  loading: false,
  movieList: [],
  movieDetail: undefined,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: {
    //Lay danh sach phim
    [fetchMovieList.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchMovieList.fulfilled]: (state, action) => {
      state.loading = false;
      state.movieList = action.payload.content;
    },

    //Lay chi tiet phim
    [fetchDetailMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchDetailMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.movieDetail = action.payload.content;
    },
  },
});

//ACTIONS
export const homeActions = homeSlice.actions;
//SELECTORS
export const selectHomeLoading = (state) => state.home.loading;
export const selectHomeMovieList = (state) => state.home.movieList;
export const selectHomeMovieDetail = (state) => state.home.movieDetail;
//REDUCER
const homeReducer = homeSlice.reducer;
export default homeReducer;
