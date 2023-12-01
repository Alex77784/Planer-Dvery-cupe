let sliders = document.querySelectorAll('.projects__slider');
let btnsL = document.querySelectorAll('.projects__btn-left');
let btnsR = document.querySelectorAll('.projects__btn-right');
let boxDots = document.querySelectorAll('.projects__box-dot');
let locationSlider = {
    'lockSl1': 0,
    'lockSl2': 0,
    'lockSl3': 0,
};

for (let i = 0; i < sliders.length; i++) {
    let x = sliders[i].children.length;
    let y = document.querySelectorAll('.projects-mobile650__count')[i].children[1];
    y.textContent = x < 10 ? '0' + x : x;

    createDot(x, i);
}

function createDot(amount, ind) {
    for (let i = 0; i < amount; i++) {
        let dot = document.createElement('li');
        dot.classList.add('projects__dot');
        if (i == 0) { dot.classList.add('active') };
        boxDots[ind].append(dot);
    }
}
// ------------
[...btnsL].forEach(buttonL => buttonL.addEventListener('click', moveL));
[...btnsR].forEach(buttonR => buttonR.addEventListener('click', moveR));
[...boxDots].forEach(dot => dot.addEventListener('click', toggleByDots));

function moveL() {
    let parent = this.parentElement.children;
    let holderDots = this.parentElement.nextElementSibling;

    for (let i = 1; i <= 3; i++) {
        if (holderDots.matches('.d' + i)) {
            if (locationSlider['lockSl' + i] > 0) { locationSlider['lockSl' + i]-- };
            [...holderDots.children].forEach(dot => dot.classList.remove('active'));
            [...holderDots.children][locationSlider['lockSl' + i]].classList.add('active');
        }
    }

    parent[1].scrollBy(-parent[1].offsetWidth, 0);
}

function moveR() {
    let parent = this.parentElement.children;
    let holderDots = this.parentElement.nextElementSibling;

    for (let i = 1; i <= 3; i++) {
        if (holderDots.matches('.d' + i)) {
            if (parent[1].children.length - 1 != locationSlider['lockSl' + i]) { locationSlider['lockSl' + i]++ };
            [...holderDots.children].forEach(dot => dot.classList.remove('active'));
            [...holderDots.children][locationSlider['lockSl' + i]].classList.add('active');
        }
    }

    parent[1].scrollBy(parent[1].offsetWidth, 0);
}

function toggleByDots(event) {
    let slidDot = event.currentTarget.previousElementSibling.children[1];

    for (let i = 1; i <= 3; i++) {
        if (event.currentTarget.matches('.d' + i) && event.target.closest('.projects__dot')) {
            [...event.currentTarget.children].forEach(dot => dot.classList.remove('active'));
            event.target.classList.add('active');

            [...event.currentTarget.children].forEach((el, ind) => {
                if (el.classList.contains('active')) { locationSlider['lockSl' + i] = ind; }
            })

            slidDot.scrollTo((slidDot.offsetWidth) * locationSlider['lockSl' + i], 0);
        }
    }
}

//---------------------- mobile version carousel -----------------------
let buttonBox = document.querySelectorAll('.projects-mobile650__btn-box');

[...buttonBox].forEach(elem => elem.addEventListener('click', conrolButton));
function conrolButton(event) {
    let btnParent = event.currentTarget.children;
    let carousel = event.currentTarget.parentElement.parentElement.children[1].children[0].children[1];
    let viewPh = btnParent[1].children[0],
        allPhoto = btnParent[1].children[1];


    if (event.target.closest('.projects-mobile650__btn-left')) {

        if (viewPh.textContent != '01') {
            viewPh.textContent = +viewPh.textContent < 9 ? '0' + --viewPh.textContent :
                --viewPh.textContent;
            btnParent[0].style.opacity = '1';
            btnParent[2].style.opacity = '1';
        } else {
            btnParent[0].style.opacity = '0.4';
            btnParent[2].style.opacity = '1';
        }
        carousel.scrollBy(-carousel.offsetWidth, 0);
    }

    if (event.target.closest('.projects-mobile650__btn-right')) {

        if (Number(viewPh.textContent) == Number(allPhoto.textContent)) {
            btnParent[2].style.opacity = '0.4';
            btnParent[0].style.opacity = '1';
        } else {
            viewPh.textContent = +viewPh.textContent < 9 ? '0' + ++viewPh.textContent :
                ++viewPh.textContent;
            btnParent[2].style.opacity = '1';
            btnParent[0].style.opacity = '1';
        }
        carousel.scrollBy(carousel.offsetWidth, 0);
    }
}