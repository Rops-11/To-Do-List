import './style.css';
import { addTask } from './components/addTask.ts';
import { selectAll, taskPressed } from './components/taskInteractionHandler.ts';
import { removeTask, removeDoneTasks } from './components/removeTasks.ts';
import { renderTasks } from './components/renderTasks.ts';
import { sortTasks } from './components/sortTasks.ts';

export const storageKey = 'toDoListKey';

export type Task = {
  content: string;
  date: Date;
  dueDate: string;
  checked: boolean;
};

const storage = JSON.parse(localStorage.getItem(storageKey)!);

// array variable catcher
let tasksArray: Array<Task> = storage !== null ? storage : [];

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
<div class="interface">
  <div class="taskMaker">
    <h1>TO DO LIST</h1>
    <div class="inputContainer" id='submit'>
      <form class='submit'>
        <input 
        id="task" 
        class="taskInput" 
        type="text" 
        placeholder="What will you be doing?">
        <input 
        id="date" 
        class="taskInput" 
        type="datetime-local" 
        placeholder="What will you be doing?">
        <button class="addButton" type="submit">
          Add Task
        </button>
      </form>
      <button class='removeButton'>
          Remove Tasks Done
      </button>
    </div>
  </div>
  <div class='tasksContainer'>
    <button class="selectAll">Select All</button>
    <div class="sortContainer">
      <select name="sortOptions" id="sortOptions">
        <option value="Alphabetically">Alphabetically</option>
        <option value="By Date">By Date</option>
        <option value="By Date">By Due Date</option>
      </select>
      <button class="sortButton">Sort</button>
    </div>
    <ul id="tasksList">
    </ul>
  </div>
</div>
`;

console.log(tasksArray);
if (tasksArray.length !== 0) {
  renderTasks(tasksArray);
}

addTask(document.querySelector<HTMLFormElement>('.submit')!, tasksArray);

taskPressed(
  document.querySelector<HTMLUListElement>('#tasksList')!,
  tasksArray
);

selectAll(document.querySelector<HTMLButtonElement>('.selectAll')!, tasksArray);

removeTask(document.querySelector<HTMLUListElement>('#tasksList')!, tasksArray);

removeDoneTasks(
  document.querySelector<HTMLButtonElement>('.removeButton')!,
  tasksArray
);

sortTasks(
  tasksArray,
  document.querySelector<HTMLButtonElement>('.sortButton')!,
  document.querySelector<HTMLSelectElement>('#sortOptions')!
);
