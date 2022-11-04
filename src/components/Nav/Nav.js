import React from "react";

import imagesSymbol from "../../images/symbol.png";
import imagesLogo from "../../images/logo.png";

import "../../css/nav.css";

export default function Nav(page) {
    const actualpage = page.page;
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
        <nav>
            <ul className="nav-list">
                <span className="logo">
                    <img src={imagesSymbol} alt="../../images/symbol.png" />
                </span>
                <span className="logo2">
                    <img src={imagesLogo} alt="../../images/logo.png" />
                </span>
                <li>
                    <a className="nav-item active" href="/Home">
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
                    <a
                        className="nav-item start"
                        href={actualpage === "Index" ? "#playnow" : "/PlayNow"}
                    >
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
    );
}
