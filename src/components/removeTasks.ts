import { Task } from '../main';
import { saveStorage } from './localStorage';

export const removeTask = (uList: HTMLUListElement, taskArray: Array<Task>) => {
  const taskHandler = (ev: Event) => {
    if ((<HTMLElement>ev.target).tagName === 'SPAN') {
      let target = <HTMLElement>ev.target!;
      let taskTab = target.parentElement!;
      let uListChildren = Array.from(taskTab.parentElement?.children!);
      let targetIndex = uListChildren.indexOf(taskTab);

      taskTab.id = 'fade';
      setTimeout(() => {
        taskTab?.remove();
        taskArray.splice(targetIndex, 1);
        saveStorage(taskArray);
      }, 500);
    }
  };
  uList!.addEventListener(
    'click',
    (ev) => {
      taskHandler(ev);
    },
    false
  );
};

export const removeDoneTasks = (
  button: HTMLButtonElement,
  taskArray: Array<Task>
) => {
  const removeHandler = () => {
    const tasksList = document.querySelector<HTMLUListElement>('#tasksList');
    const checkedTasks = tasksList?.getElementsByClassName('checked')!;
    const tasksCount = checkedTasks.length;

    let i = 0; // for loop()

    // for slow remove animation
    function loop() {
      setTimeout(function () {
        checkedTasks[0].id = 'fade';
        setTimeout(() => {
          checkedTasks[0].remove(), taskArray.splice(0, 1);
          saveStorage(taskArray);
        }, 200); // Removes a Done Task
        i++; // add 1 on the loop
        if (i < tasksCount) {
          loop(); // calls the function again
        }
      }, 500); // 0.2 seconds delay
    }
    // loop start
    if (tasksCount !== 0) {
      loop();
    }
  };
  button.addEventListener('click', () => removeHandler(), false);
};
