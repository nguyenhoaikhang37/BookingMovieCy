import movieApi from "apis/movieApi";
import theaterApi from "apis/theaterApi";

const {
  createSlice,
  createAsyncThunk,
  createSelector,
} = require("@reduxjs/toolkit");

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

export const fetchTheaterSystem = createAsyncThunk(
  "home/fetchTheaterSystem",
  async () => {
    try {
      const response = theaterApi.layThongTinLichChieuHeThongRap();
      return response;
    } catch (error) {
      console.log("Failed to fetch theater system", error);
    }
  }
);

const initialState = {
  loading: false,
  movieList: [],
  movieDetail: undefined,
  theaterSystem: [],
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

    //Lay thong tin cum rap theo he thong
    [fetchTheaterSystem.fulfilled]: (state, action) => {
      state.theaterSystem = action.payload.content;
    },
  },
});

//ACTIONS
export const homeActions = homeSlice.actions;
//SELECTORS
export const selectHomeLoading = (state) => state.home.loading;
export const selectHomeMovieList = (state) => state.home.movieList;
//Movie Options
export const selectHomeMovieOptions = createSelector(
  selectHomeMovieList,
  (movieList) =>
    movieList.map((movie) => ({
      label: movie.tenPhim,
      value: movie.maPhim,
    }))
);
export const selectHomeMovieDetail = (state) => state.home.movieDetail;
export const selectHomeTheaterList = (state) => state.home.theaterList;
export const selectHomeTheaterSystem = (state) => state.home.theaterSystem;
//REDUCER
const homeReducer = homeSlice.reducer;
export default homeReducer;
