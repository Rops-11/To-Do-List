import { Task } from '../main';
import { renderTasks } from './renderTasks';

export const sortTasks = (
  taskArray: Array<Task>,
  button: HTMLButtonElement,
  sortOptions: HTMLSelectElement
) => {
  const removeTasks = () => {
    const tasksList = document.querySelector<HTMLUListElement>('#tasksList');
    const tasks = document.getElementsByTagName('li');
    let tasksCount = tasksList?.childElementCount!;
    let i = 0; // for loop()

    // for slow remove animation
    function loop() {
      setTimeout(function () {
        tasks[0].remove();

        i++; // add 1 on the loop
        if (i < tasksCount) {
          loop(); // calls the function again
        }
      }, 0.2); // 0.5 seconds delay
    }
    // loop start
    if (tasksCount !== 0) {
      loop();
    }
  };

  console.log(taskArray);
  let sortValue = sortOptions.value;

  const sortByDate = () => {
    taskArray.sort((a, b) => a.date.getTime() - b.date.getTime());
    renderTasks(taskArray);
  };

  const sortByDueDate = () => {
    taskArray.sort(
      (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    );
    renderTasks(taskArray);
  };

  const sortAlphabetically = () => {
    removeTasks();
    taskArray.sort((a, b) => a.content.localeCompare(b.content));
    if (taskArray.length !== 0) {
      renderTasks(taskArray);
    }
  };

  button.addEventListener(
    'click',
    () => {
      if (sortValue === 'Alphabetically') {
        sortAlphabetically();
      } else if (sortValue === 'By Date') {
        sortByDate();
      } else if (sortValue === 'By Due Date') {
        sortByDueDate();
      }
    },
    false
  );
};
