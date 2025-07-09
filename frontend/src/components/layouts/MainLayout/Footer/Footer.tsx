import styles from "./Footer.module.scss";
import RightArrowBtn from "../../../../assets/icons/right_arrow_btn.svg";
import FacebookIcon from "../../../../assets/icons/facebook.svg";
import InstagramIcon from "../../../../assets/icons/instagram.svg";
import Logo from "../../../../assets/images/logo.png";

function Footer() {
    return (
        <div className={styles.root}>
            <div className={styles.galleryName}>
                <img src={Logo} alt="Logo"/>
                <h3>Етно-галерея Роксоляни Шимчук</h3>
            </div>
            <div className={styles.contacts}>
                <h4>Контакти</h4>
                <p className={styles.phone}>
                    <span>Тел.: </span>+380965583204
                </p>
                <p>
                    <span>Email: </span>gallery@example.com
                </p>
            </div>

            <div className={styles.support}>
                <h4>Підтримайте нас</h4>
                <a href="#" className={styles.help}>
                    Допомогти галереї
                    <img
                        src={RightArrowBtn}
                        className={styles.rightArrow}
                        alt="Right Arrow"
                    />
                </a>
            </div>

            <div className={styles.socialMedia}>
                <h4>Будьте з нами</h4>
                <div className={styles.socialLinkContainer}>
                    <div className={styles.facebookInfo}>
                        <img src={FacebookIcon} alt="Facebook"/>
                        <span className={styles.socialMediaName}>Facebook</span>
                    </div>
                    <div className={styles.instagramInfo}>
                        <img src={InstagramIcon} alt="Instagram"/>
                        <span className={styles.socialMediaName}>Instagram</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
