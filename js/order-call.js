let popup = `
<div class="bd-popup">
    <div class="popup-window">
        <button class="btn-close">
            <img src="./images/popup/btn-close.svg" alt="close">
        </button>
        <h2 class="title">Заказать звонок</h2>
        <span class="name-user">Ваше имя</span>
        <input class="name-area" placeholder="Имя" name="user" type="text">
        <span class="phone-user">Телефон</span>
        <input class="phone-area" name="phone" type="tel"
        data-phone-pattern placeholder="+7(___) ___-__-__">
        <button class="btn-send-app">Отправить заявку</button>
        <p class="agree">
            Заполняя данную форму я даю согласие
            на обработку персональных данных и
            принимаю условия политики
        </p>
    </div>
</div>`;

//--------------popup
let backCallBtn = document.querySelector('.header__btn');//--------------------btn call script
let placeInsertDocument = document.querySelector('.header__inner');// ---------connect in document

backCallBtn.addEventListener('click', popupBackCall);
function popupBackCall() {
    placeInsertDocument.insertAdjacentHTML('beforeEnd', popup);// -------------connect in document
    let bdPopup = document.querySelector('.bd-popup');
    let windowPopup = document.querySelector('.popup-window');
    let btnClose = document.querySelector('.btn-close');
    let inputUser = document.querySelector('.name-area');
    let inputPhone = document.querySelector('.phone-area');
    let sendAppBtn = document.querySelector('.btn-send-app');
    let flagValidatePhone = false;
    setTimeout(() => bdPopup.classList.add('active'), 100);

    // ----------
    let token = "6126020399:AAFXu7EJ5rBMRX_fOPcsT-mxKQa6jvujEaE";
    let chatId = "-976033618";
    let siteName = "Планер Двери-купе";

    sendAppBtn.addEventListener('click', sentOnTelegram);
    function sentOnTelegram() {
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

            setTimeout(() => bdPopup.classList.remove('active'), 3900);
            setTimeout(() => bdPopup.remove(), 4000);
        }
    }

    inputUser.addEventListener('blur', validateName);
    inputUser.addEventListener('focus', cleanInput);

    let phone_inputs = document.querySelectorAll('[data-phone-pattern]');//attr on button
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, validatePhone);
        }
    }

    // ----------
    btnClose.addEventListener('click', () => {
        bdPopup.classList.remove('active');
        setTimeout(() => bdPopup.remove(), 200);
    });

    // -----------------------------------functions
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
};

