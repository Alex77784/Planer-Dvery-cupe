let buttonText = document.querySelector('.pre-footer__btn-send');
let mediaWidth425 = window.matchMedia('(max-width: 425px)');

mediaWidth425.matches ? buttonText.textContent = 'Вызвать замерщика' :
  buttonText.textContent;

mediaWidth425.addEventListener('change', function () {
  mediaWidth425.matches ? buttonText.textContent = 'Вызвать замерщика' :
    buttonText.textContent += ' бесплатно';
  console.log(buttonText.textContent.charAt(-1))
})