export function taskPressed(list: HTMLUListElement) {
  const taskHandler = (ev: Event) => {
    if ((<HTMLElement>ev.target).tagName === 'LI') {
      var target = <HTMLElement>ev.target;
      var checkbox = target.querySelector<HTMLImageElement>('#checkbox');
      var checked = 'src/assets/checked.png';
      var unchecked = 'src/assets/unchecked.png';

      target.className == 'checked'
        ? (target.classList.remove('checked'), (checkbox!.src = unchecked))
        : (target.classList.add('checked'), (checkbox!.src = checked));
    }
  };
  list!.addEventListener('click', (ev) => taskHandler(ev), false);
}
