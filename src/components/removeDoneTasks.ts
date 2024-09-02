export function removeDoneTasks(button: HTMLButtonElement) {
  const removeHandler = () => {
    const tasksList = document.querySelector<HTMLUListElement>('#tasksList');
    const checkedTasks = tasksList?.getElementsByClassName('checked')!;
    const tasksCount = checkedTasks.length;

    var i = 0; // for loop()

    // for slow remove animation
    function loop() {
      setTimeout(function () {
        checkedTasks[0].remove();
        i++;
        if (i < tasksCount) {
          loop();
        }
      }, 200);
    }
    loop(); // loop start
  };
  button.addEventListener('click', () => removeHandler(), false);
}
