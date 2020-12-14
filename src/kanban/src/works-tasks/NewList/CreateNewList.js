import { newListItem } from '../WorkItemList/newListItem.js';
import { store } from '../back/Store.js';
import { render } from '../renderTask.js';
export function createNewList(title, task) {
  const mainSection = document.createElement('div');

  mainSection.classList.add('main_section');

  const mainSectionHeader = document.createElement('div');
  mainSectionHeader.classList.add('main_section_header');

  mainSection.append(mainSectionHeader);

  const mainHeaderTitle = document.createElement('span');
  mainHeaderTitle.classList.add('main_header_title');
  if (title) {
    mainSection.setAttribute('data-atribute', title);
    mainHeaderTitle.innerText = title;
  } else {
    const input = document.createElement('input');
    input.classList.add('input_new_list');
    input.setAttribute('type', 'text');

    input.addEventListener('blur', () => {
      if (input.value.trim()) {
        store.newListTask(input.value);
        render();
      } else {
        mainSection.remove();
      }
    });

    mainSectionHeader.append(input);
  }
  mainSectionHeader.append(mainHeaderTitle);

  const mainSectionSetting = document.createElement('button');
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

  if (task) {
    task.forEach((element) => {
      const newListTask = newListItem(element.name);
      newListTask.classList.add(element.id);
      sectionMain.append(newListTask);
    });
  }

  return mainSection;
}
