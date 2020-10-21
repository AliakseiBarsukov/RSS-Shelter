// function openNav() {
//   document.getElementById("myNav").style.width = "37.5rem";
// }

// function closeNav() {
//   document.getElementById("myNav").style.width = "0%";
// }

const burgerMenu = document.querySelector('.burger__menu'),
burgerBtn = document.querySelector('.burger__btn');

burgerBtn.addEventListener('click', () => { 
  burgerMenu.classList.toggle('openMenu')
});
