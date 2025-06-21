import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./NewsAndEvents.module.scss";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LeftArrowIcon from "../../../../../assets/icons/left_arrow.svg";
import RightArrowIcon from "../../../../../assets/icons/right_arrow.svg";
import { newsList } from "./constants";

function NewsAndEvents() {
  return (
    <div className={styles.wrapper}>
      <h3>Останні новини та події</h3>

      {/* Кастомні кнопки */}
      <div className={styles.navigationButtons}>
        <button className={styles.prev} id="shop-prev">
          <img src={LeftArrowIcon} alt="Left Arrow" />
        </button>
        <button className={styles.next} id="shop-next">
          <img src={RightArrowIcon} alt="Right Arrow" />
        </button>
      </div>

      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation, FreeMode]}
          className={styles.swiperContainer}
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={true}
          navigation={{
            prevEl: "#shop-prev",
            nextEl: "#shop-next",
          }}
        >
          {newsList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.cardWrapper}>
                <img
                  src={item.image}
                  alt="Shop Item"
                  className={styles.cardImg}
                />
                <div className={styles.contentWrapper}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <p className={styles.cardDescription}>{item.description}</p>
                  <a href={`/post/${item.id}`}>Детальніше</a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default NewsAndEvents;
