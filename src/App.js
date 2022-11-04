import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

/* COMPONENTS */

import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Video from "./components/Video/Video";
import PlayNow from "./components/PlayNow/PlayNow";

/* AOS - ANIMATION 1 */

import AOS from "aos";
import "aos/dist/aos.css";

/* JS */

import loaded from "./js/loading";

/* IMAGES */

import imagesFavicon from "./images/favicon.png";

function App() {
    useEffect(() => {
        AOS.init();
        loaded(false);
        setTimeout(() => {
            loaded(true);
        }, 700);
    }, []);

    return (
        <div className="App">
            <div className="head">
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
            </div>
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/Home" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Video" element={<Video />} />
                <Route exact path="/PlayNow" element={<PlayNow />} />
            </Routes>
        </div>
    );
}

export default App;
