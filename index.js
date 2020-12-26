const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
const slides = document.querySelectorAll('.slide');

let currentActive = 0;

function updateSlide() {
  slides.forEach((slide, i) => {
    if (i === currentActive) slide.classList.add('active');
    else slide.classList.remove('active');
  });

  document.body.style.backgroundImage =
    slides[currentActive].style.backgroundImage;
}

leftButton.addEventListener('click', () => {
  currentActive = currentActive - 1 < 0 ? slides.length - 1 : currentActive - 1;
  updateSlide();
});

rightButton.addEventListener('click', () => {
  currentActive = currentActive + 1 > slides.length - 1 ? 0 : currentActive + 1;
  updateSlide();
});

updateSlide();
