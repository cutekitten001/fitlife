// add event on element
const addEventOnElem = (elem, type, callback) => {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// navbar toggle
const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const navLinks = document.querySelectorAll('[data-nav-link]');

const toggleNavbar = () => {
  navbar.classList.toggle('active');
};

addEventOnElem(navTogglers, 'click', toggleNavbar);

const closeNavbar = () => {
  navbar.classList.remove('active');
};

addEventOnElem(navLinks, 'click', closeNavbar);

navLinks.forEach((link) => {
  link.addEventListener('click', function (event) {
    document
      .querySelectorAll('[data-nav-link]')
      .forEach((ele) => ele.classList.remove('active'));
    this.classList.add('active');
  });
});

// header & back to top
const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top-btn]');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 100) {
    header.classList.add('active');
    backTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    backTopBtn.classList.remove('active');
  }
});
