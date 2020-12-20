export const newListItem = (text) => {
    const sectionMainItems = document.createElement('div');
  
    sectionMainItems.classList.add('main_section_main_items');
    sectionMainItems.innerText = text;
  
    return sectionMainItems;
  };