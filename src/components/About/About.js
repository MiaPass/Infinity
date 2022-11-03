import React, { useEffect } from "react";

import MobileNavbar from "../../js/nav";

/**/

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
import banner1 from "../../images/banner/1.jpg";

//CSS

import "../../css/main.css";
import "../../css/font.css";
import "../../css/nav.css";
import "../../css/loading.css";
import "../../css/inner.css";

import "swiper/css";

import $ from "jquery";

export default function About() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const mobileNavbar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li"
    );

    useEffect(() => {
        mobileNavbar.init();
    }, [mobileNavbar]);

    // window.onload = loaded();
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
                    <div className="mobile-menu">
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
                    <div className="inner-title">
                        About: <span>Infinity Essence</span>
                    </div>
                    <div className="inner-content">
                        {/*topic 1*/}
                        <div id="topic1" className="topic">
                            <h1>
                                <img
                                    src={imagesSymbol}
                                    alt="../../images/symbol.png"
                                />
                                The brand new Infinity Essence!{" "}
                            </h1>
                            <img src={banner1} alt="../../images/banner/1.jpg" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Vel unde, facilis voluptatum possimus fuga enim
                                dolores consequatur quia voluptates ad numquam magni
                                itaque, adipisci quas alias sunt asperiores quae
                                magnam?
                            </p>
                            <p>
                                <strong>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Corrupti, minima!
                                </strong>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Nulla voluptatibus, ex ipsam, velit eum quis id
                                reprehenderit officiis vel ratione debitis incidunt,
                                ipsa reiciendis repudiandae quia possimus? Amet
                                earum, iure molestiae laborum consectetur totam
                                aliquam laudantium quae modi neque placeat
                                consequatur est et nam, officiis asperiores
                                perferendis ipsa distinctio maiores? Eum, nam?
                                Laudantium vel earum tempore inventore nam voluptates
                                sapiente natus, explicabo magni necessitatibus fugiat
                                expedita corrupti iste eum voluptatum dolore laborum
                                nihil id atque adipisci cum harum. Beatae, obcaecati.
                            </p>
                        </div>
                        {/*topic 2*/}
                        <div id="topic2" className="topic">
                            <h1>
                                <img
                                    src={imagesSymbol}
                                    alt="../../images/symbol.png"
                                />
                                Some information with Table
                            </h1>
                            <p>
                                <strong>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Atque, labore!
                                </strong>
                            </p>
                            <div className="table">
                                <div>
                                    <div className="title">Table title</div>
                                    <div>Table 1</div>
                                    <div>Table 2</div>
                                    <div>Table 3</div>
                                    <div>Table 4</div>
                                    <div>Table 5</div>
                                    <div>Table 6</div>
                                </div>
                                <div>
                                    <div className="title">Table title</div>
                                    <div>Table 1</div>
                                    <div>Table 2</div>
                                    <div>Table 3</div>
                                    <div>Table 4</div>
                                    <div>Table 5</div>
                                    <div>Table 6</div>
                                </div>
                                <div>
                                    <div className="title">Table title</div>
                                    <div>Table 1</div>
                                    <div>Table 2</div>
                                    <div>Table 3</div>
                                    <div>Table 4</div>
                                    <div>Table 5</div>
                                    <div>Table 6</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
