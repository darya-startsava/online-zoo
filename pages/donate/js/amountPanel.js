const amountInputs = document.querySelectorAll('.radio__item__input');
amountInputs.forEach((i) => i.addEventListener('click', () => showChosenAmount()));
const amountLabels = document.querySelectorAll('.feed__down__radio__item__wrapper');
const amountField = document.getElementById('feed__amount__input__number');
amountField.addEventListener('input', () => checkAmount());

function showChosenAmount() {
  amountLabels.forEach((i) => i.classList.remove('amount-label_active'));
  amountInputs.forEach((i) => {
    if (i.checked) {
      i.closest('.feed__down__radio__item__wrapper').classList.add('amount-label_active');
      amountField.value = i.value;
    }
  });
}

function showEnteredAmount(value) {
  amountLabels.forEach((i) => i.classList.remove('amount-label_active'));
  amountInputs.forEach((i) => {
    i.checked = false;
    if (i.value === value) {
      i.checked = true;
      i.closest('.feed__down__radio__item__wrapper').classList.add('amount-label_active');
    }
  });
}

function checkAmount() {
  const value = amountField.value;
  if (+value < 1 || +value > 9999) {
    amountField.value = value.slice(0, value.length - 1);
  }
  showEnteredAmount(amountField.value);
}
