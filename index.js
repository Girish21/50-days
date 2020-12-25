const button = document.querySelector('.search-button');
const container = document.querySelector('.container');

button.addEventListener('click', () => container.classList.toggle('active'));
