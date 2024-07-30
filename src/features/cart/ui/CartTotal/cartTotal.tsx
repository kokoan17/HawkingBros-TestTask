import { FC, useState } from "react";
import styles from "./styles.module.scss";
import { Button } from "../../../../shared/ui/button";
import { useAppDispatch, useAppSelector } from "../../../../shared/lib/store";
import { IAddPromocode } from "../../../../shared/api/cart";
import {
  fetchAddPromocode,
  fetchDeletePromocode,
} from "../../../../entities/cart";
import { Input } from "../../../../shared/ui/input";

interface ICartTotal {
  readonly inputClassName?: string;
  readonly buttonClassName?: string;
}

const CartTotal: FC<ICartTotal> = (props) => {
  const { inputClassName, buttonClassName } = props;
  const [withPromocode, setWithPromocode] = useState<boolean>(false);
  const [promocode, setPromocode] = useState<string>("");

  const onChangePromocode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromocode(e.target.value);
  };

  const dispatch = useAppDispatch();
  const userGuid = useAppSelector((store) => store.cart.userGuid);
  const total = useAppSelector((store) => store.cart.total);
  const count = useAppSelector((store) => store.cart.countItems);
  const discount = useAppSelector((store) => store.cart.discount);

  const addPromocode = () => {
    if (promocode !== "") {
      const data: IAddPromocode = {
        DiscountName: promocode,
        UsedGuid: userGuid,
      };

      dispatch(fetchAddPromocode(data));
      setWithPromocode(true);
      setPromocode("");
    } else {
      alert("Заполни поле с промокодом");
    }
  };

  const deletePromocode = () => {
    dispatch(fetchDeletePromocode());
    setWithPromocode(false);
  };

  return (
    <div className={styles.form}>
      <div className={styles.form__total}>
        <p>Итого - {total}</p>
        <p>Скидка - {discount}</p>
        <p>Всего вещей - {count}</p>
      </div>
      <div className={styles.form__addAction}>
        <Input
          placeholder="промокод"
          name={"promocode"}
          value={promocode}
          onChange={onChangePromocode}
          className={inputClassName}
        />
        <Button onClick={addPromocode} className={buttonClassName}>
          Добавить промокод
        </Button>
      </div>
      <div className={styles.form__deleteAction}>
        <Button
          onClick={deletePromocode}
          className={buttonClassName}
          disabled={!withPromocode}
        >
          Удалить промокод
        </Button>
      </div>
      <div className={styles.form__submit}>
        <button>Оформить заказ</button>
      </div>
    </div>
  );
};

export { CartTotal };
