import Logo from "../../../../assets/images/logo.png";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.root}>
      <img src={Logo} alt="Logo" />
      <a href="#">Про музей</a>
      <a href="#">Колекція</a>
      <a href="#">Крамниця</a>
      <a href="#">Події</a>
      <a href="#">Контакти</a>
      <button>Підтримка донатом</button>
    </div>
  );
}

export default Header;
