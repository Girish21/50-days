const container = document.querySelector('.loveme');
const timesEl = document.getElementById('times');

const heart = document.createElement('i');
heart.classList.add('fas', 'fa-heart');

const containerBox = container.getBoundingClientRect();

let count = 0;
let prevClick = null;

function getPoint(clientX, clientY) {
  const x = clientY - containerBox.top;
  const y = clientX - containerBox.left;

  return { x, y };
}

function handleHeart(e) {
  const { x, y } = getPoint(e.clientX, e.clientY);
  heart.style.top = `${x}px`;
  heart.style.left = `${y}px`;
  container.append(heart);
  setTimeout(() => heart.remove(), 1000);
}

function like() {
  count++;
  timesEl.textContent = count;
}

container.addEventListener('click', (e) => {
  if (!prevClick) prevClick = e.timeStamp;
  else {
    if (e.timeStamp - prevClick < 300) {
      like();
      handleHeart(e);
    } else prevClick = e.timeStamp;
  }
});
