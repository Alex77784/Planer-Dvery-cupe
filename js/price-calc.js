let inputHieght = document.querySelectorAll('[data-hieght-input]');
let inputWidth = document.querySelectorAll('[data-width-input]');
let quantityDoorBtn = document.querySelector('.quantity-doors__select-doors');
let submitBtn = document.querySelector('.quantity-doors__select-doors');
let priceCell = document.querySelector('.col1-rows__price');
let dataHieght = 0, dataWidth = 0;


// 1
[...inputHieght].forEach(elem => elem.addEventListener('blur', receptionNumberHieght));
function receptionNumberHieght(element) {
    let a = Number(element.target.value),
        b = document.querySelector('.h');

    if (a && a >= 2045 && a <= 3400) {
        dataHieght = a / 1000;

        if (document.querySelector('.a')) b.previousElementSibling.remove();
    } else if (!(document.querySelector('.a'))) {
        b.insertAdjacentHTML("beforebegin", '<p class="a">Попробуйте снова</p>')
    }
}
// 2
[...inputWidth].forEach(elem => elem.addEventListener('blur', receptionNumberWidth));
function receptionNumberWidth(element) {
    let a = Number(element.target.value),
        b = document.querySelector('.w');

    if (a && a >= 900 && a <= 4000) {
        dataWidth = a / 1000;

        if (document.querySelector('.b')) b.previousElementSibling.remove();
    } else if (!(document.querySelector('.b'))) {
        b.insertAdjacentHTML("beforebegin", '<p class="b">Попробуйте снова</p>')
    }
}

// 3
quantityDoorBtn.addEventListener('click', selectBtnAndCalcPrice);
function selectBtnAndCalcPrice(event) {
    let priceDSPm2 = 1120,
        amountDSPm2 = ((dataHieght * dataWidth) - (dataHieght * dataWidth / 100 * 10)) * priceDSPm2,
        costOneSetDoor = 3250;

    if (event.target.closest('.quantity-doors__door')) {
        let sumSetDoors = Number(event.target.textContent) * costOneSetDoor;

        for (let elem of quantityDoorBtn.children) {
            elem.classList.remove('active');
        }
        event.target.classList.add('active');

        if (!(dataHieght == 0) && !(dataWidth == 0)) {
            let x = parseInt(amountDSPm2 + sumSetDoors) + ' ₽';
            priceCell.textContent = x.slice(0, 2) + ' ' + x.slice(2,);
        }
    }
}
// 3.1
[...quantityDoorBtn.children].forEach(element => {
    element.addEventListener('mouseover', hoverBtn);
});
function hoverBtn() {
    if (!(this.classList.contains('active'))) {
        this.classList.add('hover');
    }
    this.addEventListener('mouseleave', () => this.classList.remove('hover'))
}