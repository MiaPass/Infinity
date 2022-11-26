import React from "react";

/* SWIPER */

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Virtual, Navigation, Pagination } from "swiper";

/* IMAGES */

import store1 from "../../images/store/1.png";
import store2 from "../../images/store/2.png";
import store3 from "../../images/store/3.png";
import store4 from "../../images/store/4.png";

/* CSS */

import "../../css/swiper-bundle.min.css";

SwiperCore.use([Virtual, Navigation, Pagination]);

export default function StoreSwiperContent() {
    return (
        <Swiper
            className="swiper-wrapper"
            watchSlidesProgress
            watchOverflow
            breakpoints={{
                300: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                },
                769: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide className="swiper-slide store-content-item">
                {/*item 1*/}
                <a href="/">
                    <div className="tags">
                        <span className="hot">HOT</span>
                        <span className="discount">-50%</span>
                    </div>
                    <div className="store-content-item-icon">
                        <img src={store1} alt="../../images/store/1.png" />
                    </div>
                    <div className="store-content-item-info">
                        <p>Change Name [1 Unit]</p>
                        <span className="coin">
                            <span>C</span>9870
                        </span>
                        <div className="buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                            Buy
                        </div>
                    </div>
                </a>
                {/*end item 1*/}
            </SwiperSlide>
            <SwiperSlide className="swiper-slide store-content-item">
                {" "}
                {/*item 2*/}
                <a href="/">
                    <div className="tags">
                        <span className="discount">-50%</span>
                    </div>
                    <div className="store-content-item-icon">
                        <img src={store2} alt="../../images/store/2.png" />
                    </div>
                    <div className="store-content-item-info">
                        <p>Purple Potion [1 Unit]</p>
                        <span className="coin">
                            <span>C</span>9870
                        </span>
                        <div className="buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                            Buy
                        </div>
                    </div>
                </a>
                {/*end item 2*/}
            </SwiperSlide>
            <SwiperSlide className="swiper-slide store-content-item">
                {/*item 3*/}
                <a href="/">
                    <div className="tags">
                        <span className="hot">HOT</span>
                    </div>
                    <div className="store-content-item-icon">
                        <img src={store3} alt="../../images/store/3.png" />
                    </div>
                    <div className="store-content-item-info">
                        <p>L Coin [8000]</p>
                        <span className="coin">
                            <span>C</span>9870
                        </span>
                        <div className="buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                            Buy
                        </div>
                    </div>
                </a>
                {/*end item 3*/}
            </SwiperSlide>
            <SwiperSlide className="swiper-slide store-content-item">
                {/*item 4*/}
                <a href="/">
                    <div className="tags">
                        <span className="hot">HOT</span>
                    </div>
                    <div className="store-content-item-icon">
                        <img src={store4} alt="../../images/store/4.png" />
                    </div>
                    <div className="store-content-item-info">
                        <p>Red Potion [1 Unit]</p>
                        <span className="coin">
                            <span>C</span>9870
                        </span>
                        <div className="buy">
                            <i className="fa-solid fa-cart-shopping"></i>
                            Buy
                        </div>
                    </div>
                </a>
                {/*end item 4*/}
            </SwiperSlide>
        </Swiper>
    );
}
