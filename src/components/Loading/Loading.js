import React from "react";

import imagesSymbol from "../../images/symbol.png";

import "../../css/loading.css";

export default function Loading() {
    return (
        <div id="loading" className="loading">
            <div className="logo-loading">
                <img src={imagesSymbol} alt="../../images/symbol.png" />
            </div>
            <div className="loading-progress-bar"></div>
        </div>
    );
}
