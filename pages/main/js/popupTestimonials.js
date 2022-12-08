const testimonialItems = document.querySelectorAll('.testimonials__item');
testimonialItems.forEach((i) => i.addEventListener('click', showWholeFeedback));
const testimonialPopupContent = document.querySelector('.testimonials__popup__content');
const testimonialPopupOverlay = document.querySelector('.testimonials__popup__overlay');
const closeTestimonialPopupButton = document.querySelector('.testimonials__popup__close-button');
closeTestimonialPopupButton.addEventListener('click', closeTestimonialPopup);
testimonialPopupOverlay.addEventListener('click', closeTestimonialPopup);

function showWholeFeedback(event) {
  if (window.screen.width > 999) {
    return;
  }
  const testimonialItem = event.target.closest('.testimonials__item');
  testimonialPopupContent.append(testimonialItem);
  testimonialPopupOverlay.classList.add('show');
  testimonialPopupContent.querySelector('.testimonials__item__border__wrapper').style.height =
    'auto';
  testimonialPopupContent.querySelector('.testimonials__item__wrapper').style.height = 'auto';
}

function closeTestimonialPopup() {
  if (event.target.closest('.testimonials__popup__content')) {
    return;
  }
  testimonialPopupContent.innerHTML = '';
  testimonialPopupOverlay.classList.remove('show');
}
