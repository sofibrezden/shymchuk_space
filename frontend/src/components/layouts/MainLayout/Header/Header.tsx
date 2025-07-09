import { useState } from "react";
import Logo from "../../../../assets/images/logo.png";
import styles from "./Header.module.scss";
import Button from "../../../ui/Button/Button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.root}>
      <img src={Logo} alt="Logo" />

      <div className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
        <a href="/about-museum">Про музей</a>
        <a href="/collection">Колекція</a>
        <a href="#">Крамниця</a>
        <a href="#">Події</a>
        <a href="#">Контакти</a>
        <Button variant="Outlined">Підтримка донатом</Button>
      </div>

      <div className={styles.burger} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Header;
