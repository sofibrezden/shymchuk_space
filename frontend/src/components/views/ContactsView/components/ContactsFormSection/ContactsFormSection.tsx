import React from "react";
import styles from "./ContactsFormSection.module.scss";
import InstagramIcon from "../../../../../assets/icons/instagram.svg";
import FacebookIcon from "../../../../../assets/icons/facebook.svg";
import Button from "../../../../ui/Button/Button";
import BreadcrumbSection from "../BreadcrumbSection/BreadcrumbSection";

const ContactFormSection: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.breadcrumbs}>
                <BreadcrumbSection
                    links={[{to: "/", label: "Головна"}]}
                    current="Контакти"
                />
            </div>
            <h1 className={styles.title}>Контакти</h1>
            <div className={styles.card}>
                <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <h3>Звʼяжіться з нами</h3>

                    <label className={styles.label}>
                        <span>Ваше ім’я</span>
                        <input type="text" name="name" placeholder="Ім’я" required/>
                    </label>

                    <label className={styles.label}>
                        <span>Електронна пошта</span>
                        <input type="email" name="email" placeholder="name@example.com" required/>
                    </label>

                    <label className={styles.label}>
                        <span>Повідомлення</span>
                        <textarea name="message" rows={5} placeholder=""/>
                    </label>

                    <label className={styles.checkbox}>
                        <input type="checkbox" required/>
                        <span>Даю згоду на обробку даних</span>
                    </label>

                    <Button type="submit" className={styles.submit}>Надіслати</Button>
                </form>

                <div className={styles.info}>
                    <div className={styles.infoBlock}>
                        <h4>Подзвонити</h4>
                        <p className={styles.phone}>
                            <span><strong>Крамниця:</strong> </span>+380965583204
                        </p>
                        <p className={styles.phone}>
                            <span><strong>Музей:</strong></span>+380960265621
                        </p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h4>Адреса</h4>
                        <p>м. Львів, вул. Миколи Коперника, 17</p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h4>Графік роботи</h4>
                        <p>
                            <span className={styles.workingDay}>Пн-Сб: </span>10:00 - 20:00
                        </p>
                        <p>
                            <span className={styles.workingDay}>Нд: </span>12:00 - 20:00
                        </p>
                    </div>

                    <div className={styles.infoBlock}>
                        <h4>Email</h4>
                        <a href="mailto:shymchuk.gallery@gmail.com"
                           className={styles.mono}>shymchuk.gallery@gmail.com</a>
                    </div>

                    <div className={styles.infoBlock}>
                        <h4>Підпишіться на нас</h4>
                        <div className={styles.socials}>
                            <a href="https://www.facebook.com/shymchuk.com.ua/?locale=uk_UA"><img src={FacebookIcon}
                                                                                                  alt="Facebook"/></a>
                            <a href="https://www.instagram.com/roksolyana.shymchuk/"><img src={InstagramIcon}
                                                                                          alt="Instagram"/></a>
                        </div>
                    </div>
                </div>

                <div className={styles.mapWrap} aria-label="Карта з адресою">
                    <iframe
                        title="Map"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps?q=вул.+Миколи+Коперника,+17,+Львів&output=embed"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
