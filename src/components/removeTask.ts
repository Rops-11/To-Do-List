export function removeTask(list: HTMLUListElement) {
  const taskHandler = (ev: Event) => {
    if ((<HTMLElement>ev.target).tagName === 'SPAN') {
      var target = <HTMLElement>ev.target!;
      var taskTab = target.parentElement;
      console.log(target);
      console.log(taskTab);
      taskTab?.remove();
    }
  };
  list!.addEventListener('click', (ev) => taskHandler(ev), false);
}
