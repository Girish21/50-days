const image = document.querySelector('.bg');
const loader = document.querySelector('.loading-text');

const lerp = function (
  number,
  oldScaleMin,
  oldScaleMax,
  newScaleMin,
  newScaleMax,
) {
  return (
    ((number - oldScaleMin) / (oldScaleMax - oldScaleMin)) *
      (newScaleMax - newScaleMin) +
    newScaleMin
  );
};

(async () => {
  for (let i = 0; i <= 100; i++) {
    loader.textContent = `${i}%`;
    loader.style.opacity = lerp(i, 0, 100, 1, 0);
    image.style.filter = `blur(${lerp(i, 0, 100, 30, 0)}px)`;
    await new Promise((res) => setTimeout(res, 50));
  }
  loader.style.display = 'none';
})();
