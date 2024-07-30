import { FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

interface IDropdown {
  readonly isOpen: boolean;
  readonly children: React.ReactNode;
  readonly className?: string;
}

const Dropdown: FC<IDropdown> = (props) => {
  const { isOpen, children, className } = props;

  let isOpenDropdown = isOpen ? styles.dropdown_open : styles.dropdown_close;

  return (
    <div className={cn(styles.dropdown, isOpenDropdown, className)}>
      <div className={styles.dropdown__wrapper}>
        <div className={styles.dropdown__content}>{children}</div>
      </div>
    </div>
  );
};

export { Dropdown }
