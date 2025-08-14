import { useState } from "react";
import Logo from "../../../../assets/images/logo.png";
import styles from "./Header.module.scss";
import Button from "../../../ui/Button/Button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.root}>
      <img src={Logo} alt="Logo" onClick={() => window.location.href = '/'}
           style={{ cursor: 'pointer' }}/>
      <div className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
        <a href="#">Крамниця</a>
        <a href="/about-museum">Музей</a>
        <a href="#">Історія успіху</a>
        <a href="#">Родина</a>
        <a href="#">Новини</a>
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
