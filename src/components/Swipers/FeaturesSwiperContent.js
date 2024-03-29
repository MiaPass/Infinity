import React from "react";

/* SWIPER */

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Virtual, Mousewheel, Navigation, Autoplay } from "swiper";

/* IMAGES */

import features1 from "../../images/features/1.jpg";
import features2 from "../../images/features/2.jpg";
import features3 from "../../images/features/3.jpg";

/* CSS */

import "../../css/swiper-bundle.min.css";

SwiperCore.use([Virtual, Navigation, Mousewheel, Autoplay]);

export default function FeaturesSwiperContent() {
    return (
        <Swiper
            // className="swiper-wrapper"
            mousewheel
            spaceBetween={10}
            watchOverflow
            slidesPerView={3}
            navigation={{
                prevEl: ".features-content-prev",
                nextEl: ".features-content-next",
            }}
            watchSlidesProgress
            breakpoints={{
                300: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                },
                769: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
        >
            {/*slide 1*/}
            <SwiperSlide className="swiper-slide">
                <div className="features-content-slide">
                    <div className="div"></div>
                    <div className="div1">
                        <div className="div2">
                            <div className="div3">
                                <div
                                    className="div4"
                                    style={{
                                        background: `url(${features1}) center no-repeat`,
                                    }}
                                >
                                    <div className="div5">
                                        <div className="features-content-slide-info">
                                            <p>Some feature title right here!</p>
                                            <a href="/">
                                                <i className="fa-solid fa-plus"></i>
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/*end slide 1*/}
            {/*slide 2*/}
            <SwiperSlide className="swiper-slide">
                <div className="features-content-slide">
                    <div className="div"></div>
                    <div className="div1">
                        <div className="div2">
                            <div className="div3">
                                <div
                                    className="div4"
                                    style={{
                                        background: `url(${features2}) center no-repeat`,
                                    }}
                                >
                                    <div className="div5">
                                        <div className="features-content-slide-info">
                                            <p>Some feature title right here!</p>
                                            <a href="/">
                                                <i className="fa-solid fa-plus"></i>
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/*end slide 2*/}
            {/*slide 3*/}
            <SwiperSlide className="swiper-slide">
                <div className="features-content-slide">
                    <div className="div"></div>
                    <div className="div1">
                        <div className="div2">
                            <div className="div3">
                                <div
                                    className="div4"
                                    style={{
                                        background: `url(${features3}) center no-repeat`,
                                    }}
                                >
                                    <div className="div5">
                                        <div className="features-content-slide-info">
                                            <p>Some feature title right here!</p>
                                            <a href="/">
                                                <i className="fa-solid fa-plus"></i>
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/*end slide 3*/}
            {/*slide 4*/}
            <SwiperSlide className="swiper-slide">
                <div className="features-content-slide">
                    <div className="div"></div>
                    <div className="div1">
                        <div className="div2">
                            <div className="div3">
                                <div
                                    className="div4"
                                    style={{
                                        background: `url(${features1}) center no-repeat`,
                                    }}
                                >
                                    <div className="div5">
                                        <div className="features-content-slide-info">
                                            <p>Some feature title right here!</p>
                                            <a href="/">
                                                <i className="fa-solid fa-plus"></i>
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/*end slide 4*/}
            {/*slide 5*/}
            <SwiperSlide className="swiper-slide">
                <div className="features-content-slide">
                    <div className="div"></div>
                    <div className="div1">
                        <div className="div2">
                            <div className="div3">
                                <div
                                    className="div4"
                                    style={{
                                        background: `url(${features2}) center no-repeat`,
                                    }}
                                >
                                    <div className="div5">
                                        <div className="features-content-slide-info">
                                            <p>Some feature title right here!</p>
                                            <a href="/">
                                                <i className="fa-solid fa-plus"></i>
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/*end slide 5*/}
        </Swiper>
    );
}
