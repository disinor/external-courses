const header2 = document.querySelector('.header2');
const newDiv = document.createElement('div');
const newElementTagUl = document.createElement('ul');
const dropDawn = document.querySelector('.header2 .header2_arrow_settings');
const blockLogo = document.querySelector('.blockLogo');
const arrow = document.querySelector('.arrow');

newDiv.className = 'header2_arrow_settings';

newDiv.append(newElementTagUl);

function newElementTagA(num) {
  const element = document.createElement('a');

  switch (num) {
    case 1:
      element.innerText = 'My account';
      break;

    case 2:
      element.innerText = 'My tasks';
      break;

    case 3:
      element.innerText = 'My out';
      break;

    default:
      return element;
  }

  element.setAttribute('href', '#');

  return element;
}

function newElementTagLi(num) {
  const elem = document.createElement('li');

  elem.append(newElementTagA(num));

  return elem;
}

newElementTagUl.append(newElementTagLi(1));
newElementTagUl.append(newElementTagLi(2));
newElementTagUl.append(newElementTagLi(3));

arrow.dataset.activeArrow = 'false';

blockLogo.addEventListener('click', () => {
  if (arrow.dataset.activeArrow === 'false') {
    arrow.dataset.activeArrow = 'true';
    header2.append(newDiv);
    arrow.style.transform = 'rotate(135deg)';
  } else {
    arrow.dataset.activeArrow = 'false';
    newDiv.remove();
    arrow.style.transform = 'rotate(-45deg)';
  }
});
