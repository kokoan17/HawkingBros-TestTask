import { ICartItem } from "../../../shared/api/cart";
import { TStatus } from "../../../shared/types";

export interface ICartInitialState {
  items: ICartItem[];
  userGuid: string | null;
  userName: string | null;
  logoImg: string | null;
  countItems: number;
  total: number;
  discount: number;
  loading: boolean;
  status: TStatus;
}
