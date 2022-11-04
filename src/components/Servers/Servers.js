import React from "react";

import charsSylph from "../../images/chars/sylph.png";
import charsErtheia from "../../images/chars/ertheia.png";

export default function Servers() {
    return (
        <div className="server">
            {/*server 1*/}
            <div className="server-content">
                <div className="server-content-server">
                    <div className="server-content-img">
                        <div className="shadow"></div>
                        <img src={charsSylph} alt="../../images/chars/sylph.png" />
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
            {/*server 3*/}
            <div className="server-content">
                <div className="server-content-server">
                    <div className="server-content-img">
                        <div className="shadow"></div>
                        <img src={charsSylph} alt="../../images/chars/ertheia.png" />
                    </div>
                    <div className="server-content-bg red"></div>
                </div>
                <div className="server-content-text">
                    <p>Essence x1000</p>
                    <p className="online">AUG 28</p>
                </div>
            </div>
        </div>
    );
}
