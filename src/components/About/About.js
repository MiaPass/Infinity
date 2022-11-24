import React, { useState, useEffect } from "react";

/* COMPONENTS */

import Nav from "../Nav/Nav";
import Loading from "../Loading/Loading";
import Social from "../Social/Social";
import Servers from "../Servers/Servers";
import Footer from "../Footer/Footer";
import SparklesEffect from "../SparklesEffect/SparklesEffect";
import PayWPayPal from "../Donations/PayPal";
import PayWMPago from "../Donations/MercadoPago";
import PayWStripe from "../Donations/Stripe";

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
                                        <button
                                            style={{
                                                marginTop: 30,
                                            }}
                                            className={
                                                payType === "PayPal"
                                                    ? "titleActive"
                                                    : "titleInactive"
                                            }
                                            onClick={(e) => handleClick(e, "PayPal")}
                                        >
                                            PayPal
                                        </button>

                                        {payType !== "PayPal" ? (
                                            <span
                                                style={{
                                                    visibility: "hidden",
                                                }}
                                            >
                                                {/* <PayWPayPal /> */}
                                            </span>
                                        ) : (
                                            <span
                                                style={{
                                                    visibility: "visible",

                                                    marginTop: 10,
                                                }}
                                            >
                                                <PayWPayPal />
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <button
                                            style={{
                                                marginTop: 30,
                                            }}
                                            className={
                                                payType === "Mercado Pago"
                                                    ? "titleActive"
                                                    : "titleInactive"
                                            }
                                            onClick={(e) =>
                                                handleClick(e, "Mercado Pago")
                                            }
                                        >
                                            Mercado Pago
                                        </button>

                                        {payType !== "Mercado Pago" ? (
                                            <span
                                                style={{
                                                    visibility: "hidden",
                                                }}
                                            >
                                                {/* <PayWMPago /> */}
                                            </span>
                                        ) : (
                                            <span
                                                style={{
                                                    visibility: "visible",

                                                    marginTop: 30,
                                                }}
                                            >
                                                <PayWMPago />
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <button
                                            style={{
                                                marginTop: 30,
                                            }}
                                            className={
                                                payType === "Stripe"
                                                    ? "titleActive"
                                                    : "titleInactive"
                                            }
                                            onClick={(e) => handleClick(e, "Stripe")}
                                        >
                                            Stripe
                                        </button>

                                        {payType !== "Stripe" ? (
                                            <span
                                                style={{
                                                    visibility: "hidden",
                                                }}
                                            >
                                                {/* <PayWStripe /> */}
                                            </span>
                                        ) : (
                                            <span
                                                style={{
                                                    visibility: "visible",

                                                    marginTop: 60,
                                                    marginLeft: 50,
                                                }}
                                            >
                                                <PayWStripe />
                                            </span>
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
