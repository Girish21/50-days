const textarea = document.getElementById('textarea');
const tagContainer = document.getElementById('tags');

async function randomChooser() {
  const tags = tagContainer.childNodes;
  for (let i = 0; i < 30; i++) {
    tags.forEach((tag) => tag.classList.remove('highlight'));
    const index = Math.floor(Math.random() * tags.length);
    tags[index].classList.add('highlight');
    await new Promise((res) => setTimeout(res, 80));
  }
}

textarea.addEventListener('keyup', (e) => {
  if (e.code === 'Enter') {
    setTimeout(() => {
      textarea.value = '';
    }, 10);
    randomChooser();
    return;
  }
  const tags = e.target.value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

  tagContainer.innerHTML = '';

  tags.forEach((tag) => {
    const span = document.createElement('span');
    span.classList.add('tag');
    span.innerText = tag;

    tagContainer.appendChild(span);
  });
});
