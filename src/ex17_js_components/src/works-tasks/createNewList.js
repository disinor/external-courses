import { localDataMock } from './store.js';
import { newListItem } from './newListItem.js';

import { store } from './store.js';
import{ transitionToTheList} from './transitionList.js'

const titleToCamelCaseNotation = (selectedRow) => {
  const row = selectedRow;
  let str = [];

  for (let i = 0; i < row.length; i++) {
    if (row[i] === ' ') {
      continue;
    } else {
      str[i] = row[i];
      str[0] = str[0].toLowerCase();
    }
  }

  return str.join('');
};

export function createNewList(title, text) {
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

  sectionMain.classList.add('main_section_main');
  mainSection.append(sectionMain);

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

  localDataMock[titleToCamelCaseNotation(title)].forEach((element) => {
    sectionMain.append(newListItem(element.name, element.id));
  });

  if (text !== undefined) {
    sectionMain.append(newListItem(text, title));
  }

  if (mainSection.classList.contains('backlog')) {
    mainSectionFooterBut.addEventListener('click', () => {
      const storeBacklog = store.getData().backlog;
      const newinputList = document.createElement('input');
      let id = 0;

      storeBacklog.forEach(() => {
        id = id + 1;
      });

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

  if (
    mainSection.classList.contains(
      titleToCamelCaseNotation(title).toLowerCase()
    ) &&
    title !== 'Backlog'
  ) {
    let preventBlock = '';

    switch (titleToCamelCaseNotation(title).toLowerCase()) {
      case 'ready':
        preventBlock = 'backlog';
        break;

      case 'inprogress':
        preventBlock = 'ready';
        break;

      case 'finished':
        preventBlock = 'inProgress';
        break;

      default:
        return mainSection;
    }

    if (localDataMock[preventBlock].length <= 1) {
      mainSectionFooterBut.setAttribute('disabled', 'disabled');
    } else {
      mainSectionFooterBut.removeAttribute('disabled');
    }

    mainSectionFooterBut.addEventListener('click', () => {
      transitionToTheList(
        titleToCamelCaseNotation(preventBlock),
        titleToCamelCaseNotation(title)
      );
    });
  }

  return mainSection;
}
