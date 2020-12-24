const images = [
  {
    url:
      'https://images.unsplash.com/photo-1608500479600-212f8886141a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    text: 'text 1',
  },
  {
    url:
      'https://images.unsplash.com/photo-1486607303850-bc051a4ffad4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80',
    text: 'text 2',
  },
  {
    url:
      'https://images.unsplash.com/photo-1517927224534-948d7df17392?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1360&q=80',
    text: 'text 3',
  },
  {
    url:
      'https://images.unsplash.com/photo-1554840190-17a5c9869662?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    text: 'text 4',
  },
  {
    url:
      'https://images.unsplash.com/photo-1604766664165-668315c14b76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    text: 'text 5',
  },
];

const getRootRef = () => document.getElementById('root');

window.onload = function () {
  const ref = getRootRef();

  images.forEach(({ url, text }, i) => {
    const element = document.createElement('div');
    element.classList.add('card');
    if (i === 0) element.classList.add('active');
    element.style.backgroundImage = `url(${url})`;
    element.id = i;

    const title = document.createElement('h3');
    title.textContent = text;
    title.classList.add('title');
    element.appendChild(title);

    ref.appendChild(element);
  });
};

window.addEventListener('click', (e) => {
  const ref = getRootRef();
  const element = e.target;
  const id = +element.id;

  if (element.parentNode !== ref) return;

  const allCards = document.getElementsByClassName('card');

  Array.from(allCards).forEach((ele, i) => {
    if (i === id) ele.classList.add('active');
    else ele.classList.remove('active');
  });
});
