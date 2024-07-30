import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserCart,
  getCartItems,
  getCartHeaders,
  getCartTotal,
  deleteCartItem,
  IChangeData,
  incQuantityCartItem,
  decQuantityCartItem,
  addPromocode,
  deletePromocode,
  IAddPromocode,
  deleteCartItems,
} from "../../../shared/api/cart";

export const fetchCreateUserCart = createAsyncThunk(
  "cart/createCartItems",
  async (count: number, thunkAPI) => {
    try {
      const response = await createUserCart(count);

      if (response) {
        thunkAPI.dispatch(fetchCartHeaders());
        thunkAPI.dispatch(fetchCartItems());
      }
    } catch (e) {
      console.error(e);
    }
  },
);

export const fetchCartHeaders = createAsyncThunk(
  "cart/fetchCartHeaders",
  async () => {
    try {
      const response = await getCartHeaders();

      return response;
    } catch (e) {
      console.error(e);
    }
  },
);

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    try {
      const reponse = await getCartItems();

      return reponse;
    } catch (e) {
      console.error(e);
    }
  },
);

export const fetchCartTotal = createAsyncThunk(
  "cart/fetchCartTotal",
  async () => {
    try {
      const response = getCartTotal();

      return response;
    } catch (e) {
      console.error(e);
    }
  },
);

export const fetchDeleteCartItem = createAsyncThunk(
  "cart/fetchDeleteCartItem",
  async (data: IChangeData, thunkAPI) => {
    try {
      const response = await deleteCartItem(data);
      if (response) {
        thunkAPI.dispatch(fetchCartItems());
        thunkAPI.dispatch(fetchCartTotal());
      }
    } catch (e) {
      console.error(e);
    }
  },
);

export const fetchDeleteCartItems = createAsyncThunk(
  "cart/fetchDeleteCartItem",
  async (_params, thunkAPI) => {
    try {
      const response = await deleteCartItems();
      if (response) {
        thunkAPI.dispatch(fetchCartItems());
        thunkAPI.dispatch(fetchCartTotal());
      }
    } catch (e) {
      console.error(e);
    }
  },
);

type FetchChangeQuantityProps = {
  isIncrement: boolean;
  data: IChangeData;
};

export const fetchChangeQuantity = createAsyncThunk(
  "cart/fetchChangeQuantity",
  async ({ isIncrement, data }: FetchChangeQuantityProps, thunkAPI) => {
    try {
      let response = null;
      if (isIncrement) {
        response = await incQuantityCartItem(data);
      } else {
        response = await decQuantityCartItem(data);
      }

      if (response) {
        thunkAPI.dispatch(fetchCartItems());
        thunkAPI.dispatch(fetchCartTotal());
      }
    } catch (e) {
      console.error(e);
    }
  },
);

export const fetchAddPromocode = createAsyncThunk(
  "cart/fetchAddOrDeletePromocode",
  async (data: IAddPromocode, thunkAPI) => {
    try {
      const response = await addPromocode(data);

      if (response) {
        thunkAPI.dispatch(fetchCartItems());
        thunkAPI.dispatch(fetchCartTotal());
      }
    } catch (e) {
      console.error(e);
    }
  },
);

export const fetchDeletePromocode = createAsyncThunk(
  "cart/fetchAddOrDeletePromocode",
  async (_params, thunkAPI) => {
    try {
      const response = await deletePromocode();

      if (response) {
        thunkAPI.dispatch(fetchCartItems());
        thunkAPI.dispatch(fetchCartTotal());
      }
    } catch (e) {
      console.error(e);
    }
  },
);

