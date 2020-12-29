const toggles = document.querySelectorAll('.toggle');
const goodEl = document.getElementById('good');
const cheapEl = document.getElementById('cheap');
const fastEl = document.getElementById('fast');

function doTheTrick(clickedEl) {
  if (goodEl.checked && cheapEl.checked && fastEl.checked) {
    if (goodEl === clickedEl) fastEl.checked = false;
    if (cheapEl === clickedEl) goodEl.checked = false;
    if (fastEl === clickedEl) cheapEl.checked = false;
  }
}

toggles.forEach((toggle) =>
  toggle.addEventListener('change', (e) => {
    doTheTrick(e.target);
  }),
);
