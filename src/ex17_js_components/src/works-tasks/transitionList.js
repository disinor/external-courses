import {newListSelect} from './newListSelect.js'
import { localDataMock } from './store.js';
export const transitionToTheList = (prevBlock, currentBlock) => {
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