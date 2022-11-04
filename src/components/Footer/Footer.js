import React from "react";

import imagesSymbol from "../../images/symbol.png";
import imagesUn1k from "../../images/un1k.png";

export default function Footer() {
    return (
        <footer>
            {/*footer*/}
            <div className="container">
                <div className="footer-support">
                    <p>
                        <img src={imagesSymbol} alt="../../images/symbol.png" /> In
                        needed of help? Contact our Support anytime!
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
                            These servers are an emulator of the Lineage 2 game.The
                            use of the service is for informational purposes only.
                            <br />
                            Copyright © 2022 Infinity Essence{" "}
                        </p>
                    </div>
                </div>
            </div>
            {/*end footer*/}
        </footer>
    );
}
