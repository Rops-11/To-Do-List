export function removeDoneTasks(button: HTMLButtonElement) {
  const removeHandler = () => {
    const tasksList = document.querySelector<HTMLUListElement>('#tasksList');
    const checkedTasks = tasksList?.getElementsByClassName('checked')!;
    const tasksCount = checkedTasks.length;

    let i = 0; // for loop()

    // for slow remove animation
    function loop() {
      setTimeout(function () {
        checkedTasks[0].remove(); // Removes a Done Task
        i++; // add 1 on the loop
        if (i < tasksCount) {
          loop(); // calls the function again
        }
      }, 200); // 0.2 seconds delay
    }
    loop(); // loop start
  };
  button.addEventListener('click', () => removeHandler(), false);
}
