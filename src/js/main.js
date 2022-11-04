jQuery(document).on("ready", function ($) {
    $(".left_content > div").hover(function () {
        $(".wrapper").toggleClass("hover_left");
        $(".logo").toggleClass("hover");
    });
    $(".right_content > div").hover(function () {
        $(".wrapper").toggleClass("hover_right");
        $(".logo").toggleClass("hover");
    });
});

function windowSize() {
    if ($(window).width() <= "1920") {
        let default_width = 1920;
        let procent_full = 100;
        let procent = default_width / procent_full;
        let this_width = $("body").width();
        let part_procent = (this_width * procent_full) / default_width.toFixed(2);
        let zoom = part_procent / procent_full;
        $(".left_content > div, .right_content > div").css("zoom", zoom);
    } else {
    }
}

window.addEventListener("load", (event) => {
    windowSize();
});
window.onresize = windowSize;

$(window).on("load", function () {
    setTimeout(function () {
        $(".left_content, .right_content").addClass("loaded");
    }, 200);
    setTimeout(function () {
        $(".footer_content").addClass("loaded");
    }, 700);
});
