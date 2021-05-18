$(function() {
    var header = document.getElementById("site-header-top");
    var scrollNavbar = document.getElementById("scroll-navbar");
    var sticky = header.offsetTop;

    $(window).on('scroll', function() {
        if (window.pageYOffset > sticky) {

            if (screen.width <= 991 || screen.availWidth <= 991) {
                header.classList.add("sticky");
                header.classList.remove("onMoveHeader");
                scrollNavbar.classList.remove("d-none");
                header.classList.remove("spaced-between");
                header.classList.remove("onMoveNavbar");
                
            } else {
                header.classList.add("sticky");
                header.classList.add("onMoveHeader");
                header.classList.add("spaced-between");
                scrollNavbar.classList.remove("d-none");
                header.classList.add("onMoveNavbar");
                
            }

        } else {
            header.classList.remove("sticky");
            header.classList.remove("onMoveHeader");
            header.classList.remove("spaced-between");
            scrollNavbar.classList.add("d-none");
            header.classList.remove("onMoveNavbar");
            
        }
    })
});



function animatedClose() {
    $('.animated-icon3').toggleClass('open');
    $('.mobile-menu').toggleClass('open');

}

// $(function() {
// if (screen.width <= 991 || screen.availWidth << 991) {
//     var slideIndicator = document.getElementById("slide_indicator");
//     var slide = document.getElementById("slide");
    
//     frameid.parentNode.removeChild(slideIndicator);
//     slideIndicator.remove()
//     slideIndicator.parentElement.removeChild(slideIndicator);
// }
// });



$(function() {
    AOS.init();

});

$(function() {

    var selectgrop = document.getElementById("multiple-optgroups");
    new SlimSelect({
        select: selectgrop
      })
});



