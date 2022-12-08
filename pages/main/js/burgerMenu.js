const openBurgerMenuButton = document.querySelector('.nav__burger__menu');
openBurgerMenuButton.addEventListener('click', openBurgerMenu);
const burgerMenuOverlay = document.querySelector('.nav__burger__menu__overlay');
const closeBurgerMenuButton = document.querySelector('.nav__burger__menu__close-button');
closeBurgerMenuButton.addEventListener('click', closeBurgerMenu);
const burgerMenuPopup = document.querySelector('.nav__burger__menu__wrapper');
burgerMenuOverlay.addEventListener('click', closeBurgerMenu);

function openBurgerMenu() {
  openBurgerMenuButton.classList.add('hide');
  burgerMenuOverlay.classList.add('show');
}

function closeBurgerMenu() {
  if (
    event.target.closest('.nav__burger__menu__wrapper') &&
    !event.target.closest('.nav__burger__menu__close-button')
  ) {
    return;
  }
  openBurgerMenuButton.classList.remove('hide');
  burgerMenuOverlay.classList.remove('show');
}
