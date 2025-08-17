import React from "react";
import styles from "./JoinSupportSection.module.scss";
import ShumchykImg from "../../../../../assets/images/contacts_page/shumchyk.png";
import Button from "../../../../ui/Button/Button";

const JoinSupportSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.cardLeft}>
          <h2>Доєднайся до нашого культурного спротиву</h2>
        </div>
        <div className={styles.imageWrap}>
          <img
            src={ShumchykImg}
            alt="Roksoliana Shimchuk gallery"
            loading="lazy"
          />
        </div>
        <div className={styles.cardRight}>
          <h2>Ставай партнером етно-галереї Роксоляни Шимчук</h2>
          <Button
            className={styles.cta}
            onClick={() => {
              window.location.href = "mailto:shymchuk.gallery@gmail.com";
            }}
          >
            Поспілкуймося<br />щодо партнерства
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinSupportSection;
