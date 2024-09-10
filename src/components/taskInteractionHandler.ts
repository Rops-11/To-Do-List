import { Task } from '../main';
import { saveStorage } from './localStorage';

const placeCheck = (
  item: HTMLLIElement,
  taskArray: Array<Task>,
  itemIndex: number
) => {
  // should be in render
  let checkbox = item.querySelector<HTMLImageElement>('#checkbox');
  let checked = 'public/assets/checkbox-check-svgrepo-com.svg';
  let unchecked = 'public/assets/checkbox-unchecked-svgrepo-com.svg';

  console.log(itemIndex);

  item.classList.contains('checked') // should be in render
    ? (item.classList.remove('checked'),
      (checkbox!.src = unchecked),
      (taskArray[itemIndex].checked = false))
    : (item.classList.add('checked'),
      (checkbox!.src = checked),
      (taskArray[itemIndex].checked = true));
};

export const taskPressed = (
  uList: HTMLUListElement,
  taskArray: Array<Task>
) => {
  const pressedHandler = (ev: Event) => {
    if ((<HTMLElement>ev.target).tagName === 'LI') {
      let target = <HTMLLIElement>ev.target;
      let uListChildren = Array.from(target.parentElement?.children!);
      let targetIndex = uListChildren.indexOf(target);

      placeCheck(target, taskArray, targetIndex);
    }
    saveStorage(taskArray);
  };
  uList!.addEventListener('click', (ev) => pressedHandler(ev), false);
};

export const selectAll = (
  button: HTMLButtonElement,
  taskArray: Array<Task>
) => {
  const selectAll = () => {
    const tasksList = document.querySelector<HTMLUListElement>('#tasksList')!;
    const tasks = Array.from(tasksList.children!);
    const tasksCount = tasks.length;
    let i = 0; // for loop()

    function loop() {
      let currentItem = <HTMLLIElement>tasks[i];
      let currentIndex = tasks.indexOf(currentItem);
      setTimeout(function () {
        setTimeout(() => {
          placeCheck(currentItem, taskArray, currentIndex);
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
      selectAll();
    },
    false
  );
};
