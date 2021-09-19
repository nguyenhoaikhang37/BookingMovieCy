import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/Auth/authSlice";
import homeReducer from "features/Home/homeSlice";
import ticketReducer from "features/TicketRoom/ticketSlice";

const rootReducer = {
  home: homeReducer,
  auth: authReducer,
  ticket: ticketReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
