const sliderContainer = document.querySelector('.slide-container');
const leftSlider = document.getElementById('left');
const rightSlider = document.getElementById('right');
const upBtn = document.getElementById('up');
const downBtn = document.getElementById('down');

const slidesLength = rightSlider.querySelectorAll('div').length;

let activeSlide = 0;

leftSlider.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));

function changeSlide(dir) {
  if (dir === 'up') {
    activeSlide++;

    if (activeSlide === slidesLength) activeSlide = 0;
  } else {
    activeSlide--;

    if (activeSlide < 0) activeSlide = slidesLength - 1;
  }

  rightSlider.style.transform = `translateY(-${activeSlide * 100}vh)`;
  leftSlider.style.transform = `translateY(${activeSlide * 100}vh)`;
}
