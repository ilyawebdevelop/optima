// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.header__nav');
const bodyEl = document.querySelector('body');
let navItemAll = document.querySelectorAll('.header__nav-item');

const menuLine1 = document.querySelector('.top-bun');
const menuLine2 = document.querySelector('.meat');
const menuLine3 = document.querySelector('.bottom-bun');

const toggleMenu = function () {
  menu.classList.toggle('open');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const toggleMenuLine = function () {
  menuLine1.classList.toggle('active');
  menuLine2.classList.toggle('active');
  menuLine3.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
btnMenu.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
  toggleMenuLine();
});

document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.header');
  const header = document.querySelector('.header');
  const mainEl = document.querySelector('.main');

  const headerFixed = () => {
    let scrollTop = window.scrollY;
    let heroCenter = hero.offsetHeight / 4;

    if (scrollTop >= heroCenter) {
      header.classList.add('fixed')
      mainEl.style.marginTop = `${header.offsetHeight}px`;
    } else {
      header.classList.remove('fixed')
      mainEl.style.marginTop = `0px`;
    }
  };

  headerFixed();
  window.addEventListener('scroll', () => {
    headerFixed();
  });
});

const headerName = document.querySelector('.header__personality-name');
if (window.innerWidth <= 575 && headerName) {
  // Скрытие имени в header
  
  headerName.textContent = '';
}

// accordion
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('open');

      // если открыт аккордеон
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        
      }
    });
  });
});

// Change only 1 sidebar button
let buttonSidebarAll = document.querySelectorAll('.sidebar-content__title');
buttonSidebarAll.forEach(item => {
  item.addEventListener('click', (e) => {
    let buttonParent = item.parentElement;
    let accordContent = buttonParent.querySelector('.sidebar__person-list');
    let accordContentAll = document.querySelectorAll('.sidebar__person-list');
    let accordIconAll = document.querySelectorAll('.accordion__icon');
    let accordIcon = buttonParent.querySelector('.accordion__icon');
    accordContentAll.forEach(el => { el.classList.remove('active'); });
    accordIconAll.forEach(el => { el.classList.remove('active'); });
    accordContent.classList.add('active');
    accordIcon.classList.add('active');
  })
})