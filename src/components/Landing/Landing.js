/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";

/* COMPONENTS */

import SparklesEffect from "../SparklesEffect/SparklesEffect";

/* AOS - ANIMATION 1 */

import AOS from "aos";
import "aos/dist/aos.css";

/* IMAGES */

import imagesLogo from "../../images/logo.png";
import baner1 from "../../images/baner1.png";
import baner2 from "../../images/baner2.png";
import baner3 from "../../images/baner3.png";
import imagesLineServer from "../../images/line_server.png";

/* CSS */

import "../../css/landing.css";

export default function Landing() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="body">
            <div className="wrapper">
                <div className="content">
                    <main>
                        <SparklesEffect />
                        <div className="header">
                            <a href="/">
                                <img src={imagesLogo} alt="../../images/logo.png" />
                            </a>
                            <h1>CHOOSE YOUR SERVER</h1>
                            <p></p>
                        </div>
                        <div className="block_servers">
                            <a href="/Home" className="block_server block_server1">
                                <img
                                    className="image_server"
                                    src={baner1}
                                    alt="../../images/baner1.png"
                                />
                                {/* <div className="experience">Title</div> */}
                                {/* <img
                                    className="line_server"
                                    src={imagesLineServer}
                                    alt="../../images/line_server.png.png"
                                /> */}
                                <h3 className="name">Infinity Essence</h3>
                                <p>Some cool slogan right here</p>
                            </a>
                            <a href="#" className="block_server block_server2">
                                <img
                                    className="image_server"
                                    src={baner2}
                                    alt="../../images/baner2.png"
                                />
                                {/* <div className="experience">Title</div> */}
                                <img
                                    className="line_server"
                                    src={imagesLineServer}
                                    alt="../../images/line_server.png"
                                />
                                <h3 className="name">Infinity Essence</h3>
                                <p>Some cool slogan right here</p>
                            </a>
                            <a href="#" className="block_server block_server3">
                                <img
                                    className="image_server"
                                    src={baner3}
                                    alt="../../images/baner3.png"
                                />
                                <div className="experience">Title</div>
                                <img
                                    className="line_server"
                                    src={imagesLineServer}
                                    alt="../../images/line_server.png"
                                />
                                <h3 className="name">Infinity Essence</h3>
                                <p>Some cool slogan right here</p>
                            </a>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
