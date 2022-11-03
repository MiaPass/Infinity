import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Index from "./components/Index/Index";
import About from "./components/About/About";
import Video from "./components/Video/Video";
import PlayNow from "./components/PlayNow/PlayNow";

import imagesFavicon from "./images/favicon.png";
import imagesSymbol from "./images/symbol.png";
import imagesUn1k from "./images/un1k.png";

import loaded from "./js/loading";

function App() {
    useEffect(() => {
        AOS.init();
        loaded(false);
        setTimeout(() => {
            loaded(true);
        }, 500);
    }, []);

    return (
        <div className="App">
            <head>
                <meta charSet="UTF-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>

                {/*Developed by un1k.digital*/}

                <link
                    rel="stylesheet"
                    href="https://unpkg.com/aos@2.3.1/dist/aos.css"
                ></link>

                {/*svg icon library*/}

                <title>Infinity Essence</title>
                <link rel="icon" type="image/x-icon" href={imagesFavicon}></link>
            </head>
            <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Video" element={<Video />} />
                <Route exact path="/PlayNow" element={<PlayNow />} />
            </Routes>
            {/*footer*/}
            <footer>
                <div className="container">
                    <div className="footer-support">
                        <p>
                            <img src={imagesSymbol} alt="../../images/symbol.png" />{" "}
                            In needed of help? Contact our Support anytime!
                        </p>
                        <a href="/" target="_blank">
                            Support Center
                        </a>
                    </div>
                    <div className="footer-copyright">
                        <div className="un1k">
                            <a
                                href="https://un1k.digital"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={imagesUn1k} alt="../../images/un1k.png" />
                                <span>
                                    Developed by
                                    <br />
                                    un1k.digital
                                </span>
                            </a>
                        </div>
                        <div className="copyright">
                            <div>
                                <a href="/">Terms of Service</a>
                                <a href="/">Privacy Policy</a>
                                <a href="/">Refund Policy</a>
                            </div>
                            <p>
                                These servers are an emulator of the Lineage 2
                                game.The use of the service is for informational
                                purposes only.
                                <br />
                                Copyright © 2022 Infinity Essence{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/*end footer*/}
        </div>
    );
}

export default App;
