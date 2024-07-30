import { apiInstanse } from "../base";
import { IAddPromocode, ICartHeaders, ICartItem, ICartTotal, IChangeData, IRes } from "./types";

export const createUserCart = (countItems: number): Promise<boolean> => {
  return apiInstanse.post(`Admin/create?value=${countItems}`);
};

export const getCartHeaders = (): Promise<ICartHeaders> => {
  return apiInstanse.get("ShoppingCart/header");
};

export const getCartItems = (): Promise<ICartItem[]> => {
  return apiInstanse.get("ShoppingCart/products");
};

export const getCartTotal = (): Promise<ICartTotal> => {
  return apiInstanse.get("ShoppingCart/baskedsummary");
}

export const addPromocode = (data: IAddPromocode): Promise<IRes> => {
  return apiInstanse.post("ShoppingCart/discount", data);
}

export const deletePromocode = (): Promise<IRes> => {
  return apiInstanse.delete("ShoppingCart/discount");
}

export const deleteCartItem = (data: IChangeData): Promise<IRes> => {
  return apiInstanse.delete("ShoppingCart/product", data);
};

export const deleteCartItems = (): Promise<IRes> => {
  return apiInstanse.delete("ShoppingCart/products");
};

export const incQuantityCartItem = (data: IChangeData): Promise<IRes> => {
  return apiInstanse.post("ShoppingCart/quantityinc", data);
};

export const decQuantityCartItem = (data: IChangeData): Promise<IRes> => {
  return apiInstanse.post("ShoppingCart/quantitydec", data);
};