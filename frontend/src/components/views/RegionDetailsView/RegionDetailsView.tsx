// RegionDetailsView.tsx
import {useParams} from "react-router-dom";
import {regionCollectionItems, regions} from "./constants";
import styles from "./RegionDetailsView.module.scss";
import RhombusIcon from "../../../assets/icons/rhombus.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Autoplay, Pagination} from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {regionGalleries} from "./constants";
import LeftArrowIcon from "../../../assets/icons/left_arrow.svg";
import RightArrowIcon from "../../../assets/icons/right_arrow.svg";
import React from "react";


function RegionDetailsView() {
    const {regionKey} = useParams<{ regionKey: string }>();
    const pageDetails = regions[regionKey || ""];
    const gallery = regionGalleries[regionKey || ""] || [pageDetails.img];
    return (
        <div className={styles.wrapper}>
            <div className={styles.mobileHero}>
                <Swiper
                    modules={[Navigation, FreeMode, Autoplay, Pagination]}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    pagination={{clickable: true}}
                    loop={true}
                    className={styles.heroSwiper}
                >
                    {gallery.map((src, idx) => (
                        <SwiperSlide key={idx}>
                            <div className={styles.heroSlide}>
                                <img src={src} alt={`${pageDetails.title} slide ${idx}`}/>
                                <div className={styles.overlay}>
                                    <h3 className={styles.heroTitle}>{pageDetails.title}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

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
                <h3>Колекція регіону</h3>
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
                        freeMode
                        pagination
                        navigation={{prevEl: "#shop-prev", nextEl: "#shop-next"}}
                        breakpoints={{
                            0: {slidesPerView: 2, spaceBetween: 5},
                            1000: {slidesPerView: 3, spaceBetween: 30},
                            1350: {slidesPerView: 4, spaceBetween: 75},
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
            </div>
        </div>
    );
}

export default RegionDetailsView;
