let introInner = document.querySelector('.intro__inner');
let colProduct = document.querySelector('.intro__col-product');
let btnCalc = document.querySelector('.intro__calculation');
let col1 = document.querySelector('.intro__inner-col1');
let col2 = document.querySelector('.intro__inner-col2');
let mediaWidth1180 = window.matchMedia('(max-width: 1180px)');

mediaWidth1180.addEventListener('change', function () {
    if (mediaWidth1180.matches) {
        introInner.after(btnCalc);
        introInner.after(col2);
    } else {
        col1.append(btnCalc);
        colProduct.append(col2);
    }
});
if (mediaWidth1180.matches) {
    introInner.after(btnCalc);
    introInner.after(col2);
} else {
    col1.append(btnCalc);
    colProduct.append(col2);
}

// ---------hover effect------------
let title3 = document.querySelector('.intro__box-titles');
let title4 = document.querySelectorAll('.intro__box-product');

// ---------------title3 -----------
title3.addEventListener('mouseover', hoverTitle3);
function hoverTitle3(event) {
    if (event.target.closest('.intro__title-h3')) {
        switch (event.target.dataset.title3) {
            case 'closet':
                title4[0].classList.add('hover');
                title4[0].children[1].classList.add('hover');
                break
            case 'slidin-door':
                title4[1].classList.add('hover');
                title4[1].children[1].classList.add('hover');
                break
            case 'partition':
                title4[2].classList.add('hover');
                title4[2].children[1].classList.add('hover');
                break
        }
    }
}

title3.addEventListener('mouseout', hoverOutTitle3);
function hoverOutTitle3(event) {
    if (event.target.closest('.intro__title-h3')) {
        switch (event.target.dataset.title3) {
            case 'closet':
                title4[0].classList.remove('hover');
                title4[0].children[1].classList.remove('hover');
                break
            case 'slidin-door':
                title4[1].classList.remove('hover');
                title4[1].children[1].classList.remove('hover');
                break
            case 'partition':
                title4[2].classList.remove('hover');
                title4[2].children[1].classList.remove('hover');
                break
        }
    }
}

// ---------------title4-----------
title4.forEach(elem => elem.addEventListener('mouseover', hoverTitle4));
function hoverTitle4() {
    switch (this.dataset.card) {
        case 'closet':
            title3.children[0].classList.add('hover');
            break
        case 'slidin-door':
            title3.children[1].classList.add('hover');
            break
        case 'partition':
            title3.children[2].classList.add('hover');
            break
    }
}

title4.forEach(elem => elem.addEventListener('mouseout', hoverOutTitle4));
function hoverOutTitle4() {
    switch (this.dataset.card) {
        case 'closet':
            title3.children[0].classList.remove('hover');
            break
        case 'slidin-door':
            title3.children[1].classList.remove('hover');
            break
        case 'partition':
            title3.children[2].classList.remove('hover');
            break
    }
}
