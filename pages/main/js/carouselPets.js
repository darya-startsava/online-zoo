const pets = document.querySelectorAll('.pets__item');
const buttonArrowLeft = document.getElementById('button__arrow__left');
const buttonArrowRight = document.getElementById('button__arrow__right');
buttonArrowLeft.addEventListener('click', () => carousel());
buttonArrowRight.addEventListener('click', () => carousel());

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function carousel() {
  pets.forEach((i) => {
    i.classList.add('pets__item_hidden');
    i.classList.remove('fade');
  });
  const willBeShownNumbers = new Set();
  let quantityShownPets = 4;
  if (window.screen.width > 640) {
    quantityShownPets = 6;
  }
  while (willBeShownNumbers.size < quantityShownPets) {
    willBeShownNumbers.add(getRandomIntInclusive(0, pets.length - 1));
  }
  const willBeShownNumbersArray = Array.from(willBeShownNumbers);
  willBeShownNumbersArray.forEach((i, index) => {
    pets[i].classList.remove('pets__item_hidden');
    pets[i].classList.add('fade');
    pets[i].style.order = `${index}`;
  });
  buttonArrowLeft.disabled = true;
  buttonArrowRight.disabled = true;
  buttonArrowLeft.classList.add('button__arrow_disabled');
  buttonArrowRight.classList.add('button__arrow_disabled');
  setTimeout(() => {
    buttonArrowLeft.disabled = false;
    buttonArrowRight.disabled = false;
    buttonArrowLeft.classList.remove('button__arrow_disabled');
    buttonArrowRight.classList.remove('button__arrow_disabled');
    pets.forEach((i) => {
      i.classList.remove('fade');
    });
  }, 1500);
}

carousel();
