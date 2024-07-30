import { FC } from "react";
import { Button } from "../../../shared/ui/button";
import { useAppDispatch } from "../../../shared/lib/store";
import { IChangeData } from "../../../shared/api/cart";
import { fetchChangeQuantity } from "../../../entities/cart";

interface IIncOrDecQuantity {
  readonly isIncrement: boolean;
  readonly productId: number;
  readonly userGuid: string;
  readonly className?: string;
  readonly disabled?: boolean;
}

const IncOrDecQuantity: FC<IIncOrDecQuantity> = (props) => {
  const {
    isIncrement,
    productId,
    userGuid,
    className,
    disabled = false,
  } = props;

  const dispatch = useAppDispatch();

  const changeQuantity = () => {
    const data: IChangeData = {
      ProductId: productId,
      UserGuid: userGuid,
    };

    dispatch(fetchChangeQuantity({ isIncrement, data }));
  };

  return (
    <Button onClick={changeQuantity} className={className} disabled={disabled}>
      {isIncrement ? "+" : "-"}
    </Button>
  );
};

export { IncOrDecQuantity };
