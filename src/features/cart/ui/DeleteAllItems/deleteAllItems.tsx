import { FC } from "react";
import { Button } from "../../../../shared/ui/button";
import { useAppDispatch } from "../../../../shared/lib/store";
import { fetchDeleteCartItems } from "../../../../entities/cart";

interface IDeleteCartItems {
  readonly className?: string;
}

const DeleteCartItems: FC<IDeleteCartItems> = (props) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const deleteItems = () => {
    dispatch(fetchDeleteCartItems());
  };
  return (
    <Button onClick={deleteItems} className={className}>
      Удалить все товары
    </Button>
  );
};

export { DeleteCartItems };
