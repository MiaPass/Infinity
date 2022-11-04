import React, { useEffect } from "react";

/* COMPONENTS */

import Nav from "../Nav/Nav";
import Loading from "../Loading/Loading";
import Social from "../Social/Social";
import Servers from "../Servers/Servers";
import Footer from "../Footer/Footer";
import SparklesEffect from "../SparklesEffect/SparklesEffect";

/* AOS - ANIMATION 1 */

import AOS from "aos";
import "aos/dist/aos.css";

/* JS */

import "../../js/jquery-3.6.0.min";
import scrolled from "../../js/scroll";

// ordered as used

/* IMAGES */

import imagesLogo from "../../images/logo.png";

/* CSS */

import "../../css/main.css";
import "../../css/font.css";
import "../../css/loading.css";
import "../../css/inner.css";

/* JQUERY */

import $ from "jquery";

export default function PlayNow() {
    // eslint-disable-next-line react-hooks/exhaustive-deps

    useEffect(() => {
        AOS.init();
    }, []);

    // window.onload = loaded();
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
                <Nav page="PlayNow" />
                {/*end nav*/}
                <SparklesEffect />
                {/*inner content*/}
                <section className="inner container">
                    <div className="line"></div>
                    <div className="inner-title">How to Connect</div>
                    <div className="inner-content">
                        <div className="step">
                            <div className="step-number">
                                <span>
                                    <p>1</p>
                                </span>
                            </div>
                            <h1>[1] Download the Game Client</h1>
                            <div className="step-button">
                                <a href="/" target="_blank">
                                    MEGA
                                </a>
                                <a href="/" target="_blank">
                                    Direct Link
                                </a>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-number">
                                <span>
                                    <p>2</p>
                                </span>
                            </div>
                            <h1>[2] Download the Game Patch</h1>
                            <div className="step-button">
                                <a href="/" target="_blank">
                                    MEGA
                                </a>
                                <a href="/" target="_blank">
                                    Direct Link
                                </a>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-number">
                                <span>
                                    <p>3</p>
                                </span>
                            </div>
                            <h1>[3] Check the System Requirements</h1>
                            <div className="table">
                                <div>
                                    <span>Minimum</span>
                                    <div>
                                        <p>Windows</p>
                                        <p>7</p>
                                    </div>
                                    <div>
                                        <p>Windows</p>
                                        <p>7</p>
                                    </div>
                                    <div>
                                        <p>Windows</p>
                                        <p>7</p>
                                    </div>
                                    <div>
                                        <p>Windows</p>
                                        <p>7</p>
                                    </div>
                                </div>
                                <div>
                                    <span>Recommended</span>
                                    <div>
                                        <p>Windows</p>
                                        <p>10</p>
                                    </div>
                                    <div>
                                        <p>Windows</p>
                                        <p>10</p>
                                    </div>
                                    <div>
                                        <p>Windows</p>
                                        <p>10</p>
                                    </div>
                                    <div>
                                        <p>Windows</p>
                                        <p>10</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-number">
                                <span>
                                    <p>4</p>
                                </span>
                            </div>
                            <h1>[4] Something went wrong?</h1>
                            <div className="step-button">
                                <a href="/" target="_blank">
                                    Contact Us
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
