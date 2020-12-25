const container = document.getElementById('insert');

window.addEventListener(
  'keydown',
  ({ key, keyCode, code }) =>
    (container.innerHTML = `
      <div class="key">
        ${key === ' ' ? 'Space' : key}
        <small>event.key</small>
      </div>
      <div class="key">
        ${keyCode}
        <small>event.keyCode</small>
      </div>
      <div class="key">
        ${code}
        <small>event.code</small>
      </div>
  `),
);
