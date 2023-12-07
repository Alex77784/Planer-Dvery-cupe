let photoWorks = document.querySelectorAll('.reviews__photo-of-works');
let navMobile = document.querySelector('.header-mobile');
let modalPhoto = `
<div class="modal-show-photo">
    <div class="modal-show-photo__bd-close"></div>
    <div class="modal-show-photo__window-dialog">
    
       <div class="modal-show-photo__carousel">
                <div class="modal-show-photo__wrap-carl">
                  <button class="modal-show-photo__btn-left">
                    <svg width="30" height="190" viewBox="0 0 30 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Group 11">
                        <path id="Vector 84" d="M28.8176 1C28.8176 2.99059 10.9392 63.298 2 95L28.8176 189"
                          stroke="white" stroke-width="2" />
                      </g>
                    </svg>
                  </button>
                  <div class="modal-show-photo__slider">
                    <button class="modal-show-photo__button-close">
                      &#10006
                    </button>
                  </div>
                  <button class="modal-show-photo__btn-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="190" viewBox="0 0 30 190" fill="none">
                      <path d="M0.999979 1C0.999979 2.99059 18.8784 63.298 27.8176 95L0.999979 189" stroke="white"
                        stroke-width="2" />
                    </svg>
                  </button>
                </div>
              </div>

    </div>
</div>`;

photoWorks.forEach(el => el.addEventListener('click', clickPhoto));
function clickPhoto(evt) {
  let boxPhotos = evt.currentTarget.children;

  if (evt.target.dataset.click == 'photo-works') {
    placeInsertDocument.insertAdjacentHTML('beforeEnd', modalPhoto);

    let modalWind = document.querySelector('.modal-show-photo'),
      buttonClose = document.querySelector('.modal-show-photo__bd-close'),
      btnClose = document.querySelector('.modal-show-photo__button-close'),
      slider = document.querySelector('.modal-show-photo__slider'),
      btnLeft = modalWind.querySelector('.modal-show-photo__btn-left'),
      btnRight = modalWind.querySelector('.modal-show-photo__btn-right');

    for (let elem of boxPhotos) {
      slider.insertAdjacentHTML('afterBegin',
        `<div class="modal-show-photo__item">
        <img src="${elem.src}" alt="picture">
      </div>
    `);
    }
    navMobile.style.display = 'none';

    btnLeft.addEventListener('click', () => slider.scrollBy(-slider.offsetWidth, 0));
    btnRight.addEventListener('click', () => slider.scrollBy(slider.offsetWidth, 0));
    buttonClose.addEventListener('click', () => {
      document.querySelector('.modal-show-photo').remove()
      navMobile.style.display = 'inline-block';
    });
    btnClose.addEventListener('click', () => {
      document.querySelector('.modal-show-photo').remove()
      navMobile.style.display = 'inline-block';
    });
  }
}
