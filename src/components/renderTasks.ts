import { Task } from '../main';
import { saveStorage } from './localStorage';

const makeTask = (taskArray: Array<Task>, itemIndex: number) => {
  // The Unordered List Tab
  const tasks = document.querySelector<HTMLUListElement>('#tasksList');
  // values of the current item in list
  const currentItemValue = taskArray[itemIndex].content;
  const currentItemDueDate = taskArray[itemIndex].dueDate;
  console.log(currentItemDueDate);
  const currentItemChecked = taskArray[itemIndex].checked;
  const currentDate = new Date();

  // Making Nodes/Modifications
  const taskTab = document.createElement('li');
  taskTab.tabIndex = itemIndex;
  taskTab.id = 'fade';
  taskTab.draggable = true;
  // taskTab.classList.add('due');

  let dateText = '';
  if (currentItemDueDate !== '') {
    dateText = 'Due Date: ' + currentItemDueDate.replace('T', ' ');
    if (new Date(currentItemDueDate) < currentDate) {
      taskTab.classList.add('due');
    }
  }
  const checkBox = document.createElement('img');
  if (currentItemChecked === true) {
    checkBox.src = 'public/static/assets/checkbox-check-svgrepo-com.svg';
    taskTab.classList.add('checked');
  } else {
    checkBox.src = 'public/static/assets/checkbox-unchecked-svgrepo-com.svg';
  }

  checkBox.id = 'checkbox';
  const taskText = document.createElement('p');
  taskText.innerHTML = currentItemValue;
  const taskDueDate = document.createElement('p');
  taskDueDate.className = 'dueDate';
  taskDueDate.innerHTML = dateText;
  const close = document.createElement('span');
  close.id = 'close';
  close.innerHTML = '&times;';

  // Appending
  taskTab.appendChild(checkBox);
  taskTab.appendChild(taskText);
  taskTab.appendChild(taskDueDate);
  taskTab.appendChild(close);
  tasks?.appendChild(taskTab);

  // places a task in list
  setTimeout(() => {
    taskTab.id = 'normal';
  }, 500);
};

export const renderTasks = (taskArray: Array<Task>) => {
  const renderAllTasks = () => {
    const listCount = taskArray.length;
    let i = 0; // for loop()

    // for slow remove animation
    function loop() {
      setTimeout(function () {
        // currentItem.id = 'normal';
        makeTask(taskArray, i);
        i++; // add 1 on the loop
        if (i < listCount) {
          loop(); // calls the function again
        }
      }, 300); // 0.5 seconds delay
    }
    loop(); // loop start
  };
  renderAllTasks();
};

export const renderAddedTask = (taskArray: Array<Task>) => {
  makeTask(taskArray, taskArray.length - 1);
  saveStorage(taskArray);
};
