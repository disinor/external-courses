import {store} from './store.js'
import {newListItem} from './newListItem.js'
/* import {store} from './store.js' */

export const newListSelect = (text, block, id, currentBlock, prevBlock) => {
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