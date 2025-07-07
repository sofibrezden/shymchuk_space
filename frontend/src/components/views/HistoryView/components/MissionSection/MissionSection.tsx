import React from "react";
import styles from "./MissionSection.module.scss";

const missionValues = [
    "Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum.",
    "Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum.",
    "Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu aliquet rutrum erat varius. Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum.",
];

const MissionSection = () => (
    <section className={styles.missionSection}>
        <h2 className={styles.title}>Місія та цінності</h2>
        <p className={styles.boldParagraph}>
            <b>
                Lorem ipsum dolor sit amet consectetur. Pulvinar arcu mattis in at sodales condimentum. Gravida arcu
                aliquet rutrum erat varius. Lorem ipsum dolor sit amet consectetur.
            </b>
        </p>
        <div className={styles.valuesList}>
            <div className={styles.verticalLine}></div>
            {missionValues.map((text, i) => (
                <div className={styles.valueRow} key={i}>
                    <div className={styles.diamond}></div>
                    <div className={styles.valueText}>
                        <b>Lorem</b> {text.slice(5)}
                    </div>
                </div>
            ))}
        </div>

    </section>
);

export default MissionSection;
