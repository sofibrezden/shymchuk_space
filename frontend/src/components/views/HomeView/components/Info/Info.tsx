import styles from "./Info.module.scss";
import MapImg from "../../../../../assets/images/home_page/map.png";

function Info() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoBlock}>
        <div className={styles.contentWrapper}>
          <div className={styles.schedule}>
            <h4>Графік роботи</h4>
            <p>
              <span className={styles.workingDay}>Пн: </span>вихідний
            </p>
            <p>
              <span className={styles.workingDay}>Вт-Нд: </span>10:00 - 18:00
            </p>
          </div>

          <div className={styles.address}>
            <h4>Адреса</h4>
            <p>м.Львів</p>
            <p>вул. Миколи Коперника, 17</p>
          </div>

          <div className={styles.tickets}>
            <h4>Квитки</h4>
            <p>
              <span className={styles.ticketType}>Повний</span> - 100грн
            </p>
            <p>
              <span className={styles.ticketType}>Пільговий</span> - 50грн
            </p>
            <p>
              <span className={styles.ticketType}>Дитячий</span> - 30грн
            </p>
          </div>
        </div>
      </div>
      <div className={styles.mapWrapper}>
        <img src={MapImg} alt="Map" />
      </div>
    </div>
  );
}

export default Info;
