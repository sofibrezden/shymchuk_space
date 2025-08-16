import { useParams } from "react-router-dom";
import { regionCollectionItems, regions } from "./constants";
import styles from "./RegionDetailsView.module.scss";
import RhombusIcon from "../../../assets/icons/rhombus.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "../../ui/Button/Button";

function RegionDetailsView() {
  const { regionKey } = useParams<{ regionKey: string }>();
  const pageDetails = regions[regionKey || ""];
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{pageDetails.title}</h3>
      <div className={styles.descriptionContainer}>
        <div className={styles.contentWrapper}>
          <img
            src={RhombusIcon}
            alt="Rhombus Icon"
            className={styles.rhombusIcon}
          />
          <p>{pageDetails.content}</p>
        </div>
        <img
          src={pageDetails.img}
          alt="Region Map"
          className={styles.regionImg}
        />
      </div>
      <div className={styles.regionCollection}>
        <h3>Колекція Полісся</h3>
        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[Navigation, FreeMode]}
            className={styles.swiperContainer}
            // slidesPerView={4}
            // spaceBetween={75}
            freeMode={true}
            pagination={true}
            navigation={{
              prevEl: "#news-prev",
              nextEl: "#news-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1350: {
                slidesPerView: 4,
                spaceBetween: 75,
              },
            }}
          >
            {regionCollectionItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.cardWrapper}>
                  <img
                    src={item.img}
                    alt="Region Collection Item"
                    className={styles.cardImg}
                  />
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Button className={styles.more}>Більше</Button>
      </div>
    </div>
  );
}

export default RegionDetailsView;
