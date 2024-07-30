import styles from "./styles.module.scss";
import cn from "classnames";

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn(styles.footer, className)}>
      <div className={styles.footer__wrapper}>
        <p>footer</p>
      </div>
    </footer>
  );
};

export { Footer };
