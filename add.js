let navMenu = document.querySelector('.nav-menu');
let img = document.querySelector('img');
let left = document.querySelector('.left');
let right = document.querySelector('.right');

let imgNum = 0;

let arr = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
window.onload = document.querySelector('img').setAttribute('src', arr[0]);

document.querySelector('.nav-svg').addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navMenu.classList.toggle('close');
});

right.addEventListener('click', () => {
    sliderImg('right');
});
left.addEventListener('click', () => {
    sliderImg('left');
});

function sliderImg(calc) {
    if (calc === 'right') {
        imgNum++;
        if (imgNum > 3) {
            imgNum = 0;
        }

        img.setAttribute('src', arr[imgNum]);
    } else if (calc === 'left') {
        imgNum--;
        if (imgNum < 0) {
            imgNum = arr.length - 1;
        }

        img.setAttribute('src', arr[imgNum]);
    }
}
