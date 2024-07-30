import {
  fetchCreateUserCart,
  fetchCartItems,
  fetchCartHeaders,
  fetchCartTotal,
} from "./actions";
import { ICartInitialState } from "./types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ICartInitialState = {
  items: [],
  userGuid: null,
  userName: null,
  logoImg: null,
  countItems: 0,
  total: 0,
  discount: 0,
  loading: false,
  status: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchCreateUserCart.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCreateUserCart.fulfilled, (state) => {
      state.status = "success";
    });
    builder.addCase(fetchCreateUserCart.rejected, (state) => {
      state.status = "error";
    });

    builder.addCase(fetchCartItems.pending, (state) => {
      state.status = "loading";
      state.loading = true;
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload || [];
      state.loading = false;
    });
    builder.addCase(fetchCartItems.rejected, (state) => {
      state.status = "error";
      state.loading = false;
    });

    builder.addCase(fetchCartHeaders.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCartHeaders.fulfilled, (state, action) => {
      state.status = "success";
      state.userGuid = action.payload?.UsedGuid || null;
      state.userName = action.payload?.UserName || null;
      state.logoImg = action.payload?.LogoImg || null;
    });
    builder.addCase(fetchCartHeaders.rejected, (state) => {
      state.status = "error";
    });

    builder.addCase(fetchCartTotal.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCartTotal.fulfilled, (state, action) => {
      state.status = "success";
      state.countItems = action.payload?.TotalProducts || 0;
      state.total = action.payload?.Total || 0;
      state.discount = action.payload?.Discount || 0;
    });
    builder.addCase(fetchCartTotal.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
