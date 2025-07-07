import React from "react";
import styles from "./PartnersSection.module.scss";

import british from '../../../../../assets/images/history_page/logo1.png';
import strategy from '../../../../../assets/images/history_page/logo2.png';
import arsenal from '../../../../../assets/images/history_page/logo3.png';
import book from '../../../../../assets/images/history_page/logo4.png';


const partners = [british, strategy, arsenal, book];

const PartnerSection = () => {
    return (
        <section className={styles.partnerSection}>
            <h3 className={styles.title}>Партнери</h3>
            <div className={styles.grid}>
                {partners.map((logo, index) => (
                    <React.Fragment key={index}>
                        <div className={styles.gridItem}>
                            <img src={logo} alt={`partner-${index}`}/>
                        </div>
                        {index < partners.length - 1 && <div className={styles.divider}></div>}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default PartnerSection;

