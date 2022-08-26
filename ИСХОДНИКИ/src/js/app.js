import * as flsFunctions from "./modules/functions.js";
import PhotoSwipeLightbox from '../../node_modules/photoswipe/dist/photoswipe-lightbox.esm.js';
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
import { auto } from "@popperjs/core";
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// // Burger
// const btnMenu = document.querySelector('#toggle');
// const menu = document.querySelector('.header__nav');
// const bodyEl = document.querySelector('body');
// let navItemAll = document.querySelectorAll('.header__nav-item');

// const menuLine1 = document.querySelector('.top-bun');
// const menuLine2 = document.querySelector('.meat');
// const menuLine3 = document.querySelector('.bottom-bun');

// const toggleMenu = function () {
//   menu.classList.toggle('open');
// }
// const toggleBurger = function () {
//   btnMenu.classList.toggle('active');
// }
// const toggleMenuLine = function () {
//   menuLine1.classList.toggle('active');
//   menuLine2.classList.toggle('active');
//   menuLine3.classList.toggle('active');
// }
// const bodyOverflow = function () {
//   bodyEl.classList.toggle('hidden');
// }
// btnMenu.addEventListener('click', function (e) {
//   e.stopPropagation();
//   toggleMenu();
//   toggleBurger();
//   bodyOverflow();
//   toggleMenuLine();
// });



// Инициализация слайдера team__slider
const teamSlider = document.querySelector('.team__slider');
var mySwiperTeam = new Swiper(teamSlider, {
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 800,
  navigation: {
    nextEl: '.team .navigation-next',
    prevEl: '.team .navigation-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
			spaceBetween: 13,
    },
		575: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
    1200: {
      slidesPerView: 2,
    },
  },
});

// Инициализация слайдера reviews__slider
const reviewsSlider = document.querySelector('.reviews__slider');
var mySwiperReviews = new Swiper(reviewsSlider, {
  slidesPerView: 'auto',
  spaceBetween: 30,
  speed: 800,
  navigation: {
    nextEl: '.reviews .navigation-next',
    prevEl: '.reviews .navigation-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 'auto',
    },
    1200: {
      slidesPerView: 'auto',
    },
  },
});

// Инициализация слайдера news__slider
const newsSlider = document.querySelector('.news__slider');
var mySwiperNews = new Swiper(newsSlider, {
  slidesPerView: 'auto',
  spaceBetween: 30,
  speed: 800,
  navigation: {
    nextEl: '.news .navigation-next',
    prevEl: '.news .navigation-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 'auto',
    },
    1200: {
      slidesPerView: 'auto',
    },
  },
});

if (window.innerWidth <= 991) {
  // Инициализация слайдера product-inner__slider
  const pricesSlider = document.querySelector('.prices__slider');
  var mySwiperPrices = new Swiper(pricesSlider, {
    slidesPerView: 1,
    spaceBetween: 25,
    speed: 800,
    navigation: {
      nextEl: '.product-inner .navigation-next',
      prevEl: '.product-inner .navigation-prev',
    },
  });

  const pricesSlider1 = document.querySelector('.prices__slider1');
  var mySwiperPrices1 = new Swiper(pricesSlider1, {
    slidesPerView: 1,
    spaceBetween: 25,
    speed: 800,
    navigation: {
      nextEl: '.product-inner .navigation-next',
      prevEl: '.product-inner .navigation-prev',
    },
  });
}

// document.addEventListener('DOMContentLoaded', () => {
//   const hero = document.querySelector('.header');
//   const header = document.querySelector('.header');
//   const mainEl = document.querySelector('.main');

//   const headerFixed = () => {
//     let scrollTop = window.scrollY;
//     let heroCenter = hero.offsetHeight / 4;

//     if (scrollTop >= heroCenter) {
//       header.classList.add('fixed')
//       mainEl.style.marginTop = `${header.offsetHeight}px`;
//     } else {
//       header.classList.remove('fixed')
//       mainEl.style.marginTop = `0px`;
//     }
//   };

//   headerFixed();
//   window.addEventListener('scroll', () => {
//     headerFixed();
//   });
// });

// const headerName = document.querySelector('.header__personality-name');
// if (window.innerWidth <= 575 && headerName) {
//   // Скрытие имени в header
  
//   headerName.textContent = '';
// }

// // accordion
// document.addEventListener('DOMContentLoaded', () => {
//   const accordions = document.querySelectorAll('.accordion');

//   accordions.forEach(el => {
//     el.addEventListener('click', (e) => {
//       const self = e.currentTarget;
//       const control = self.querySelector('.accordion__control');
//       const content = self.querySelector('.accordion__content');

//       self.classList.toggle('open');

//       // если открыт аккордеон
//       if (self.classList.contains('open')) {
//         control.setAttribute('aria-expanded', true);
//         content.setAttribute('aria-hidden', false);
        
//       } else {
//         control.setAttribute('aria-expanded', false);
//         content.setAttribute('aria-hidden', true);
        
//       }
//     });
//   });
// });

// // Change only 1 sidebar button
// let buttonSidebarAll = document.querySelectorAll('.sidebar-content__title');
// buttonSidebarAll.forEach(item => {
//   item.addEventListener('click', (e) => {
//     let buttonParent = item.parentElement;
//     let accordContent = buttonParent.querySelector('.sidebar__person-list');
//     let accordContentAll = document.querySelectorAll('.sidebar__person-list');
//     let accordIconAll = document.querySelectorAll('.accordion__icon');
//     let accordIcon = buttonParent.querySelector('.accordion__icon');
//     accordContentAll.forEach(el => { el.classList.remove('active'); });
//     accordIconAll.forEach(el => { el.classList.remove('active'); });
//     accordContent.classList.add('active');
//     accordIcon.classList.add('active');
//   })
// })

const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('../../node_modules/photoswipe/dist/photoswipe.esm.js')
});
lightbox.init();