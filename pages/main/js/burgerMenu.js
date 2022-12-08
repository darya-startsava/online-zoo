const openBurgerMenuButton = document.querySelector('.nav__burger__menu');
openBurgerMenuButton.addEventListener('click', openBurgerMenu);
const burgerMenuOverlay = document.querySelector('.nav__burger__menu__overlay');
const closeBurgerMenuButton = document.querySelector('.nav__burger__menu__close-button');
closeBurgerMenuButton.addEventListener('click', closeBurgerMenu);

function openBurgerMenu() {
  openBurgerMenuButton.classList.add('hide');
  burgerMenuOverlay.classList.add('show');
}

function closeBurgerMenu() {
  openBurgerMenuButton.classList.remove('hide');
  burgerMenuOverlay.classList.remove('show');
}
