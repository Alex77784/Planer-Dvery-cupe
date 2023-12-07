let btnsReadAll = document.querySelectorAll('[data-button-show]');

for (let elem of btnsReadAll) {
  elem.addEventListener('click', function () {
    this.previousElementSibling.classList.toggle('open');
    this.classList.toggle('hidden');
  })
}
