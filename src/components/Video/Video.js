import React, { useEffect } from "react";

/* COMPONENTS */

import Nav from "../Nav/Nav";
import Loading from "../Loading/Loading";
import Social from "../Social/Social";
import Servers from "../Servers/Servers";
import Footer from "../Footer/Footer";
import SparklesEffect from "../SparklesEffect/SparklesEffect";

/* AOS - ANIMATION 1*/

import AOS from "aos";
import "aos/dist/aos.css";

/* JS*/

import "../../js/jquery-3.6.0.min";
import scrolled from "../../js/scroll";

// ordered as used

/* IMAGES */

import imagesLogo from "../../images/logo.png";
import bg1 from "../../images/bg/1.jpg";

/* CSS */

import "../../css/font.css";
import "../../css/main.css";
import "../../css/inner.css";
import "../../css/fancybox.css";

/* JQUERY */

import $ from "jquery";

export default function Video() {
    useEffect(() => {
        AOS.init();
    }, []);

    $(window).trigger("scroll", scrolled());

    return (
        <div>
            {/*loading*/}
            <Loading />
            {/*end loading*/}
            <div className="page">
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
                <Nav page="Video" />
                {/*end nav*/}
                <SparklesEffect />
                {/*inner content*/}
                <section className="inner container">
                    <div className="line"></div>
                    <div className="inner-title">Media</div>
                    <div className="inner-content">
                        <div className="video">
                            <div className="video-content">
                                <a
                                    href="https://www.youtube.com/watch?v=ogZPQtZPTfU"
                                    data-fancybox="group-1"
                                >
                                    <div>
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                    <img src={bg1} alt="../../images/bg/1.jpg" />
                                </a>
                            </div>
                            <div className="video-content">
                                <a
                                    href="https://www.youtube.com/watch?v=ogZPQtZPTfU"
                                    data-fancybox="group-1"
                                >
                                    <div>
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                    <img src={bg1} alt="../../images/bg/1.jpg" />
                                </a>
                            </div>
                            <div className="video-content">
                                <a
                                    href="https://www.youtube.com/watch?v=ogZPQtZPTfU"
                                    data-fancybox="group-1"
                                >
                                    <div>
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                    <img src={bg1} alt="../../images/bg/1.jpg" />
                                </a>
                            </div>
                            <div className="video-content">
                                <a
                                    href="https://www.youtube.com/watch?v=ogZPQtZPTfU"
                                    data-fancybox="group-1"
                                >
                                    <div>
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                    <img src={bg1} alt="../../images/bg/1.jpg" />
                                </a>
                            </div>
                            <div className="video-content">
                                <a
                                    href="https://www.youtube.com/watch?v=ogZPQtZPTfU"
                                    data-fancybox="group-1"
                                >
                                    <div>
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                    <img src={bg1} alt="../../images/bg/1.jpg" />
                                </a>
                            </div>
                            <div className="video-content">
                                <a
                                    href="https://www.youtube.com/watch?v=ogZPQtZPTfU"
                                    data-fancybox="group-1"
                                >
                                    <div>
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                    <img src={bg1} alt="../../images/bg/1.jpg" />
                                </a>
                            </div>
                            <div className="video-content">
                                <a
                                    href="https://www.youtube.com/watch?v=ogZPQtZPTfU"
                                    data-fancybox="group-1"
                                >
                                    <div>
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                    <img src={bg1} alt="../../images/bg/1.jpg" />
                                </a>
                            </div>
                            <div className="video-content">
                                <a
                                    href="https://www.youtube.com/watch?v=ogZPQtZPTfU"
                                    data-fancybox="group-1"
                                >
                                    <div>
                                        <i className="fa-solid fa-play"></i>
                                    </div>
                                    <img src={bg1} alt="../../images/bg/1.jpg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/*footer*/}
            <Footer />
            {/*end footer*/}
        </div>
    );
}
