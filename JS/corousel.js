$(".owl-carousel").owlCarousel({
  // loop:true,
  // dots:true,
  // nav:true,
  // margin:10,
  // responsiveClass:true,
  // responsive:{
  //     0:{
  //         items:1,
  //         nav:true
  //     },
  //     600:{
  //         items:3,
  //         nav:false
  //     },
  //     1000:{
  //         items:3,
  //         nav:true,
  //         loop:false
  //     }
  // }
  center: false,
  items: 1,
  loop: true,
  stagePadding: 0,
  // nav: true,
  margin: 20,
  smartSpeed: 1000,
  autoplay: true,
  dots: true,
  pauseOnHover: false,
  responsive: {
    600: {
      margin: 20,
      items: 2,
      // nav:true,
    },
    1000: {
      margin: 20,
      stagePadding: 0,
      // nav:true,
      items: 3,
    },
  },
});
// $(".owl-prev").html('<i class="fa fa-chevron-left arrow-caro"></i>');
// $(".owl-next").html('<i class="fa fa-chevron-right arrow-caros"></i>');
$(".owl-carousel2").owlCarousel({
  // you can use jQuery selector
  nav:true,
  navText: [$('.am-next'),$('.am-prev')]

});
// $("#owl-example").owlCarousel({
//   nav: true,
//   navText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"]
// });
