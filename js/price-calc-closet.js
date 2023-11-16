let coloms2 = document.querySelector('.calc-slider-door__col2');
let closet = document.querySelector('.doors__col2-row2');
let door = closet.children;
let mediaWidth650 = window.matchMedia('(min-width: 650px)');

mediaWidth650.matches

closet.addEventListener('mousemove', openDoor);
function openDoor(event) {
    let a = event.clientX - closet.getBoundingClientRect().left

    if (a < 130 && mediaWidth650.matches) {
        door[0].classList.add('move-right');
        door[1].classList.add('move-right');
        door[2].classList.add('move-right');
    } else {
        door[0].classList.remove('move-right');
        door[1].classList.remove('move-right');
        door[2].classList.remove('move-right');
    }

    if (a > 130 && a < 398 && mediaWidth650.matches) {
        door[1].classList.add('active');
        door[2].classList.add('active');
    } else {
        door[1].classList.remove('active');
        door[2].classList.remove('active');
    }
    if (a > 398 && mediaWidth650.matches) {
        door[1].classList.add('move-left');
        door[2].classList.add('move-left');
        door[3].classList.add('move-left');
    } else {
        door[1].classList.remove('move-left');
        door[2].classList.remove('move-left');
        door[3].classList.remove('move-left');
    }
}

closet.addEventListener('mouseleave', closeDoor);
function closeDoor() {
    [...door].forEach(element => element.classList.remove('active'));
    [...door].forEach(element => element.classList.remove('move-right'));
    [...door].forEach(element => element.classList.remove('move-left'));
}