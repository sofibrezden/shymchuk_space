'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./NewsAndEvents.module.css";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import LeftArrowIcon from "../../../../public/icons/left_arrow.svg";
import RightArrowIcon from "../../../../public/icons/right_arrow.svg";
import { newsList } from "./constants";
import Button from 'src/components/Button/Button';
import Image from 'next/image';

function NewsAndEvents() {
  return (
    <div className={styles.wrapper}>
      <h3>Останні новини та події</h3>

      <div className={styles.navigationButtons}>
        <button className={styles.prev} id="news-prev">
          <Image src={LeftArrowIcon} alt="Left Arrow" />
        </button>
        <button className={styles.next} id="news-next">
          <Image src={RightArrowIcon} alt="Right Arrow" />
        </button>
      </div>

      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Navigation, FreeMode]}
          className={styles.swiperContainer}
          // slidesPerView={3}
          // spaceBetween={30}
          freeMode={true}
          pagination={true}
          navigation={{
            prevEl: "#news-prev",
            nextEl: "#news-next",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
        >
          {newsList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.cardWrapper}>
                <Image
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
      <Button className={styles.allEvents} variant="Outlined">
        Всі події
      </Button>
    </div>
  );
}

export default NewsAndEvents;
