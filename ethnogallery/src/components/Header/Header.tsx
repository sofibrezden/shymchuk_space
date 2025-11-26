'use client';

import Logo from '../../../public/logo.png'
import styles from "./Header.module.css";
import Button from 'src/components/Button/Button';
import {useState} from 'react';
import Image from 'next/image';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.root}>
      <Image src={Logo} alt="Logo" onClick={() => window.location.href = '/'}
           style={{ cursor: 'pointer' }}/>
      <div className={`${styles.links} ${isMenuOpen ? styles.open : ""}`}>
        <a href="#">Крамниця</a>
        <a href="/about-museum">Музей</a>
        <a href="#">Історія успіху</a>
        <a href="#">Родина</a>
        <a href="#">Новини</a>
        <a href="/contacts">Контакти</a>
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
