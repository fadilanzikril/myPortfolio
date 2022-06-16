// smooth scroll
$(document).ready(function () {
  $('.navbar-nav').on('click', 'a', function () {
    $('.navbar-nav a.active').removeClass('active');
    $(this).addClass('active');
  })
});
// navbar scroll color
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('.navbar').addClass('scrolled');
  } else {
    $('.navbar').removeClass('scrolled');
  }
});

// parallax profil
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $('.jumbo img').css({
    'transform': 'translate(0px, ' + wScroll / 3 + '%)'
  });
  $('.jumbo .name1').css({
    'transform': 'translate(0px, ' + wScroll / 4 + '%)'
  });
  $('.jumbo h1').css({
    'transform': 'translate(0px, ' + wScroll / 4 + '%)'
  });
  $('.jumbo .name2').css({
    'transform': 'translate(0px, ' + wScroll / 2 + '%)'
  });
  $('.jumbo .btncontak').css({
    'transform': 'translate(0px, ' + wScroll / 2 + '%)'
  });
});

// animasi text
var typed = new Typed(".tiping", {
  strings: ["College Student", "Developer", "Freelancer", "Web Design"],
  typeSpeed: 200,
  backSpeed: 100,
  loop: true
});
var typed = new Typed(".tiping2", {
  strings: ["HTML5", "CSS3", "JavaSript", "CSS Fameworks", "JavaScript DOM", "CSS Pre-processor", "API", "PHP", "MySQL"],
  typeSpeed: 200,
  backSpeed: 100,
  loop: true
});

// Slick js
$('.slickresponsive').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

// baca selengkapnya
// const parentContainer = document.querySelector('.read_container');
// parentContainer.addEventListener('click', event => {

//   const current = event.target;
//   const isbacaBtn = current.className.includes('btn_baca');
//   if (!isbacaBtn) return;
//   const currentText = event.target.parentNode.querySelector('.baca_text');
//   currentText.classList.toggle('baca_show');
//   current.textContent = current.textContent.includes('Selengkapnya') ? "Tutup" : "Selengkapnya...";
// });




