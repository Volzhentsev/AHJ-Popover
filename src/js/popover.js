export default class Popover {
  constructor(parent, title, text) {
    this.parent = parent;
    this.title = title;
    this.text = text;
  }

  init() {
    this.togglePopover();
  }

  togglePopover() {
    const popover = this.parent.querySelector('.popover');
    if (popover) {
      this.parent.removeChild(popover);
    } else {
      const popoverEl = document.createElement('div');
      popoverEl.classList.add('popover');

      const popoverHeader = document.createElement('div');
      popoverHeader.classList.add('popover-header');
      popoverHeader.textContent = this.title;

      const popoverMessage = document.createElement('div');
      popoverMessage.classList.add('popover-text');
      popoverMessage.textContent = this.text;

      popoverEl.insertAdjacentElement('beforeend', popoverHeader);
      popoverEl.insertAdjacentElement('beforeend', popoverMessage);

      this.parent.appendChild(popoverEl);

      const button = this.parent.querySelector('.btn');

      popoverEl.style.top = `${
        button.offsetTop - popoverEl.offsetHeight - 15
      }px`;
      popoverEl.style.left = `${
        button.offsetLeft + button.offsetWidth / 2 - popoverEl.offsetWidth / 2
      }px`;
    }
  }
}
