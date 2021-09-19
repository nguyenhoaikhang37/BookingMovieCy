import userApi from "apis/userApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getUserToken = createAsyncThunk("auth/getUserToken", async () => {
  try {
    const { content } = await userApi.layThongTinTaiKhoan();
    return content;
  } catch (error) {
    console.log("Failed to get user token", error);
  }
});

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [getUserToken.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

//ACTIONS
export const authActions = authSlice.actions;
//SELECTORS
export const selectAuthUser = (state) => state.auth.user;
//REDUCER
const authReducer = authSlice.reducer;
export default authReducer;
