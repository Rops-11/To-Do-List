export function addTask(form: HTMLFormElement) {
  const addTask = () => {
    // Fetching Datas/Making Variables
    var task = document.querySelector<HTMLInputElement>('#task')!.value;
    const tasksList = document.querySelector<HTMLUListElement>('#tasksList')!;

    // Making Nodes
    const taskTab = document.createElement('li');
    const checkBox = document.createElement('img');
    checkBox.src = 'src/assets/unchecked.png';
    checkBox.id = 'checkbox';
    const taskText = document.createElement('p');
    taskText.innerHTML = task;
    const close = document.createElement('span');
    close.id = 'close';
    close.innerHTML = '&times;';

    // Appending
    if (task !== '') {
      taskTab.appendChild(checkBox);
      taskTab.appendChild(taskText);
      taskTab.appendChild(close);
      tasksList.appendChild(taskTab);
      document.querySelector<HTMLInputElement>('#task')!.value = '';
    } else {
      alert('Write your Task.');
    }
  };

  form.addEventListener(
    'submit',
    (e) => {
      e.preventDefault(), addTask();
    },
    false
  );
}
