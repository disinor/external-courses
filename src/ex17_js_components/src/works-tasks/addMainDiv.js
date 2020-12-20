import { createNewList } from './createNewList.js';
export const addMainDivList = () => {
  const mainDiv = document.createElement('div');

  mainDiv.classList.add('main_div');
  mainDiv.append(createNewList('Backlog'));
  mainDiv.append(createNewList('Ready'));
  mainDiv.append(createNewList('In Progress'));
  mainDiv.append(createNewList('Finished'));

  return mainDiv;
};
