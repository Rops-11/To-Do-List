import { Task } from '../main';
import { renderAddedTask } from './renderTasks';

export const addTask = (form: HTMLFormElement, taskArray: Array<Task>) => {
  const addTask = () => {
    let task = document.querySelector<HTMLInputElement>('#task')!.value;
    let dueDate = document.querySelector<HTMLInputElement>('#date')!.value;
    let newTask: Task = {
      content: task,
      date: new Date(), // date placed
      dueDate: dueDate,
      checked: false,
    };

    // Appending
    if (task !== '') {
      taskArray.push(newTask);
      renderAddedTask(taskArray);
      document.querySelector<HTMLInputElement>('#task')!.value = '';
      document.querySelector<HTMLInputElement>('#date')!.value = '';
    } else {
      alert('Write your Task.');
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
  });
};
