import { FC } from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

interface IInput {
  readonly name: string;
  readonly placeholder: string;
  readonly value: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly className?: string;
}

const Input: FC<IInput> = (props) => {
  const { name, placeholder, value, onChange, className } = props;
  return (
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className={cn(styles.input, className)}
    />
  );
};

export { Input };
