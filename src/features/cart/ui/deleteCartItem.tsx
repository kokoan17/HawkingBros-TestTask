import { FC } from "react";
import { Button } from "../../../shared/ui/button";
import { useAppDispatch } from "../../../shared/lib/store";
import { IChangeData } from "../../../shared/api/cart";
import { fetchDeleteCartItem } from "../../../entities/cart";

interface IDeleteCartItem {
  readonly productId: number;
  readonly userGuid: string;
  readonly className?: string;
}

const DeleteCartItem: FC<IDeleteCartItem> = (props) => {
  const { productId, userGuid, className } = props;

  const dispatch = useAppDispatch();

  const deleteItem = () => {
    const data: IChangeData = {
      ProductId: productId,
      UserGuid: userGuid,
    };

    dispatch(fetchDeleteCartItem(data));
  };
  return (
    <Button onClick={deleteItem} className={className}>
      Удалить
    </Button>
  );
};

export { DeleteCartItem };
