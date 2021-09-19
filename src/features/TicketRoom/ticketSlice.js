import ticketApi from "apis/ticketApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  ticketList: {},
  ticketStore: [],
};

export const fetchTicketList = createAsyncThunk(
  "ticket/fetchTicketList",
  async (maLichChieu) => {
    try {
      const response = ticketApi.layDanhSachPhongVe(maLichChieu);
      return response;
    } catch (error) {
      console.log("Failed to fetch ticket list", error);
    }
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    addTicketStore(state, action) {
      const ticketStoreUpdate = [...state.ticketStore];
      const index = ticketStoreUpdate.findIndex(
        (ticket) => ticket?.maGhe == action?.payload.maGhe
      );
      if (index !== -1) {
        ticketStoreUpdate.splice(index, 1);
      } else ticketStoreUpdate.push(action.payload);
      return { ...state, ticketStore: ticketStoreUpdate };
    },
    removeTicketStore(state, action) {
      state.ticketStore = [];
    },
  },
  extraReducers: {
    [fetchTicketList.pending]: (state) => {
      state.loading = true;
    },
    [fetchTicketList.fulfilled]: (state, action) => {
      state.loading = false;
      state.ticketList = action.payload.content;
    },
  },
});

//ACTIONS
export const ticketActions = ticketSlice.actions;
//SELECTORS
export const selectTicketList = (state) => state.ticket.ticketList;
export const selectTicketLoading = (state) => state.ticket.loading;
export const selectTicketStore = (state) => state.ticket.ticketStore;
//REDUCER
const ticketReducer = ticketSlice.reducer;
export default ticketReducer;
