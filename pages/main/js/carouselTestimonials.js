const testimonialsScroll = document.querySelector('.testimonials__scroll');
testimonialsScroll.addEventListener('change', showAppropriateTestimonials);
// const styleLeftCarouselWrapper = [65, 46.5, 27.5, 9.5, -9.5, -28, -46.5, -65];
let styleLeftCarouselWrapper = [1038, 742, 446, 150, -150, -446, -742, -1038];
if (window.screen.width <1600) {
  styleLeftCarouselWrapper = [1290, 970, 646, 322, 0, -322, -646, -970];
}
const testimonialsCarouselWrapper = document.querySelector(
  '.testimonials__items__carousel__wrapper'
);
function showAppropriateTestimonials() {
  const index = testimonialsScroll.value;
  testimonialsCarouselWrapper.style.left = `${styleLeftCarouselWrapper[index]}px`;

}
