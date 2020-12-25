const labels = document.querySelectorAll('.form-control label');
const inputs = document.querySelectorAll('.form-control input');

labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split('')
    .map((c, i) => `<span style="transition-delay: ${i * 50}ms">${c}</span>`)
    .join('');
});

// inputs.forEach((input) => {
//   input.addEventListener('focus', () => {
//     labels.forEach((label) => {
//       if (label.htmlFor === input.id) {
//         label.childNodes.forEach((node) => {
//           node.classList.add('wave');
//         });
//       } else {
//         label.childNodes.forEach((node) => {
//           node.classList.remove('wave');
//         });
//       }
//     });
//   });
// });
