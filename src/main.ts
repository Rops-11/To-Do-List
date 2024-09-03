import './style.css';
import { addTask } from './components/addTask.ts';
import { taskPressed } from './components/taskPressed.ts';
import { removeTask } from './components/removeTask.ts';
import { removeDoneTasks } from './components/removeDoneTasks.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
  <div class="interface">
    <div class="taskMaker">
      <h1>TO DO LIST</h1>
      <div class="inputContainer" id='submit'>
        <input 
        id="task" 
        class="taskInput" 
        type="text" 
        placeholder="What will you be doing?">
        <button class="addButton">
          Add Task
        </button>
        <button class='removeButton'>
          Remove Tasks Done
        </button>
      </div>
    </div>
    <ul id="tasksList">
    </ul>
  </div>
`;

addTask(document.querySelector<HTMLButtonElement>('.addButton')!);
taskPressed(document.querySelector<HTMLUListElement>('#tasksList')!);
removeTask(document.querySelector<HTMLUListElement>('#tasksList')!);
removeDoneTasks(document.querySelector<HTMLButtonElement>('.removeButton')!);
