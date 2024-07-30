import styles from "./styles.module.scss";
import { routes } from "../../../shared/consts";
import { NavLink } from "react-router-dom";
import { UserDropDownInfo } from "../../../features/user";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__list}>
            {routes.map((item) => (
              <li key={item.title} className={styles.header__nav__list__item}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.header__info}>
          <div className={styles.header__info__user}>
            <UserDropDownInfo />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
