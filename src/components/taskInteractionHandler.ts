import { Task } from '../main';
import { saveStorage } from './localStorage';

const placeCheck = (
  item: HTMLLIElement,
  taskArray: Array<Task>,
  itemIndex: number,
  selectType: string
) => {
  // should be in render
  let checkbox = item.querySelector<HTMLImageElement>('#checkbox');
  let checked = '/static/assets/checkbox-check-svgrepo-com.svg';
  let unchecked = '/static/assets/checkbox-unchecked-svgrepo-com.svg';

  console.log(itemIndex);

  if (item.classList.contains('checked') === false) {
    item.classList.add('checked');
    checkbox!.src = checked;
    taskArray[itemIndex].checked = true;
  } else if (selectType !== 'all') {
    item.classList.remove('checked');
    checkbox!.src = unchecked;
    taskArray[itemIndex].checked = false;
  }
};

export const taskPressed = (
  uList: HTMLUListElement,
  taskArray: Array<Task>
) => {
  const pressedHandler = (ev: Event) => {
    const selectType = 'one';
    if ((<HTMLElement>ev.target).tagName === 'LI') {
      let target = <HTMLLIElement>ev.target;
      let uListChildren = Array.from(target.parentElement?.children!);
      let targetIndex = uListChildren.indexOf(target);

      placeCheck(target, taskArray, targetIndex, selectType);
    }
    saveStorage(taskArray);
  };
  uList!.addEventListener('click', (ev) => pressedHandler(ev), false);
};

export const selectAll = (
  button: HTMLButtonElement,
  taskArray: Array<Task>
) => {
  const selectAllHandler = () => {
    const selectType = 'all';
    const tasksList = document.querySelector<HTMLUListElement>('#tasksList')!;
    const tasks = Array.from(tasksList.children!);
    const tasksCount = tasks.length;
    let i = 0; // for loop()

    function loop() {
      let currentItem = <HTMLLIElement>tasks[i];
      let currentIndex = tasks.indexOf(currentItem);
      setTimeout(function () {
        setTimeout(() => {
          placeCheck(currentItem, taskArray, currentIndex, selectType);
          saveStorage(taskArray);
        }, 500);
        i++; // add 1 on the loop
        if (i < tasksCount) {
          loop(); // calls the function again
        }
      }, 200); // 0.2 seconds delay
    }
    // loop start
    if (tasksCount !== 0) {
      loop();
    }
  };

  button.addEventListener(
    'click',
    () => {
      selectAllHandler();
    },
    false
  );
};
