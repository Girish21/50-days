const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

smallCups.forEach((smallCup, i) => {
  smallCup.addEventListener('click', () => fillCups(i));
});

function fillCups(idx) {
  if (
    smallCups[idx].classList.contains('full') &&
    ((idx + 1 < smallCups.length &&
      !smallCups[idx + 1].classList.contains('full')) ||
      idx + 1 === smallCups.length)
  )
    smallCups[idx].classList.remove('full');
  else
    smallCups.forEach((cup, j) => {
      if (j <= idx) cup.classList.add('full');
      else cup.classList.remove('full');
    });

  updateBigCup();
}

function updateBigCup() {
  const filledGlasses = Array.from(smallCups).filter((cup) =>
    cup.classList.contains('full'),
  ).length;

  const fraction = filledGlasses / smallCups.length;

  if (filledGlasses === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fraction * 330}px`;
    percentage.innerText = `${fraction * 100}%`;
  }

  if (fraction === 1) {
    remained.style.visibility = 'none';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * filledGlasses) / 1000}L`;
  }
}
