import { store } from '../back/Store.js';
import { render } from '../renderTask.js';

export function newListOptionTask() {
  const list = document.createElement('select');
  const option1 = document.createElement('option');
  option1.setAttribute('disabled', '');
  option1.setAttribute('selected', '');
  option1.innerText = 'Выберите значение';
  const option2 = document.createElement('option');
  option2.innerText = 'Очистить список задач';
  const option3 = document.createElement('option');
  option3.innerText = 'Удалить блок задач';
  list.classList.add('optionListTask');
  list.append(option1);
  list.append(option2);
  list.append(option3);

  list.addEventListener('change', (event) => {
    switch (list.value) {
      case 'Удалить блок задач':
        store.deletedList(
          list.closest('.main_section').getAttribute('data-atribute')
        );
        render();
        break;

      case 'Очистить список задач':
        store.clearListTasks(
          list.closest('.main_section').getAttribute('data-atribute')
        );
        render();
        break;

        default:return
    }
  });

  return list;
}
