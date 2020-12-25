const sounds = document.querySelectorAll('audio');
const buttonContainer = document.querySelector('.button');

sounds.forEach((sound, i, arr) => {
  const button = document.createElement('button');
  button.innerText = sound.id;
  button.classList.add('btn');

  button.addEventListener('click', () => {
    arr.forEach((e) => e !== sound && e.pause());
    sound.play();
  });

  buttonContainer.appendChild(button);
});
