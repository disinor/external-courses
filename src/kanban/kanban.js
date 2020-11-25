const mainContainer = document.querySelector('.main_container');
const localDataMock = JSON.parse(localStorage.getItem(LS_NAME_TASKS));

const titleToCamelCaseNotation = (selectedRow) => {
  const row = selectedRow;
  let str = [];

  for (let i = 0; i < row.length; i++) {
    if (row[i] === ' ') {
      row[i + 1] = row[i + 1].toUpperCase();
    } else {
      str[i] = row[i];
      str[0] = str[0].toLowerCase();
    }
  }

  return str.join('');
};

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

const store = new Store();

const addMainDivList = () => {
  const mainDiv = document.createElement('div');

  mainDiv.classList.add('main_div');
  mainDiv.append(createNewList('Backlog'));
  mainDiv.append(createNewList('Ready'));
  mainDiv.append(createNewList('In Progress'));
  mainDiv.append(createNewList('Finished'));

  return mainDiv;
};

const newListItem = (text) => {
  const sectionMainItems = document.createElement('div');

  sectionMainItems.classList.add('main_section_main_items');
  sectionMainItems.innerText = text;

  return sectionMainItems;
};

const newListSelect = (text, block, id, currentBlock, prevBlock) => {
  const mainDiv = block
    .closest('.main_div')
    .querySelector(`.${currentBlock.toLowerCase()}`);

  const currentSectionMain = document.querySelector(
    `.${currentBlock.toLowerCase()} .main_section_main `
  );

  const selectList = document.createElement('select');

  block
    .querySelector('.main_section_footer_but')
    .setAttribute('disabled', 'disabled');

  if (block.querySelector('.addList')) {
    const selectList = block.querySelector('.addList');
    const optionList = document.createElement('option');

    optionList.classList.add(`ulListLi}`);
    optionList.append(text);
    selectList.append(optionList);

    return selectList;
  }

  selectList.classList.add('addList');

  selectList.addEventListener('blur', () => {
    const optionNum = block.querySelector('.addList').options.selectedIndex;
    const optionText = block.querySelector('.addList').options[optionNum].value;

    block
      .querySelector('.addList')
      .options[optionNum].setAttribute('disabled', 'disabled');

    store.deleted(optionNum + 1, prevBlock);
    store.add(optionText, id, currentBlock);
    currentSectionMain.append(newListItem(optionText, optionNum));
  });

  mainDiv.addEventListener('mouseleave', () => {
    if (document.querySelector('.addList')) {
      block
        .querySelector('.main_section_footer_but')
        .removeAttribute('disabled');

      document.querySelector('.addList').remove();
    }
  });

  return selectList;
};

const transitionToTheList = (prevBlock, currentBlock) => {
  const currentId = `.${prevBlock} .main_section_main .main_section_main_items `.toLowerCase();
  const prevSectionMainLength = document.querySelectorAll(currentId).length;
  const currentSectionFooter = document.querySelector(
    `.${currentBlock.toLowerCase()} .main_section_footer `
  );

  for (let i = 0; i < prevSectionMainLength; i++) {
    const currentBlockNewElements = newListSelect(
      localDataMock[prevBlock][i].name,
      currentSectionFooter,
      prevSectionMainLength,
      currentBlock,
      prevBlock
    );

    currentSectionFooter.append(currentBlockNewElements);
  }
};

mainContainer.append(addMainDivList());
