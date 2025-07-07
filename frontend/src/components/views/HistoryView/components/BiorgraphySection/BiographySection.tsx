import styles from './BiographySection.module.scss';
import Shymchuk_photo from "../../../../../assets/images/history_page/shymchuk_photo.png";
import Button from "../../../../ui/Button/Button";

const BiographySection = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h2 className={styles.title}>Біографія Роксоляни Шимчук</h2>
                    <div className={styles.leftImage}>
                        <img src={Shymchuk_photo} alt="Роксоляна Шимчук"/>
                    </div>
                    <div className={styles.text}>
                        <p>
                            <strong>Шимчук Роксоляна Валеріївна</strong> — українська дизайнерка прикрас, етнограф,
                            галерист, громадський діяч, колекціонер стародавнього українського одягу зі всієї України.
                        </p><br/>
                        <p>
                            Народилася 4 жовтня 1971 року у місті Львів, в родині залізничника та учительки.
                        </p>
                        <a
                            href="https://uk.wikipedia.org/wiki/Шимчук_Роксоляна_Валеріївна"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className={styles.button}>Детальніше</Button>
                        </a>

                    </div>
                </div>

                <div className={styles.image}>
                    <img src={Shymchuk_photo} alt="Роксоляна Шимчук"/>
                </div>
            </div>
        </section>

    );
};

export default BiographySection;
