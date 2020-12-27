const boxes = document.querySelectorAll('.empty');
const target = document.querySelector('.fill');

target.addEventListener('dragstart', dragStart);
target.addEventListener('dragend', dragEnd);

boxes.forEach((box) => {
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', dragDrop);
});

function dragStart() {
  this.className += ' hold';

  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(e) {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function dragDrop(e) {
  this.className = 'empty';
  target.className = 'fill';
  this.append(target);
}
