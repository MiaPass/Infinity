import React from "react";

export default function Social() {
    return (
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
                        <i className="fa-brands fa-youtube"></i>
                    </span>
                </a>
            </div>
        </div>
    );
}
