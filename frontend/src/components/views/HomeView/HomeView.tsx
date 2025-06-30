import AboutMuseum from "./components/AboutMuseum/AboutMuseum";
import HeroSection from "./components/HeroSection/HeroSection";
import Info from "./components/Info/Info";
import NewsAndEvents from "./components/NewsAndEvents/NewsAndEvents";
import ShopSection from "./components/ShopSection/ShopSection";
import styles from "./HomeView.module.scss";

function HomeView() {
  return (
    <div className={styles.wrappers}>
      <HeroSection />
      <ShopSection />
      <AboutMuseum />
      <NewsAndEvents />
      <Info />
    </div>
  );
}

export default HomeView;
