const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const progress = document.getElementById('progress');

let count = 1;

document.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    const circles = document.querySelectorAll('.circle');

    const element = e.target;
    const id = element.id;

    if (id === 'next') count++;
    else count--;

    if (count > circles.length - 1) {
      nextButton.setAttribute('disabled', true);
      count = circles.length;
    }
    if (count < 2) {
      prevButton.setAttribute('disabled', true);
      count = 1;
    }
    if (count > 1 && count < circles.length) {
      nextButton.removeAttribute('disabled');
      prevButton.removeAttribute('disabled');
    }

    circles.forEach((circle, i) => {
      if (i < count) circle.classList.add('active');
      else circle.classList.remove('active');
    });

    const actives = document.querySelectorAll('.active');

    progress.style.width = `${
      ((actives.length - 1) / (circles.length - 1)) * 100
    }%`;
  }
});
