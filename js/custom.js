$('.banner_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-long-arrow-alt-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-long-arrow-alt-right'></i></button>"
});


function myFunctionBtn() {
    var element = document.getElementById("nav_bar");
    element.classList.toggle("mystyle");
}