const boxes = document.querySelectorAll('.game__box');

const modalText = document.querySelector('.modal__text'),
  modalBtn = document.querySelector('.modal__btn-restart'),
  modalOverlay = document.querySelector('.modal__overlay'),
  modal = document.querySelector('.modal');

let step = 0;
let prevStep = '';

const createTic = () => {
  return `<div class="tic"></div>`;
};

const createTac = () => {
  return `<div class="tac"></div>`;
};

const calculateResult = (winner) => {
  modal.classList.add('active');
  modalText.innerHTML = winner;
};

const gameResult = () => {
  let arrResult = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  arrResult.forEach((item) => {
    if (
      boxes[item[0]].innerHTML === createTic() &&
      boxes[item[1]].innerHTML === createTic() &&
      boxes[item[2]].innerHTML === createTic()
    ) {
      calculateResult('Tic win!');
    } else if (
      boxes[item[0]].innerHTML === createTac() &&
      boxes[item[1]].innerHTML === createTac() &&
      boxes[item[2]].innerHTML === createTac()
    ) {
      calculateResult('Tac win!');
    }
  });
};

const closeModal = () => {
  modal.classList.remove('active');
  step = 0;
  for (let box of boxes) {
    box.innerHTML = '';
  }
};

modalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

for (let box of boxes) {
  box.addEventListener('click', () => {
    if (prevStep !== box) {
      step % 2 === 0
        ? (box.innerHTML = createTic())
        : (box.innerHTML = createTac());
      step < 9 ? gameResult() : calculateResult('Draw!');
      step++;
      prevStep = box;
    }
  });
}
