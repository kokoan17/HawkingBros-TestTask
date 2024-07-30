import styles from "./styles.module.scss";
import cn from "classnames";
import { Header } from "../../widgets/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../widgets/footer";

const Layout = () => {
  return (
    <div className={cn(styles.layout, styles.layout__wrapper)}>
      <Header />
      <main className={styles.layout__content}>
        <Outlet />
      </main>
      <Footer className={styles.layout__footer} />
    </div>
  );
};

export { Layout };
