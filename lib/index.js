const pageLinkButton = document.getElementsByClassName('button page-link');
const arrow = document.getElementsByClassName('fa-solid fa-angle-right');
const navbar = document.querySelector('nav');
const nav_menu = document.getElementsByClassName('menu');
const sectionNames = ['home','about','blog','contact'];
const photo = document.querySelector('div.photo-frame');
const info = document.querySelector('div.info');
const skillLevels = document.querySelectorAll('div.skills div span.bar');
const skillPercentages = document.querySelectorAll('div.skills div span.skill-percentage');

let offsets = [];
for(let i = 0; i<nav_menu.length; i++) {
  offsets.push(document.getElementById(sectionNames[i]).getClientRects()[0].y);
}

pageLinkButton[0].addEventListener("mouseover", () => {
  arrow[0].classList.toggle('downarrow');
})

pageLinkButton[0].addEventListener("mouseout", () => {
  arrow[0].classList.remove('downarrow');
})

pageLinkButton[0].addEventListener("click", () => {
  window.scrollTo({
    top: offsets[1],
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
    top: offsets[1],
    left: 0,
    behavior: 'smooth'
  });
})

nav_menu[2].addEventListener("click", () => {
  window.scrollTo({
    top: offsets[2],
    left: 0,
    behavior: 'smooth'
  });
})

nav_menu[3].addEventListener("click", () => {
  window.scrollTo({
    top: offsets[3],
    left: 0,
    behavior: 'smooth'
  });
})

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  if (value >= offsets[1] && value < offsets[2]) {
    navbar.classList.add('fixed');
    nav_menu[0].classList.remove('active');
    nav_menu[1].classList.add('active');
    nav_menu[2].classList.remove('active');
    nav_menu[3].classList.remove('active');
  } else if (value >= offsets[2] && value < offsets[3]) {
    nav_menu[0].classList.remove('active');
    nav_menu[1].classList.remove('active');
    nav_menu[2].classList.add('active');
    nav_menu[3].classList.remove('active');
  } else if (value >= offsets[3]) {
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

for (let i=0; i<skillLevels.length; i++) {
  let percentage = skillPercentages[i].innerHTML;
  skillLevels[i].style.width = percentage;
}