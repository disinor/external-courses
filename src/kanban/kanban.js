const header2 = document.querySelector('.header2');
const newDiv = document.createElement('div');
const newUl = document.createElement('ul');
const newLi1 = document.createElement('li');
const newLi2 = document.createElement('li');
const newLi3 = document.createElement('li');
const newA1 = document.createElement('a');
const newA2 = document.createElement('a');
const newA3 = document.createElement('a');
const dropDawn = document.querySelector('.header2 .header2_arrow_settings');
const blockLogo = document.querySelector('.blockLogo');
const arrow = document.querySelector('.arrow');
const mainContainer = document.querySelector('.main_container');
const localDataMock = JSON.parse(localStorage.getItem(LS_NAME_TASKS));
const store = new Store(onblur);

newDiv.className = 'header2_arrow_settings';
newDiv.append(newUl);

newUl.append(newLi1);
newLi1.append(newA1);
newA1.innerText = 'My account';

newUl.append(newLi2);
newLi2.append(newA2);
newA2.innerText = 'My tasks';

newUl.append(newLi3);
newLi3.append(newA3);
newA3.innerText = 'Log out.';

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

function ObjList(id, name) {
  this.id = id;
  this.name = name;
}

function Store() {
  const data = localDataMock;

  this.add = (text, id, block) => {
    const obj = new ObjList(id, text);
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

const addMainDivList = () => {
  const mainDiv = document.createElement('div');
  mainDiv.classList.add('main_div');
  mainDiv.append(createNewList('Backlog'));
  mainDiv.append(createNewList('Ready'));
  mainDiv.append(createNewList('In Progress'));
  mainDiv.append(createNewList('Finished'));

  return mainDiv;
}; //создаю блок с 4 элементами бэклог реди и т.д.

const newListItem = (text, id) => {
  const sectionMainItems = document.createElement('div');
  sectionMainItems.classList.add('main_section_main_items');
  sectionMainItems.innerText = text;

  return sectionMainItems;
}; //создаю новый элемент списка и добавляю его в localStorage

const newListSelect = (text, block, id, currentBlock, prevBlock) => {
  const mainDiv = block
    .closest('.main_div ')
    .querySelector(`.${currentBlock.toLowerCase()}`);
  block
    .querySelector('.main_section_footer_but')
    .setAttribute('disabled', 'disabled');

  const currentSectionMain = document.querySelector(
    `.${currentBlock.toLowerCase()} .main_section_main `
  );

  if (block.querySelector('.addList')) {
    const selectList = block.querySelector('.addList');
    const optionList = document.createElement('option');
    optionList.classList.add(`ulListLi}`);
    optionList.append(text);
    selectList.append(optionList);

    return selectList;
  }
  const selectList = document.createElement('select');
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
      document.querySelector('.addList').remove();
    }
  });

  return selectList;
}; //список дропдауна

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
}; //переход из прередущего блока в следующий

const createNewList = (title, text) => {
  const mainSection = document.createElement('div');
  mainSection.classList.add(
    'main_section',
    title.toLowerCase().replace(/\s/g, '')
  );

  const mainSectionHeader = document.createElement('div');
  mainSectionHeader.classList.add('main_section_header');
  mainSection.append(mainSectionHeader);

  const mainHeaderTitle = document.createElement('span');
  mainHeaderTitle.classList.add('main_header_title');
  mainHeaderTitle.innerText = title;
  mainSectionHeader.append(mainHeaderTitle);

  const mainSectionSetting = document.createElement('div');
  mainSectionSetting.classList.add('main_section_setting');
  mainSectionHeader.append(mainSectionSetting);

  const mainSectionUserPoint = document.createElement('div');
  mainSectionUserPoint.classList.add('main_section_userPoint');
  mainSectionSetting.append(mainSectionUserPoint);

  const sectionMain = document.createElement('div');

  if (title === 'Backlog' && text !== 'undefined') {
    localDataMock.backlog.forEach((element) => {
      sectionMain.append(newListItem(element.name, element.id));
    });
  }
  if (title === 'Ready' && text !== 'undefined') {
    localDataMock.ready.forEach((element) => {
      sectionMain.append(newListItem(element.name, element.id));
    });
  }
  if (title === 'In Progress' && text !== 'undefined') {
    localDataMock.inProgress.forEach((element) => {
      sectionMain.append(newListItem(element.name, element.id));
    });
  }
  if (title === 'Finished' && text !== 'undefined') {
    localDataMock.finished.forEach((element) => {
      sectionMain.append(newListItem(element.name, element.id));
    });
  }

  sectionMain.classList.add('main_section_main');
  mainSection.append(sectionMain);

  if (text !== undefined) {
    sectionMain.append(newListItem(text, title));
  }
  const mainSectionFooter = document.createElement('div');
  mainSectionFooter.classList.add('main_section_footer');
  mainSection.append(mainSectionFooter);

  const mainSectionFooterBut = document.createElement('button');
  mainSectionFooterBut.classList.add('main_section_footer_but');
  mainSectionFooter.append(mainSectionFooterBut);

  const mainSectionFooterButSpan = document.createElement('span');
  mainSectionFooterButSpan.classList.add('main_section_footer_but_span');
  mainSectionFooterButSpan.innerText = ' + Add card';

  mainSectionFooterBut.append(mainSectionFooterButSpan);

  if (mainSection.classList.contains('backlog')) {
    mainSectionFooterBut.addEventListener('click', () => {
      const storeBacklog = store.getData().backlog;
      let id = 0;
      storeBacklog.forEach(() => {
        id = id + 1;
      });
      const newinputList = document.createElement('input');
      newinputList.setAttribute('type', 'text');
      newinputList.classList.add('input_list');

      if (mainSectionFooterBut.getAttribute('disabled')) {
        
        return;
      }

      mainSectionFooterBut.setAttribute('disabled', 'disabled');
      newinputList.addEventListener('blur', () => {
        if (newinputList.value.trim() === '') {
          mainSectionFooterBut.removeAttribute('disabled');
          newinputList.remove();

          return;
        }

        sectionMain.append(newListItem(newinputList.value, id));
        store.add(newinputList.value, id, 'backlog');
        newinputList.remove();
        mainSectionFooterBut.removeAttribute('disabled');
      });

      sectionMain.append(newinputList);
      newinputList.focus();
    });
  }
  if (mainSection.classList.contains('ready')) {
    if (localDataMock.backlog.length <= 1) {
      mainSectionFooterBut.setAttribute('disabled', 'disabled');
    } else {
      mainSectionFooterBut.removeAttribute('disabled');
    }

    mainSectionFooterBut.addEventListener('click', () => {
      transitionToTheList('backlog', 'ready');
    });
  }

  if (mainSection.classList.contains('inprogress')) {
    if (localDataMock.ready.length <= 1) {
      mainSectionFooterBut.setAttribute('disabled', 'disabled');
    } else {
      mainSectionFooterBut.removeAttribute('disabled');
    }

    mainSectionFooterBut.addEventListener('click', () => {
      transitionToTheList('ready', 'inProgress');
    });
  }

  if (mainSection.classList.contains('finished')) {
    if (localDataMock.inProgress.length <= 1) {
      mainSectionFooterBut.setAttribute('disabled', 'disabled');
    } else {
      mainSectionFooterBut.removeAttribute('disabled');
    }
    mainSectionFooterBut.addEventListener('click', () => {
      transitionToTheList('inProgress', 'finished');
    });
  }

  return mainSection;
}; //создаю блок со списком

mainContainer.append(addMainDivList());
