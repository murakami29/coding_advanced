//  Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 50,
  centeredSlides: true,
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 0,
      centeredSlides: false,
    }
  },
});
  
// フェードイン
jQuery(function($) {
  $(window).on('load scroll', function (){
    const box = $('.fadeIn');
    const animated = 'animated';
    
    box.each(function(){
      const boxOffset = $(this).offset().top;
      const scrollPos = $(window).scrollTop();
      const wh = $(window).height();
  
      if(scrollPos > boxOffset - wh + 100 ){
        $(this).addClass(animated);
      }
    });
  });
  })
    
