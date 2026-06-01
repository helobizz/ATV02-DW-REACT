import Link from "next/link";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.navbar}>

      <div className={styles.logo}>
        <Link href="/">HP Personagens</Link>
      </div>

      <div className={styles.links}>
        <Link href="/">Todos os Personagens</Link>
      </div>

    </nav>
  );
};

export default Menu;