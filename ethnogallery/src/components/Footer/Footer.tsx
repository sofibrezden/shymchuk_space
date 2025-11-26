import styles from "./Footer.module.css";
import RightArrowBtn from "../../../public/icons/right_arrow.svg"
import FacebookIcon from "../../../public/icons/facebook.svg";
import InstagramIcon from "../../../public/icons/instagram.svg";
import Logo from '../../../public/logo.png'
import Image from 'next/image';

function Footer() {
    return (
        <div className={styles.root}>
            <div className={styles.galleryName}>
                <Image src={Logo} alt="Logo"/>
                <h3>Етно-галерея Роксоляни Шимчук</h3>
            </div>
            <div className={styles.contacts}>
                <h4>Контакти</h4>
                <p className={styles.phone}>
                    <span>Крамниця: </span>+380965583204
                </p>
                <p className={styles.phone}>
                    <span>Музей: </span>+380960265621
                </p>
                <p>
                    <span>Email: </span>shymchuk.gallery@gmail.com
                </p>
            </div>

            <div className={styles.support}>
                <h4>Підтримайте нас</h4>
                <a href="#" className={styles.help}>
                    Допомогти галереї
                    <Image
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
                        <a href="https://www.facebook.com/shymchuk.com.ua/?locale=uk_UA">
                        <Image src={FacebookIcon} alt="Facebook"/>
                        <span className={styles.socialMediaName}>Facebook</span>
                        </a>
                    </div>
                    <div className={styles.instagramInfo}>
                          <a href="https://www.instagram.com/roksolyana.shymchuk/">
                            <Image src={InstagramIcon} alt="Instagram"/>
                            <span className={styles.socialMediaName}>Instagram</span>
                          </a>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
