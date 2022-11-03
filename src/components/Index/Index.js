import React, { useEffect } from "react";

/**/

import AOS from "aos";
import "aos/dist/aos.css";

/**/

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Navigation } from "swiper";
import "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js";

/**/

import "../../js/jquery-3.6.0.min";

import "../../js/nav";
import scrolled from "../../js/scroll";
import "../../js/swiper-bundle.min";

// ordered as used

//IMAGES

import imagesSymbol from "../../images/symbol.png";
import charsSylph from "../../images/chars/sylph.png";
import charsErtheia from "../../images/chars/ertheia.png";
import imagesLogo from "../../images/logo.png";
import imagesSparkles from "../../images/sparkles.png";
import icons1 from "../../images/icons/1.png";
import icons2 from "../../images/icons/2.png";
import icons3 from "../../images/icons/3.png";
import icons4 from "../../images/icons/4.png";
import icons5 from "../../images/icons/5.png";
import chars1 from "../../images/chars/1.png";
import store1 from "../../images/store/1.png";
import store2 from "../../images/store/2.png";
import chars2 from "../../images/chars/2.png";
import store3 from "../../images/store/3.png";
import store4 from "../../images/store/4.png";
import features1 from "../../images/features/1.jpg";
import features2 from "../../images/features/2.jpg";
import features3 from "../../images/features/3.jpg";

//CSS

import "../../css/font.css";
import "../../css/swiper-bundle.min.css";
import "../../css/nav.css";
import "../../css/loading.css";
import "../../css/main.css";

import "swiper/css";

import $ from "jquery";

import MobileNavbar from "../../js/nav";

SwiperCore.use([Navigation]);

export default function Index() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const mobileNavbar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li"
    );

    useEffect(() => {
        AOS.init();
        const mobileNavbar = new MobileNavbar(
            ".mobile-menu",
            ".nav-list",
            ".nav-list li"
        );
        mobileNavbar.init();
    }, [mobileNavbar]);

    $(window).trigger("scroll", scrolled());

    return (
        <div>
            {/*loading*/}
            <div id="loading" className="loading">
                <div className="logo-loading">
                    <img src={imagesSymbol} alt="../../images/symbol.png" />
                </div>
                <div className="loading-progress-bar" />
            </div>
            {/*end loading*/}

            {/*social*/}
            <div className="social">
                <div>
                    <a
                        href="https://discord.gg/5xhBBXdtTy"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>
                            <i className="fa-brands fa-discord" />
                        </span>
                    </a>
                </div>
                <div>
                    <a href="/" target="_blank">
                        <span>
                            <i className="fa-brands fa-facebook" />
                        </span>
                    </a>
                </div>
            </div>
            {/*end social*/}
            {/*servers*/}
            <div className="server">
                {/*server 1*/}
                <div className="server-content">
                    <div className="server-content-server">
                        <div className="server-content-img">
                            <div className="shadow" />
                            <img
                                src={charsSylph}
                                alt="../../images/chars/sylph.png"
                            />
                        </div>
                        <div className="server-content-bg orange" />
                    </div>
                    <div className="server-content-text">
                        <p>Essence x30</p>
                        <p className="online">3453</p>
                    </div>
                </div>
                {/*server 2*/}
                <div className="server-content">
                    <div className="server-content-server">
                        <div className="server-content-img">
                            <div className="shadow" />
                            <img
                                src={charsErtheia}
                                alt="../../images/chars/ertheia.png"
                            />
                        </div>
                        <div className="server-content-bg red" />
                    </div>
                    <div className="server-content-text">
                        <p>Essence x1000</p>
                        <p className="online">AUG 28</p>
                    </div>
                </div>
            </div>
            {/*end servers*/}
            {/*logo*/}
            <div className="logo-header">
                <img src={imagesLogo} alt="../../images/logo.png" />
            </div>
            {/*nav*/}
            <nav>
                <ul className="nav-list">
                    <span className="logo">
                        <img src={imagesSymbol} alt="../../images/symbol.png" />
                    </span>
                    <span className="logo2">
                        <img src={imagesLogo} alt="../../images/logo.png" />
                    </span>
                    <li>
                        <a className="nav-item active" href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="nav-item" href="/About">
                            Game Description
                        </a>
                    </li>
                    <li>
                        <a className="nav-item" href="/Video">
                            Media
                        </a>
                    </li>
                    <li>
                        <a className="nav-item start" href="#playnow">
                            <i className="fa-solid fa-angles-down" />
                            Start the Game
                        </a>
                    </li>
                </ul>
                <div className="mobile-menu">
                    <div className="line1" />
                    <div className="line2" />
                    <div className="line3" />
                </div>
                {/*nav right*/}
                <div className="nav-right">
                    <span className="my-account">
                        <i className="fa-solid fa-user" />
                        <div className="my-account-dropdown">
                            <a className="login" href="/">
                                Login
                            </a>
                            <a className="register" href="/">
                                Create your Account
                            </a>
                        </div>
                    </span>
                    <span className="lang">
                        <i className="fa-solid fa-earth-americas" />
                        <div className="lang-dropdown">
                            <a href="/">Português</a>
                            <a href="/">Español</a>
                            <a href="/">русский</a>
                            <a href="/">한국어</a>
                            <a href="/">中国人</a>
                        </div>
                    </span>
                </div>
                {/*end nav right*/}
            </nav>
            {/*end nav*/}
            {/*header*/}
            <header>
                <div>
                    <img
                        className="effect"
                        src={imagesSparkles}
                        alt="../../images/sparkles.png"
                    />
                </div>
                <div>
                    <img
                        className="effect"
                        src={imagesSparkles}
                        alt="../../images/sparkles.png"
                    />
                </div>
                <div>
                    <img
                        className="effect2"
                        src={imagesSparkles}
                        alt="../../images/sparkles.png"
                    />
                </div>
                <div className="container">
                    {/*text and button*/}
                    <div
                        className="header-headline"
                        data-aos="fade-up"
                        data-aos-duration={2000}
                    >
                        <p>Some cool slogan right here, Infinity Essence</p>
                    </div>
                    <div className="header-button">
                        <a href="#playnow">START THE GAME</a>
                    </div>
                    {/*end text and button*/}
                    {/*header features*/}
                    <div className="header-features">
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
                                        <img
                                            src={icons1}
                                            alt="../../images/icons/1.png"
                                        />
                                    </div>
                                    <p>Text for some feature right here!</p>
                                </div>
                                {/**/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/**/}
                                <div className="swiper-slide header-features-content">
                                    <div className="header-features-content-icon">
                                        <img
                                            src={icons2}
                                            alt="../../images/icons/2.png"
                                        />
                                    </div>
                                    <p>Text for some feature right here!</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide header-features-content">
                                    <div className="header-features-content-icon">
                                        <img
                                            src={icons3}
                                            alt="../../images/icons/3.png"
                                        />
                                    </div>
                                    <p>Text for some feature right here!</p>
                                </div>
                                {/**/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/**/}
                                <div className="swiper-slide header-features-content">
                                    <div className="header-features-content-icon">
                                        <img
                                            src={icons4}
                                            alt="../../images/icons/4.png"
                                        />
                                    </div>
                                    <p>Text for some feature right here!</p>
                                </div>
                                {/**/}
                            </SwiperSlide>
                            <SwiperSlide>
                                {/**/}
                                <div className="swiper-slide header-features-content">
                                    <div className="header-features-content-icon">
                                        <img
                                            src={icons5}
                                            alt="../../images/icons/5.png"
                                        />
                                    </div>
                                    <p>Text for some feature right here!</p>
                                </div>
                                {/**/}
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    {/*end header features*/}
                </div>
            </header>
            {/*end header*/}
            {/*middle content*/}
            <section className="middle">
                {/*store character*/}
                <div className="char1">
                    <img src={chars1} alt="../../images/chars/1.png" />
                </div>
                {/*end store character*/}
                {/*topline*/}
                <div className="line" />
                {/*end topline*/}

                {/*features*/}
                <div className="features">
                    <div className="container">
                        <div
                            className="features-title"
                            data-aos="fade-up"
                            data-aos-duration={2000}
                        >
                            <img src={imagesSymbol} alt="../images/symbol.png" />
                            <p>Infinity Game Mechanics</p>
                        </div>
                        {/*features slide*/}
                        <div className="features-content">
                            {/*controls*/}
                            <div className="swiper-button-prev features-content-prev">
                                <i className="fa-solid fa-chevron-left" />
                            </div>
                            <div className="swiper-button-next features-content-next">
                                <i className="fa-solid fa-chevron-right" />
                            </div>
                            {/*end controls*/}

                            <Swiper
                                className="swiper-wrapper"
                                spaceBetween={10}
                                slidesPerView={3}
                                navigation={{
                                    prevEl: ".swiper-button-prev",
                                    nextEl: ".swiper-button-next",
                                    // clickable: true,
                                }}
                                watchSlidesProgress
                                breakpoints={{
                                    300: {
                                        slidesPerView: 1,
                                        spaceBetween: 25,
                                    },
                                    769: {
                                        slidesPerView: 3,
                                        spaceBetween: 40,
                                    },
                                }}
                            >
                                {/*slide 1*/}
                                <SwiperSlide className="swiper-slide">
                                    <div className="features-content-slide">
                                        <div className="div" />
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
                                                                <p>
                                                                    Some feature
                                                                    title right here!
                                                                </p>
                                                                <a href="/">
                                                                    <i className="fa-solid fa-plus" />
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
                                        <div className="div" />
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
                                                                <p>
                                                                    Some feature
                                                                    title right here!
                                                                </p>
                                                                <a href="/">
                                                                    <i className="fa-solid fa-plus" />
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
                                        <div className="div" />
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
                                                                <p>
                                                                    Some feature
                                                                    title right here!
                                                                </p>
                                                                <a href="/">
                                                                    <i className="fa-solid fa-plus" />
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
                                        <div className="div" />
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
                                                                <p>
                                                                    Some feature
                                                                    title right here!
                                                                </p>
                                                                <a href="/">
                                                                    <i className="fa-solid fa-plus" />
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
                                        <div className="div" />
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
                                                                <p>
                                                                    Some feature
                                                                    title right here!
                                                                </p>
                                                                <a href="/">
                                                                    <i className="fa-solid fa-plus" />
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
                                {/*slide 6*/}
                                <SwiperSlide className="swiper-slide">
                                    <div className="features-content-slide">
                                        <div className="div" />
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
                                                                <p>
                                                                    Some feature
                                                                    title right here!
                                                                </p>
                                                                <a href="/">
                                                                    <i className="fa-solid fa-plus" />
                                                                    Read More
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end slide 6*/}
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    {/*end features slides*/}
                    {/*go to link*/}
                    <div className="features-goto">
                        <a href="/">
                            Go to Game Description{" "}
                            <i className="fa-solid fa-angles-right" />
                        </a>
                    </div>
                    {/*end go to link*/}
                </div>

                {/*store*/}
                <div className="store">
                    <div className="container">
                        <div
                            className="store-title"
                            data-aos="fade-up"
                            data-aos-duration={2000}
                        >
                            <img src={imagesSymbol} alt="../../images/symbol.png" />
                            <p>Infinity Store</p>
                        </div>
                        {/*store content*/}
                        <div className="store-content">
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
                                            <img
                                                src={store1}
                                                alt="../../images/store/1.png"
                                            />
                                        </div>
                                        <div className="store-content-item-info">
                                            <p>Change Name [1 Unit]</p>
                                            <span className="coin">
                                                <span>C</span>9870
                                            </span>
                                            <div className="buy">
                                                <i className="fa-solid fa-cart-shopping" />
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
                                            <img
                                                src={store2}
                                                alt="../../images/store/2.png"
                                            />
                                        </div>
                                        <div className="store-content-item-info">
                                            <p>Purple Potion [1 Unit]</p>
                                            <span className="coin">
                                                <span>C</span>9870
                                            </span>
                                            <div className="buy">
                                                <i className="fa-solid fa-cart-shopping" />
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
                                            <img
                                                src={store3}
                                                alt="../../images/store/3.png"
                                            />
                                        </div>
                                        <div className="store-content-item-info">
                                            <p>L Coin [8000]</p>
                                            <span className="coin">
                                                <span>C</span>9870
                                            </span>
                                            <div className="buy">
                                                <i className="fa-solid fa-cart-shopping" />
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
                                            <img
                                                src={store4}
                                                alt="../../images/store/4.png"
                                            />
                                        </div>
                                        <div className="store-content-item-info">
                                            <p>Red Potion [1 Unit]</p>
                                            <span className="coin">
                                                <span>C</span>9870
                                            </span>
                                            <div className="buy">
                                                <i className="fa-solid fa-cart-shopping" />
                                                Buy
                                            </div>
                                        </div>
                                    </a>
                                    {/*end item 4*/}
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        {/*end store content*/}
                        {/*go to link*/}
                        <div className="store-goto">
                            <a href="/" target="_blank">
                                Go to Full Store{" "}
                                <i className="fa-solid fa-angles-right" />
                            </a>
                        </div>
                        {/*end go to link*/}
                    </div>
                </div>
                {/*end store*/}
            </section>
            {/*char 2 -playnow*/}
            <div className="char2">
                <img src={chars2} alt="../../images/chars/2.png" />
            </div>
            {/*end char 2 -playnow*/}
            {/*play*/}
            <section id="playnow" className="playnow">
                <div className="container">
                    <div
                        className="playnow-title"
                        data-aos="fade-up"
                        data-aos-duration={2000}
                    >
                        <img src={imagesSymbol} alt="../../images/symbol.png" />
                        <p>Play till the Infinity!</p>
                    </div>
                    <div className="playnow-button">
                        <a href="/PlayNow">Download Files</a>
                    </div>
                    <div className="playnow-create">
                        <a href="/" target="_blank">
                            Create your master account
                            <i className="fa-solid fa-angles-right" />
                        </a>
                    </div>
                </div>
            </section>
            {/*end play*/}
        </div>
    );
}
