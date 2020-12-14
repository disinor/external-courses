const LS_TASKS = JSON.parse(localStorage.getItem('tasks'));
const saveTaskToLS = () => {
  localStorage.setItem('tasks', JSON.stringify(LS_TASKS));
};
const NewObjTask = function (id, name) {
  this.id = id;
  this.name = name;
};

const NewListTask = function (title) {
  this.title = title;
  this.issues = [];
};

const Store = function (storage) {
  this.storage = storage;

  this.addItem = (nameBlock, task) => {
    storage.forEach((element) => {
      if (element.title === nameBlock) {
        element.issues.push(new NewObjTask(element.issues.length, task));

        saveTaskToLS();
      }
    });
  };
  this.clearListTasks = (nameBlock) => {
    storage.forEach((element) => {
      if (element.title === nameBlock) {
        element.issues = [ ]; //eslint-disable-line

        saveTaskToLS();
      }
    });
  };
  this.deletedList = (nameBlock) => {
    storage.forEach((element) => {
      if (element.title === nameBlock) {
        const indexList = storage.indexOf(element);
        storage.splice(indexList, 1);

        saveTaskToLS();
      }
    });
  };

  this.deletedItem = (nameBlock, id) => {
    storage.forEach((element) => {
      if (element.title === nameBlock) {
        let numIndex = element.issues.indexOf(element.issues[id]);

        element.issues.splice(numIndex, 1);

        for (numIndex; numIndex < element.issues.length; numIndex++) {
          element.issues[numIndex].id -= 1; //eslint-disable-line
        }
      }
    });
    saveTaskToLS();
  };

  this.transitionToTheNextList = function (nameBlock, id) {
    const currentBlock = storage.findIndex((el) => el.title === nameBlock);
    const nextBlock = storage[currentBlock + 1].title;

    this.addItem(nextBlock, storage[currentBlock].issues[id].name);
    this.deletedItem(nameBlock, id);
    saveTaskToLS();
  };

  this.newListTask = function (nameBlock) {
    this.storage.unshift(new NewListTask(nameBlock));
    saveTaskToLS();
  };
};

export const store = new Store(LS_TASKS);
