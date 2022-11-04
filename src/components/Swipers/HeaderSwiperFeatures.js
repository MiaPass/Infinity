import React from "react";

/* SWIPER */

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Virtual, Navigation, Pagination } from "swiper";

/* JS */

import "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js";
import "../../js/swiper-bundle.min";

/* IMAGES */

import icons1 from "../../images/icons/1.png";
import icons2 from "../../images/icons/2.png";
import icons3 from "../../images/icons/3.png";
import icons4 from "../../images/icons/4.png";
import icons5 from "../../images/icons/5.png";

/* CSS */

import "../../css/swiper-bundle.min.css";
import "swiper/css";

SwiperCore.use([Virtual, Navigation, Pagination]);

export default function HeaderSwiperFeatures() {
    return (
        <Swiper
            className="swiper-wrapper"
            spaceBetween={10}
            slidesPerView={5}
            watchOverflow
            watchSlidesProgress
            breakpoints={{
                300: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                },
                769: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                },
            }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <div className="swiper-slide header-features-content">
                    <div
                        className="header-features-content-icon"
                        style={{ paddingTop: "10px" }}
                    >
                        <img src={icons1} alt="../../images/icons/1.png" />
                    </div>
                    <p>Text for some feature right here!</p>
                </div>
                {/**/}
            </SwiperSlide>
            <SwiperSlide>
                {/**/}
                <div className="swiper-slide header-features-content">
                    <div className="header-features-content-icon">
                        <img src={icons2} alt="../../images/icons/2.png" />
                    </div>
                    <p>Text for some feature right here!</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-slide header-features-content">
                    <div className="header-features-content-icon">
                        <img src={icons3} alt="../../images/icons/3.png" />
                    </div>
                    <p>Text for some feature right here!</p>
                </div>
                {/**/}
            </SwiperSlide>
            <SwiperSlide>
                {/**/}
                <div className="swiper-slide header-features-content">
                    <div className="header-features-content-icon">
                        <img src={icons4} alt="../../images/icons/4.png" />
                    </div>
                    <p>Text for some feature right here!</p>
                </div>
                {/**/}
            </SwiperSlide>
            <SwiperSlide>
                {/**/}
                <div className="swiper-slide header-features-content">
                    <div className="header-features-content-icon">
                        <img src={icons5} alt="../../images/icons/5.png" />
                    </div>
                    <p>Text for some feature right here!</p>
                </div>
                {/**/}
            </SwiperSlide>
        </Swiper>
    );
}
