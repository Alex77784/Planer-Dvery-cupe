let popupPriceCalc = `
<div class="price-calc">
    <div class="price-calc__bd-close"></div>
    <div class="price-calc__window-bd">
        <img src="./images/popup/price-calc-modal.png" alt="background">
        <div class="price-calc__layer">
            <button class="price-calc__btn-close">
                <img src="./images/popup/btn-close.svg" alt="close">
            </button>
            <h2 class="price-calc__title">
                Расчёт цены за 3 минуты*
            </h2>
            <div class="price-calc__box-column">
                <div class="price-calc__col1">
                    <p class="price-calc__text1">
                        Двери-купе по вашим размерами <br> <span>и самой низкой цене</span> <strong>
                            в
                            Санкт Петербурге
                        </strong>
                    </p>
                    <p class="price-calc__text2">
                        Поможем выбрать двери-купе, которые сделают вашу квартиру еще более удобной
                        и привлекательной
                    </p>
                    <ul class="price-calc__list">
                        <li class="price-calc__item">офис без выходных</li>
                        <li class="price-calc__item">монтаж в день доставки</li>
                        <li class="price-calc__item">изготовление от 2-5 дней</li>
                        <li class="price-calc__item">отзывы на Яндекс ⭐️ 4.9</li>
                    </ul>
                </div>
                <div class="price-calc__col2">
                    <form class="price-calc__form">
                        <span class="price-calc__label">Ваше имя</span>
                        <input class="price-calc__input i1" placeholder="Имя" name="user"
                            type="text">
                        <span class="price-calc__label">Телефон</span>
                        <input class="price-calc__input i2" name="phone" type="tel"
                            data-phone-pattern placeholder="+7(___) ___-__-__">
                        <button type="submit" class="price-calc__btn-send-app">Отправить
                            заявку</button>
                        <p class="price-calc__work-time">* в рабочее время</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
`;
//--------------popup
let calcBtn = document.querySelectorAll('.price-calculation');//--------------------btn call script
let placeInsertDoc = document.querySelector('.wrapper');// ---------connect in document

calcBtn.forEach(btn => btn.addEventListener('click', popupCalcPrice));
function popupCalcPrice() {
    placeInsertDoc.insertAdjacentHTML('beforeEnd', popupPriceCalc);// -------------connect in document
    let modalWindow = document.querySelector('.price-calc');
    let bdPopupCalcPrice = document.querySelector('.price-calc__bd-close');
    let btnClose = document.querySelector('.price-calc__btn-close');
    let windowPopup = document.querySelector('.price-calc__window-bd');
    let flagValidatePhone = false;
    let inputUser = document.querySelector('.i1');
    let inputPhone = document.querySelector('.i2');
    let submitForm = document.querySelector('.price-calc__form');
    setTimeout(() => modalWindow.classList.add('active'), 300);

    // ----------
    let token = "6126020399:AAFXu7EJ5rBMRX_fOPcsT-mxKQa6jvujEaE";
    let chatId = "-976033618";
    let siteName = "Планер Двери-купе";

    bdPopupCalcPrice.addEventListener('click', closeModalPriceCalculation);
    btnClose.addEventListener('click', closeModalPriceCalculation);

    submitForm.addEventListener('submit', sentOnTelegram);
    function sentOnTelegram(e) {
        e.preventDefault();
        let phoneNum = '';

        if (validateName() && flagValidatePhone) {
            let dataForm = {
                'Заказ с сайта:': siteName,
                'Имя:': inputUser.value,
                'Телефон:': inputPhone.value
            }
            for (let key in dataForm) {
                phoneNum += `<b>${key}</b> ${dataForm[key]}%0A`;
            }

            fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${phoneNum}`);

            // ---------------------------
            windowPopup.classList.add('sent-call');
            windowPopup.innerHTML = '';
            windowPopup.innerHTML = 'В скоре мы Вам пезвоним';

            setTimeout(() => modalWindow.classList.remove('active'), 3700);
            setTimeout(() => modalWindow.remove(), 4000);
        }
    }

    inputUser.addEventListener('blur', validateName);
    inputUser.addEventListener('focus', cleanInput);

    let phone_inputs = document.querySelectorAll('[data-phone-pattern]');//-----------------attr on button
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, validatePhone);
        }
    }

    // -----------------------------------functions

    function closeModalPriceCalculation() {
        modalWindow.classList.remove('active');
        setTimeout(() => modalWindow.remove(), 400);
    }

    function cleanInput(e) {
        e.target.value = '';
        e.target.style.color = 'black';
    }

    function validateName() {
        let flag = true;
        if (inputUser.value == '' || inputUser.value == 'Укажите Ваше имя!') {
            inputUser.value = 'Укажите Ваше имя!';
            inputUser.style.color = 'red';
            flag = false;
        };
        return flag;
    }

    function validatePhone(e) {
        let el = e.target,
            clearVal = el.dataset.phoneClear,
            pattern = el.dataset.phonePattern,
            matrix_def = "+7(___) ___-__-__",
            matrix = pattern ? pattern : matrix_def,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                flagValidatePhone = false;
                return;
            } else {
                flagValidatePhone = true;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    };
}




