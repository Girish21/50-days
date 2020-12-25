const scrollArea = document.getElementById('container');
const boxes = document.querySelectorAll('.content');

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show');
      else entry.target.classList.remove('show');
    });
  },
  { root: null, threshold: 0, rootMargin: '-20% 400% -20% 400%' },
);

boxes.forEach((box) => observer.observe(box));
