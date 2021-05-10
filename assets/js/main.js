$(function() {
    var header = document.getElementById("site-header-top");
    var scrollNavbar = document.getElementById("scroll-navbar");
    var sticky = header.offsetTop;

    $(window).on('scroll', function () { 
        if (window.pageYOffset > sticky) {
            
            if (screen.width <= 991 || screen.availWidth <= 991) {
                header.classList.add("sticky");
                header.classList.remove("onMoveHeader");
                scrollNavbar.classList.add("d-none");
                header.classList.remove("onMoveNavbar");
                console.log("passou")
            } else {
                header.classList.add("sticky");
                header.classList.add("onMoveHeader");
                scrollNavbar.classList.remove("d-none");
                header.classList.add("onMoveNavbar");
            }

        } else {
            header.classList.remove("sticky");
            header.classList.remove("onMoveHeader");
            scrollNavbar.classList.add("d-none");
            header.classList.remove("onMoveNavbar");
        }
    })
});

function animatedClose() {
    $('.animated-icon3').toggleClass('open');
    $('.mobile-menu').toggleClass('open');

}

$(function() {
    AOS.init();
});

