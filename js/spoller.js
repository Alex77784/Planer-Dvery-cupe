let btnSpoller = document.querySelectorAll('.spoller__btn-arrow');
let boxText = document.querySelector('.spoller__box-text');

btnSpoller.forEach(elt => elt.addEventListener('click', toggleSpoller));
function toggleSpoller(evt) {
  let text = evt.target.parentElement.nextElementSibling;
  this.classList.toggle('active');

  if (this.classList.contains('active')) {
    boxText.style.maxHeight = boxText.scrollHeight + 'px';
    text.style.maxHeight = text.scrollHeight + 'px';
  } else {
    boxText.style.maxHeight = 0;
    text.style.maxHeight = 0;
  }
}