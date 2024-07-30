import { FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

interface IButton {
  readonly children: string;
  readonly onClick: () => void;
  readonly className?: string;
  readonly disabled?: boolean;
}

const Button: FC<IButton> = (props) => {
  const { children, onClick, className, disabled = false } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(styles.button, className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export { Button };
