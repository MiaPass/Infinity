import $ from "jquery";

const scrolled = () => {
    if ($(this).scrollTop() > 25) {
        $("nav").addClass("nav-fixed");
    } else {
        $("nav").removeClass("nav-fixed");
    }
};

export default scrolled;
