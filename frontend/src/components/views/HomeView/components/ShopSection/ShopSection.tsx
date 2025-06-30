import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ShopSection.module.scss";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { itemList } from "./constants";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LeftArrowIcon from "../../../../../assets/icons/left_arrow.svg";
import RightArrowIcon from "../../../../../assets/icons/right_arrow.svg";
import Button from "../../../../ui/Button/Button";

function ShopSection() {
  return (
    <div className={styles.wrapper}>
      <h3>Крамниця</h3>

      {/* Кастомні кнопки */}
      <div className={styles.navigationButtons}>
        <button className={styles.prev} id="shop-prev">
          <img src={LeftArrowIcon} className={styles.arrow} alt="Left Arrow" />
        </button>
        <button className={styles.next} id="shop-next">
          <img
            src={RightArrowIcon}
            className={styles.arrow}
            alt="Right Arrow"
          />
        </button>
      </div>

      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation, FreeMode]}
          className={styles.swiperContainer}
          // slidesPerView={4}
          // spaceBetween={30}
          freeMode={true}
          pagination={true}
          navigation={{
            prevEl: "#shop-prev",
            nextEl: "#shop-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
        >
          {itemList.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="#">
                <div className={styles.cardWrapper}>
                  <img src={item.image} alt="Shop Item" />
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Button className={styles.shopButton}>Перейти в крамницю</Button>
    </div>
  );
}

export default ShopSection;
