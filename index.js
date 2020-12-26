const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const lerp = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

toggleEl.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    e.target.innerHTML = 'Dark Mode';
  } else {
    e.target.innerHTML = 'Light Mode';
  }
  html.classList.toggle('dark');
});

function setTime() {
  const time = new Date();

  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hourForClock = hours >= 13 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const am = hours < 12 ? 'am' : 'pm';

  hourEl.style.transform = `translate(-50%, -100%) rotate(${lerp(
    hourForClock,
    0,
    12,
    0,
    360,
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${lerp(
    minutes,
    0,
    59,
    0,
    360,
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${lerp(
    seconds,
    0,
    59,
    0,
    360,
  )}deg)`;

  timeEl.innerHTML = `${hourForClock} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } ${am}`;

  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

setTime();

setInterval(setTime, 1000);
