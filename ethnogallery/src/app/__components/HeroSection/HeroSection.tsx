import styles from "./HeroSection.module.css";
import HeroSectionImg from "../../../../public/images/home_page/hero_section_image.jpg";
import Image from 'next/image';
import Button from 'src/components/Button/Button';

function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <h1>Етно-галерея Роксоляни Шимчук</h1>
        <p>Місце де живе українська краса!</p>
        <Button>Детальніше</Button>
      </div>
      <div className={styles.imageContainer}>
        <Image src={HeroSectionImg} alt="Hero Section" />
      </div>
    </div>
  );
}

export default HeroSection;
