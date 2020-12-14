import { store } from './back/Store.js';
import { createNewList } from './NewList/CreateNewList.js';
import { eventButZeroTask } from './events/eventAddCardBlockZero.js';
import { eventButOtherTasks } from './events/eventAddCardOtherBlocks.js';
import { newListOptionTask } from './button  menu Task/button.js';
export function render() {
  let sumActiveTask = 0;
  let finishedTask = 0;

  document.querySelector('.main_container ').innerHTML = '';

  if (store.storage.length === 0) {
    document.querySelector('.main_container ').innerHTML =
      '<h1>Добавьте Лист</h1>';
  }

  store.storage.forEach((element, index) => {
    const newList = createNewList(element.title, element.issues);

    if (index === 0) {
      const but = newList.querySelector('.main_section_footer_but');
      but.addEventListener('click', eventButZeroTask);
    } else {
      const but = newList.querySelector('.main_section_footer_but');

      if (store.storage[index - 1].issues.length <= 0) {
        but.setAttribute('disabled', 'disabled');
      }
      but.addEventListener('click', eventButOtherTasks);
    }
    document.querySelector('.main_container ').append(newList);

    newList
      .querySelector('.main_section_setting')
      .addEventListener('click', () => {
        if (newList.querySelector('.optionListTask')) {
          newList.querySelector('.optionListTask').remove();
          
        } else {
          newList
            .querySelector('.main_section_header')
            .append(newListOptionTask());
        }
      });
  });
  for (let i = 1; i < store.storage.length - 1; i++) {
    sumActiveTask += store.storage[i].issues.length;
    document.querySelector('.activeTasks').innerText = sumActiveTask;
  }

  finishedTask += store.storage[0].issues.length;
  finishedTask += store.storage[store.storage.length - 1].issues.length;
  document.querySelector('.finishedTask').innerText = finishedTask;
}
