import React from "react";

import imagesSparkles from "../../images/sparkles.png";

export default function SparklesEffect() {
    return (
        <div>
            <div>
                <img
                    className="effect"
                    src={imagesSparkles}
                    alt="../../images/sparkles.png"
                />
            </div>
            <div>
                <img
                    className="effect"
                    src={imagesSparkles}
                    alt="../../images/sparkles.png"
                />
            </div>
            <div>
                <img
                    className="effect2"
                    src={imagesSparkles}
                    alt="../../images/sparkles.png"
                />
            </div>
        </div>
    );
}
