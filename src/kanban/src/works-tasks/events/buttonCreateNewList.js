import { createNewList } from '../NewList/CreateNewList.js';
export function buttonCreateListEvent() {
  const buttonCreateList = document.querySelector('.createList');
  const mainContainer = document.querySelector('.main_container');
  buttonCreateList.addEventListener('click', () => {
    mainContainer.prepend(createNewList('', ''));
    document.querySelector('.input_new_list').focus();
  });
}
