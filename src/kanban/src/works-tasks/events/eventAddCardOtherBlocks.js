import { store } from '../back/Store.js';
import { render } from '../renderTask.js';

export function eventButOtherTasks(event) {
  const blockTask = event.srcElement.closest('.main_section');
  const selectList = document.createElement('select');
  selectList.classList.add('addList');
  const zeroOption = document.createElement('option');
  zeroOption.innerText = 'Выберите значение';
  zeroOption.setAttribute('selected', '');
  zeroOption.setAttribute('disabled', '');
  selectList.append(zeroOption);
  if (blockTask.querySelector('.addList')) {
    return;
  }
  if (event.type == 'click') {
    let prevBlock;

    store.storage.forEach((element, index) => {
      if (element.title === blockTask.getAttribute('data-atribute')) {
        prevBlock = store.storage[index - 1];
        store.storage[index - 1].issues.forEach((element) => {
          const newElementOption = document.createElement('option');
          newElementOption.id = element.id;
          newElementOption.innerText = element.name;

          selectList.append(newElementOption);
        });
      }
    });
    selectList.addEventListener('change', () => {
      const doc = selectList.querySelectorAll('option');
      doc.forEach((el) => {
        if (selectList.value === el.value) {
          store.transitionToTheNextList(prevBlock.title, el.id);

          render();
        }
      });
    });
    blockTask.querySelector('.main_section_footer').append(selectList);
  }

  blockTask.addEventListener('mouseleave', () => {
    if (blockTask.querySelector('.main_section_footer .addList') !== null) {
      blockTask.querySelector('.main_section_footer .addList').remove();
    } else return;
  });
}
