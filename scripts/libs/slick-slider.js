"use strict";

$(".slick__items").slick({
  arrows: false,
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     fade:true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //   },
    // },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
