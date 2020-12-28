const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text = 'We love programming';

let idx = 1;
let speed = 300 / speedEl.value;

function writeText() {
  textEl.textContent = text.slice(0, idx);
  idx++;

  if (idx === text.length + 1) idx = 0;
}

writeText();

let interval = setInterval(writeText, speed);

speedEl.addEventListener('change', (e) => {
  clearInterval(interval);

  speed = 300 / e.target.value;

  interval = setInterval(writeText, speed);
});
