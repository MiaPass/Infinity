import React, { useState, useEffect } from "react";

/* COMPONENTS */

import Nav from "../Nav/Nav";
import Loading from "../Loading/Loading";
import Social from "../Social/Social";
import Servers from "../Servers/Servers";
import Footer from "../Footer/Footer";
import SparklesEffect from "../SparklesEffect/SparklesEffect";
import PayWPayPal from "../Forms/Donations/PayPal";
import PayWMPago from "../Forms/Donations/MercadoPago";
import PayWStripe from "../Forms/Donations/Stripe";

/* AOS - ANIMATION 1 */

import AOS from "aos";
import "aos/dist/aos.css";

/* JS */

import "../../js/jquery-3.6.0.min";
import scrolled from "../../js/scroll";

// ordered as used

/* IMAGES */

import imagesSymbol from "../../images/symbol.png";
import imagesLogo from "../../images/logo.png";
import banner1 from "../../images/banner/1.jpg";

/* CSS */

import "../../css/main.css";
import "../../css/font.css";
import "../../css/inner.css";

/* JQUERY */

import $ from "jquery";

export default function About() {
    useEffect(() => {
        AOS.init();
    }, []);

    // window.onload = loaded();
    $(window).trigger("scroll", scrolled());

    const [payType, setType] = useState("none");

    const handleClick = (e, type) => {
        e.preventDefault();
        if (payType === type) {
            setType("none");
        } else {
            setType(type);
        }
    };

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
                <Nav page="About" />
                {/*end nav*/}

                <SparklesEffect />

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
                                Donation
                            </h1>

                            <div>
                                <div className="table">
                                    <div>
                                        {payType !== "PayPal" ? (
                                            <button
                                                className="title"
                                                onClick={(e) =>
                                                    handleClick(e, "PayPal")
                                                }
                                            >
                                                PayPal
                                            </button>
                                        ) : (
                                            <PayWPayPal />
                                        )}
                                    </div>
                                </div>
                                <div className="table">
                                    <div>
                                        {payType !== "Mercado Pago" ? (
                                            <button
                                                className="title"
                                                onClick={(e) =>
                                                    handleClick(e, "Mercado Pago")
                                                }
                                            >
                                                Mercado Pago
                                            </button>
                                        ) : (
                                            <PayWMPago />
                                        )}
                                    </div>
                                </div>
                                <div className="table">
                                    <div>
                                        {payType !== "Stripe" ? (
                                            <button
                                                className="title"
                                                onClick={(e) =>
                                                    handleClick(e, "Stripe")
                                                }
                                            >
                                                Stripe
                                            </button>
                                        ) : (
                                            <PayWStripe />
                                        )}
                                    </div>
                                </div>
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
