let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let btn_left = document.getElementById("btn-left");
let btn_right = document.getElementById("btn-right");

let prev = 0;
let curr = 1;
let next = 2;

to_prev = () => {
    curr > 0 ? to_curr(curr - 1) : to_curr(slides.length - 1);
}

to_next = () => {
    curr < slides.length - 1 ? to_curr(curr + 1) : to_curr(0);
}

to_curr = (idx) => {
    curr = idx;
    prev = curr - 1;
    next = curr + 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slide-prev');
        slides[i].classList.remove('slide-curr');
        slides[i].classList.remove('slide-next');
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot-curr');
    }
    next >= slides.length ? next = 0 : next;
    prev < 0 ? prev = slides.length - 1 : prev;
    slides[prev].classList.add('slide-prev');
    slides[curr].classList.add('slide-curr');
    slides[next].classList.add('slide-next');
    dots[curr].classList.add('dot-curr');
}

btn_left.addEventListener('click', to_prev);
btn_right.addEventListener('click', to_next);