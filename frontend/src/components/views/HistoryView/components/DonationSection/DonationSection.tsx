import React from "react";
import styles from "./DonationSection.module.scss";
import Button from "../../../../ui/Button/Button";

const SupportSection = () => {
    return (
        <section className={styles.supportSection}>
            <div className={styles.left}>
                <h2>Нам потрібна ваша підтримка</h2>
            </div>
            <div className={styles.right}>
                <p>
                    Ваша підтримка важлива для збереження та підтримки
                    <br/> національної спадщини України
                </p>
                <Button className={styles.supportButton}>Допомога музею</Button>
            </div>
        </section>
    );
};

export default SupportSection;
