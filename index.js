const toastContainer = document.getElementById('toast');
const button = document.getElementById('button');

const messages = [
  'Message one',
  'Message two',
  'Message three',
  'Message four',
];

button.addEventListener('click', () => {
  const div = document.createElement('div');
  div.className = 'toast';

  div.textContent = messages[Math.floor(Math.random() * messages.length)];

  toastContainer.append(div);

  setTimeout(() => div.remove(), 2000);
});
