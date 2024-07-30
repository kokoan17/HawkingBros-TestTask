import { DeleteCartItem, IncOrDecQuantity } from "../../../features/cart";
import { ICartItem } from "../../../shared/api/cart";
import { useAppSelector } from "../../../shared/lib/store";
import styles from "./styles.module.scss";

const CartTable = () => {
  const items = useAppSelector((store) => store.cart.items);
  const userGuid = useAppSelector((store) => store.cart.userGuid);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th scope="col" className={styles.table__col__header}>
            Продукт
          </th>

          <th scope="col" className={styles.table__col__header}>
            Цена
          </th>
          <th scope="col" className={styles.able__col__header}>
            Количество
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item: ICartItem) => (
          <tr key={item.Name}>
            <td className={styles.table__col__title}>{item.Name}</td>
            <td className={styles.table__col__title}>
              {item.Price}
              {item.Сurrency}
            </td>
            <td className={styles.table__col__title}>
              <IncOrDecQuantity
                isIncrement={false}
                productId={item.Id}
                userGuid={userGuid}
              />
              {item.Quantity}
              {item.Unit}
              <IncOrDecQuantity
                isIncrement={true}
                productId={item.Id}
                userGuid={userGuid}
              />
              <DeleteCartItem productId={item.Id} userGuid={userGuid} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { CartTable };
