import { useState } from "react";
import styles from "./styles.module.scss";
import { Dropdown } from "../../../../shared/ui/dropdown";
import { useAppSelector } from "../../../../shared/lib/store";

const UserDropDownInfo = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const userGuid = useAppSelector((store) => store.cart.userGuid);
  const userName = useAppSelector((store) => store.cart.userName);

  return (
    <div className={styles.info}>
      <button
        className={styles.info__static}
        onClick={() => setIsOpen(!isOpen)}
      >
        USER &#8681;
      </button>
      <Dropdown isOpen={isOpen} className={styles.info__dropdown}>
        <p>User Name - {userName}</p>
        <p>UserId - {userGuid}</p>
      </Dropdown>
    </div>
  );
};

export { UserDropDownInfo };
