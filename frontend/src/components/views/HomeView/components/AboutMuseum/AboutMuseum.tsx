import styles from "./AboutMuseum.module.scss";
import AboutMuseumSectionImg from "../../../../../assets/images/home_page/about_museum_section_image.png";
import Button from "../../../../ui/Button/Button";

function AboutMuseum() {
  return (
    <div className={styles.wrapper}>
      <h3>Про музей</h3>
      <div className={styles.contentWrapper}>
        <img src={AboutMuseumSectionImg} alt="About Museum Section" />
        <div className={styles.textContainer}>
          <p className={styles.descriptionText}>
            Цінність та унікальність колекції Роксоляни Шимчук – у тому, що в
            ній є одяг з усієї України. Це наче концентрована експозиція всіх
            регіональних етнографічних музеїв країни. Декілька тисяч –
            найбагатша збірка у Львові, справжнісінький скарб, яким зовсім
            скоро, маємо надію, милуватимемося в приватному музеї.
          </p>
          <Button>Детальніше</Button>
        </div>
      </div>
    </div>
  );
}

export default AboutMuseum;
