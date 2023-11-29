let btnsReadAll = document.querySelectorAll('.projects__text-open');

for (let elem of btnsReadAll) {
    elem.addEventListener('click', function () {
        this.previousElementSibling.classList.toggle('open');
        this.classList.toggle('hidden');
    })
}
