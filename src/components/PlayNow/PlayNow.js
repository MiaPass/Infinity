import React, { useEffect } from "react";

/**/

import AOS from "aos";
import "aos/dist/aos.css";

/**/

import "../../js/jquery-3.6.0.min";

import "../../js/nav";
import scrolled from "../../js/scroll";

// ordered as used

//IMAGES

import imagesSymbol from "../../images/symbol.png";
import charsSylph from "../../images/chars/sylph.png";
import charsErtheia from "../../images/chars/ertheia.png";
import imagesLogo from "../../images/logo.png";
import imagesSparkles from "../../images/sparkles.png";

//CSS

import "../../css/main.css";
import "../../css/font.css";
import "../../css/nav.css";
import "../../css/loading.css";
import "../../css/inner.css";

import "swiper/css";

import $ from "jquery";

export default function PlayNow() {
    // eslint-disable-next-line react-hooks/exhaustive-deps

    useEffect(() => {
        AOS.init();
    }, []);

    // window.onload = loaded();
    $(window).trigger("scroll", scrolled());

    const handleNav = (e) => {
        e.preventDefault();
        let totalNav = {
            mobileMenu: document.querySelector(".mobile-menu"),
            navList: document.querySelector(".nav-list"),
            navLinks: document.querySelectorAll(".nav-list li"),
            activeClass: "active",
            handle1Click: handleClick.bind(this),
        };

        function handleClick() {
            totalNav.navList.classList.toggle(totalNav.activeClass);
            totalNav.mobileMenu.classList.toggle(totalNav.activeClass);
        }
        function addClickEvent() {
            totalNav.mobileMenu.addEventListener("click", totalNav.handle1Click);
        }

        function init() {
            if (totalNav.mobileMenu) {
                addClickEvent();
            }
            return totalNav;
        }

        init();
    };

    return (
        <div>
            {/*loading*/}
            <div id="loading" className="loading">
                <div className="logo-loading">
                    <img src={imagesSymbol} alt="../../images/symbol.png" />
                </div>
                <div className="loading-progress-bar"></div>
            </div>
            {/*end loading*/}
            <div className="page">
                {/*social*/}
                <div className="social">
                    <div>
                        <a
                            href="https://discord.gg/5xhBBXdtTy"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>
                                <i className="fa-brands fa-discord"></i>
                            </span>
                        </a>
                    </div>
                    <div>
                        <a href="/" target="_blank">
                            <span>
                                <i className="fa-brands fa-facebook"></i>
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
                                <div className="shadow"></div>
                                <img
                                    src={charsSylph}
                                    alt="../../images/chars/sylph.png"
                                />
                            </div>
                            <div className="server-content-bg orange"></div>
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
                                <div className="shadow"></div>
                                <img
                                    src={charsErtheia}
                                    alt="../../images/chars/ertheia.png"
                                />
                            </div>
                            <div className="server-content-bg red"></div>
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
                            <a className="nav-item start" href="/PlayNow">
                                <i className="fa-solid fa-angles-down"></i>
                                Start the Game
                            </a>
                        </li>
                    </ul>
                    <div className="mobile-menu" onClick={(e) => handleNav(e)}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    {/*nav right*/}
                    <div className="nav-right">
                        <span className="my-account">
                            <i className="fa-solid fa-user"></i>
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
                            <i className="fa-solid fa-earth-americas"></i>
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
        </div>
    );
}
