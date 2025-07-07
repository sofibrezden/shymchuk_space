import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./PeopleSection.module.scss";
import {itemList} from "./constants";
import LeftArrowIcon from "../../../../../assets/icons/left_arrow.svg";
import RightArrowIcon from "../../../../../assets/icons/right_arrow.svg";

function PeopleSection() {
    return (
        <div className={styles.wrapper}>
            <h3>Відомі відвідувачі</h3>

            <div className={styles.navigationButtons}>
                <button className={styles.prev} id="shop-prev">
                    <img src={LeftArrowIcon} className={styles.arrow} alt="Left Arrow"/>
                </button>
                <button className={styles.next} id="shop-next">
                    <img src={RightArrowIcon} className={styles.arrow} alt="Right Arrow"/>
                </button>
            </div>

            <div className={styles.swiperWrapper}>
                <Swiper
                    modules={[Navigation, FreeMode]}
                    className={styles.swiperContainer}
                    freeMode={true}
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
                            <div className={styles.cardWrapper}>
                                <img src={item.image} alt={item.title}/>
                                <h4 className={styles.cardTitle}>{item.title}</h4>
                                {item.subtitle && (
                                    <div className={styles.cardSubtitle}>
                                        {item.subtitle.split("\n").map((line, i) => (
                                            <span key={i}>
                        {line}
                                                <br/>
                      </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default PeopleSection;
