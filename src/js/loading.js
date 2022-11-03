import $ from "jquery";

const loaded = (valid) => {
    if (valid === true) {
        $("#loading").fadeOut(1500);

        $(".loading").addClass("scale-loading");

        $(".loading-logo").addClass("scale-loading");

        $(".loading").css("opacity", "0");

        $(".loading-logo").css("opacity", "0");

        $(".loading-progress-bar").css("opacity", "0");

        $(".loading-text").css("opacity", "0");
    }
};

export default loaded;
