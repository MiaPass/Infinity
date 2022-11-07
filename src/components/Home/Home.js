import React, { useEffect } from "react";

/* COMPONENTS */

import Nav from "../Nav/Nav";
import Loading from "../Loading/Loading";
import Social from "../Social/Social";
import Servers from "../Servers/Servers";
import Footer from "../Footer/Footer";
import SparklesEffect from "../SparklesEffect/SparklesEffect";
import HeaderSwiperFeatures from "../Swipers/HeaderSwiperFeatures";
import FeaturesSwiperContent from "../Swipers/FeaturesSwiperContent";
import StoreSwiperContent from "../Swipers/StoreSwiperContent";

/* AOS - ANIMATION 1 */

import AOS from "aos";
import "aos/dist/aos.css";

/* SWIPER - CAROUSEL*/

/* JS */

import "../../js/jquery-3.6.0.min";
import scrolled from "../../js/scroll";

// ordered as used

/* IMAGES */

import bg1 from "../../images/bg/1.jpg";
import imagesSymbol from "../../images/symbol.png";
import imagesLogo from "../../images/logo.png";
import chars1 from "../../images/chars/1.png";
import chars2 from "../../images/chars/2.png";

/* CSS */

import "../../css/font.css";
import "../../css/main.css";

/* JQUERY */

import $ from "jquery";

export default function Home() {
    useEffect(() => {
        AOS.init();
    });

    $(window).trigger("scroll", scrolled());

    return (
        <div>
            {/*loading*/}
            <Loading />
            {/*end loading*/}

            {/*social*/}
            <Social />
            {/*end social*/}

            {/*servers*/}
            <Servers />
            {/*end servers*/}

            {/*logo*/}
            <div className="logo-header">
                <img src={imagesLogo} alt="../../images/logo.png" />
            </div>
            {/*nav*/}
            <Nav page="Index" />
            {/*end nav*/}

            {/*header*/}
            <header
                style={{
                    background: `url(${bg1}) top no-repeat `,
                    marginTop: -18,
                }}
            >
                <SparklesEffect />

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
                        <HeaderSwiperFeatures />
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
                <div className="line"></div>
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
                                <i className="fa-solid fa-chevron-left"></i>
                            </div>
                            <div className="swiper-button-next features-content-next">
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>
                            {/*end controls*/}

                            <FeaturesSwiperContent />
                        </div>

                        {/*end features slides*/}
                        {/*go to link*/}
                        <div className="features-goto">
                            <a href="/">
                                Go to Game Description{" "}
                                <i className="fa-solid fa-angles-right"></i>
                            </a>
                        </div>
                        {/*end go to link*/}
                    </div>
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
                            <StoreSwiperContent />
                        </div>
                        {/*end store content*/}
                        {/*go to link*/}
                        <div className="store-goto">
                            <a href="/" target="_blank">
                                Go to Full Store{" "}
                                <i className="fa-solid fa-angles-right"></i>
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
                            <i className="fa-solid fa-angles-right"></i>
                        </a>
                    </div>
                </div>
            </section>
            {/*end play*/}

            {/*footer*/}
            <Footer />
            {/*end footer*/}
        </div>
    );
}
