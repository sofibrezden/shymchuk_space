import styles from "./AboutMuseum.module.css";
import AboutMuseumSectionImg from "../../../../public/images/home_page/about_museum_section_image.png";
import Button from 'src/components/Button/Button';
import Image from 'next/image';

function AboutMuseum() {
  return (
    <div className={styles.wrapper}>
      <h3>Про музей</h3>
      <div className={styles.contentWrapper}>
        <Image src={AboutMuseumSectionImg} alt="About Museum Section" />
        <div className={styles.textContainer}>
          <p className={styles.descriptionText}>
            Цінність та унікальність колекції Роксоляни Шимчук – у тому, що в
            ній представлено національну автентичну ношу з усієї України. Цей музей - концентрована естетика
            регіональних особливостей України! Декілька тисяч експонатів! Тут також можна насолодитися збіркою прикрас,
            дукачів, дитячого одягу та рідкісними, майже втраченими експонатами з українською символікою, які
            переслідувалися різними окупаційними режимами і дивом збереглися до наших часів.
          </p>
          <Button>Детальніше</Button>
        </div>
      </div>
    </div>
  );
}

export default AboutMuseum;
