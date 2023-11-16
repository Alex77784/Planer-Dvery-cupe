let btnSpoller = document.querySelector('.spoller__btn-arrow');
let boxText = document.querySelector('.spoller__box-text');

btnSpoller.addEventListener('click', toggleSpoller);
function toggleSpoller() {
    this.classList.toggle('active');
    if (this.classList.contains('active')) {
        boxText.style.maxHeight = boxText.scrollHeight + 'px';
    } else {
        boxText.style.maxHeight = 0;
    }
}