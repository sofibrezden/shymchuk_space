import styles from "./page.module.css";
import HeroSection from 'src/app/__components/HeroSection/HeroSection';
import ShopSection from 'src/app/__components/ShopSection/ShopSection';
import AboutMuseum from 'src/app/__components/AboutMuseum/AboutMuseum';
import NewsAndEvents from 'src/app/__components/NewsAndEvents/NewsAndEvents';
import InfoSection from 'src/app/__components/InfoSection/InfoSection';

export default function Home() {
  return (
    <div className={styles.wrapper}>
        <HeroSection />
        <ShopSection />
        <AboutMuseum />
        <NewsAndEvents />
        <InfoSection />
    </div>
  );
}
