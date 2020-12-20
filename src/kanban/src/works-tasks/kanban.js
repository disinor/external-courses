import { store } from './back/Store.js';
import { createNewList } from './NewList/CreateNewList.js';
import { buttonCreateListEvent } from './events/buttonCreateNewList.js';
import { render } from './renderTask.js';

render();
buttonCreateListEvent();
