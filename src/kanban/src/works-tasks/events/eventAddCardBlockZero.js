import { newListItem } from '../WorkItemList/newListItem.js';
import { store } from '../back/Store.js';
import { render } from '../renderTask.js';

export function eventButZeroTask(event) {
  if (event.type == 'click') {
    const blockTask = event.path[3];
    const inputList = document.createElement('input');

    inputList.setAttribute('type', 'text');
    inputList.classList.add('input_list');

    inputList.addEventListener('blur', () => {
      if (inputList.value.trim() === '') {
        inputList.remove();
        return;
      }

      store.addItem(blockTask.attributes[1].value, inputList.value);

      inputList.remove();
      render();
    });

    blockTask.querySelector('.main_section_main').append(inputList);
    blockTask.querySelector('.input_list').focus();
  }
}
