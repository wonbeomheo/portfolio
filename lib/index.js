console.log("js is loaded.");
const pageLinkButton = document.getElementsByClassName('button page-link');
const arrow = document.getElementsByClassName('fa-solid fa-angle-right');
const navbar = document.querySelector('nav');
const nav_menu = document.getElementsByClassName('menu');

pageLinkButton[0].addEventListener("mouseover", () => {
  arrow[0].classList.toggle('downarrow');
})

pageLinkButton[0].addEventListener("mouseout", () => {
  arrow[0].classList.remove('downarrow');
})

pageLinkButton[0].addEventListener("click", () => {
  window.scrollTo({
    top: 765,
    left: 0,
    behavior: 'smooth'
  });
})

nav_menu[0].addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

nav_menu[1].addEventListener("click", () => {
  window.scrollTo({
    top: 765,
    left: 0,
    behavior: 'smooth'
  });
})

nav_menu[2].addEventListener("click", () => {
  window.scrollTo({
    top: 2015,
    left: 0,
    behavior: 'smooth'
  });
})

nav_menu[3].addEventListener("click", () => {
  window.scrollTo({
    top: 3265,
    left: 0,
    behavior: 'smooth'
  });
})

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  console.log(value);

  if (value >= 765 && value < 2015) {
    navbar.classList.add('fixed');
    nav_menu[0].classList.remove('active');
    nav_menu[1].classList.add('active');
    nav_menu[2].classList.remove('active');
    nav_menu[3].classList.remove('active');
  } else if (value >= 2015 && value < 3265) {
    nav_menu[0].classList.remove('active');
    nav_menu[1].classList.remove('active');
    nav_menu[2].classList.add('active');
    nav_menu[3].classList.remove('active');
  } else if (value >= 3265) {
    nav_menu[0].classList.remove('active');
    nav_menu[1].classList.remove('active');
    nav_menu[2].classList.remove('active');
    nav_menu[3].classList.add('active');
  } else {
    navbar.classList.remove('fixed');
    nav_menu[0].classList.add('active');
    nav_menu[1].classList.remove('active');
    nav_menu[2].classList.remove('active');
    nav_menu[3].classList.remove('active');
  }
})

