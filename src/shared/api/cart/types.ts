export interface ICartItem {
  Id: number;
  Name: string;
  Description: string;
  Quantity: number;
  Unit: string;
  Сurrency: string;
  Price: number;
  DiscountedPrice: number;
  Images: ICartItemImage[];
}

export interface ICartItemImage {
  FileName: string;
  FileExtension: string;
  Image: string;
}

export interface ICartHeaders {
  LogoImg: string;
  UsedGuid: string;
  UserName: string;
}

export interface ICartTotal {
  TotalProducts: number;
  Discount: number;
  Total: number;
}

export interface IChangeData {
  ProductId: number;
  UserGuid: string;
}

export interface IRes {
  Name: string;
  Description: string;
}

export interface IAddPromocode {
  DiscountName: string;
  UsedGuid: string;
}
