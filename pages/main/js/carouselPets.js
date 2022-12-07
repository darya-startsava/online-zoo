const pets = document.querySelectorAll('.pets__item');
const petsRight = document.querySelectorAll('.pets__item_right');
const petsLeft = document.querySelectorAll('.pets__item_left');

const buttonArrowLeft = document.getElementById('button__arrow__left');
const buttonArrowRight = document.getElementById('button__arrow__right');
buttonArrowLeft.addEventListener('click', () => carousel('left'));
buttonArrowRight.addEventListener('click', () => carousel('right'));

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createRandomPetsGroup(pets) {
  pets.forEach((i) => {
    i.classList.add('pets__item_hidden');
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
  addOrder(willBeShownNumbersArray, pets);
  return willBeShownNumbersArray;
}

function addOrder(orderArray, pets) {
  pets.forEach((i) => {
    i.classList.add('pets__item_hidden');
  });
  orderArray.forEach((i, index) => {
    pets[i].classList.remove('pets__item_hidden');
    pets[i].style.order = `${index}`;
  });
}

function carousel(side) {
  let addClass = 'carousel_right';
  let orderArray = [];
  if (side === 'right') {
    orderArray = createRandomPetsGroup(petsLeft);
    createRandomPetsGroup(petsRight);
    addClass = 'carousel_left';
  } else {
    orderArray = createRandomPetsGroup(petsRight);
    createRandomPetsGroup(petsLeft);
  }
  buttonArrowLeft.disabled = true;
  buttonArrowRight.disabled = true;
  buttonArrowLeft.classList.add('button__arrow_disabled');
  buttonArrowRight.classList.add('button__arrow_disabled');
  document.querySelector('.pets__items__carousel__wrapper').classList.add(`${addClass}`);
  setTimeout(() => {
    buttonArrowLeft.disabled = false;
    buttonArrowRight.disabled = false;
    buttonArrowLeft.classList.remove('button__arrow_disabled');
    buttonArrowRight.classList.remove('button__arrow_disabled');
    document.querySelector('.pets__items__carousel__wrapper').classList.remove(`${addClass}`);
    addOrder(orderArray, pets);
  }, 1600);
}

carousel('left');
