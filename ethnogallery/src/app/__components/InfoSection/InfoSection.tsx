import styles from "./InfoSection.module.css";
import React from "react";

function InfoSection() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.infoBlock}>
                <div className={styles.contentWrapper}>
                    <div className={styles.schedule}>
                        <h4>Графік роботи</h4>
                        <p>
                            <span className={styles.workingDay}>Пн-Сб: </span>10:00 - 20:00
                        </p>
                        <p>
                            <span className={styles.workingDay}>Нд: </span>12:00 - 20:00
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
                            <span className={styles.ticketType}>Повний</span> - 150грн
                        </p>
                        <p>
                            <span className={styles.ticketType}>Пільговий</span> - 75грн
                        </p>
                        <div className={styles.noteWrapper}>
                            <p className={styles.note}>
                                *для учасників бойових дій, членів їх сімей,
                                осіб з пенсійними посвідченнями, та для дітей від 3 до 12 років
                            </p>
                        </div>

                        <p>
                            <span className={styles.extraOptions}>Для дітей до 3 років - вхід безкоштовний</span>
                        </p>
                        <p>
                            <span className={styles.extraOptions}>Авторські екскурсії - за домовленістю</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.mapWrapper} aria-label="Карта з адресою">
                    <iframe
                        title="Map"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=вул.+Миколи+Коперника,+17,+Львів&output=embed"
                    />
                </div>
        </div>
    );
}

export default InfoSection;
