const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) =>
  button.addEventListener('click', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const boundingRect = e.target.getBoundingClientRect();

    const cx = x - boundingRect.left;
    const cy = y - boundingRect.top;

    const span = document.createElement('span');
    span.classList.add('circle');
    span.style.top = `${cy}px`;
    span.style.left = `${cx}px`;

    this.appendChild(span);

    setTimeout(() => span.remove(), 500);
  }),
);
