import { useEffect } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { useAppDispatch } from "../../../shared/lib/store";
import {
  fetchCreateUserCart,
  fetchCartTotal,
} from "../../../entities/cart";
import { CartTable } from "../../../widgets/cartTable";
import { CartTotal, DeleteCartItems } from "../../../features/cart";


const Cart = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCreateUserCart(5));
    dispatch(fetchCartTotal());
  }, []);

  return (
    <section className={cn(styles.cartPage, "container")}>
      <h1>Cart Page</h1>
      <DeleteCartItems />
      <div className={styles.cartPage__content}>
        <div className={styles.cartPage__content__table}>
          <CartTable />
        </div>
        <div className={styles.cartPage__content__total}>
          <CartTotal />
        </div>
      </div>
    </section>
  );
};

export { Cart };
