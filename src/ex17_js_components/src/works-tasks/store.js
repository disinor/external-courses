import { addMainDivList } from './addMainDiv.js';
import { mainContainer } from './kanban.js';
const LS_NAME_TASKS = 'tasks';
export const localDataMock = JSON.parse(localStorage.getItem(LS_NAME_TASKS));


let dataMock = {
  backlog: [{ id: 0, name: 'Login page – performance issues' }],

  ready: [{ id: 0, name: 'Shop page – performance issues' }],

  inProgress: [{ id: 0, name: 'User page – performance issues' }],

  finished: [{ id: 0, name: 'Main page – performance issues' }],
};

const saveData = localStorage.getItem(LS_NAME_TASKS);
if (saveData) {
  dataMock = JSON.parse(saveData);
} else {
  localStorage.setItem(LS_NAME_TASKS, JSON.stringify(dataMock));
}

function newObjArrs(id, name) {
  this.id = id;
  this.name = name;
}

function Store() {
  const data = localDataMock;

  this.add = (text, id, block) => {
    const obj = new newObjArrs(id, text);
    data[block].push(obj);
    const str = JSON.stringify(data);

    localStorage.setItem(LS_NAME_TASKS, str);
    document.querySelector('.main_div').remove();
    mainContainer.append(addMainDivList());
  };

  this.deleted = (id, block) => {
    data[block].splice(id, 1);

    document.querySelector('.main_div').remove();
    mainContainer.append(addMainDivList());
  };

  this.getData = () => data;
}
export const store = new Store();
