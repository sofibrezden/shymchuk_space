import styles from "./HeroSection.module.scss";
import HeroSectionImg from "../../../../../assets/images/home_page/hero_section_image.jpg";
import Button from "../../../../ui/Button/Button";

function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContainer}>
        <h1>Етно-галерея Роксоляни Шимчук</h1>
        <p>Місце, де живе ексклюзивний вишитий одяг</p>
        <Button>Детальніше</Button>
      </div>
      <div className={styles.imageContainer}>
        <img src={HeroSectionImg} alt="Hero Section" />
      </div>
    </div>
  );
}

export default HeroSection;
