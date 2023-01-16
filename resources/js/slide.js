let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let btn_left = document.getElementById("btn-left");
let btn_right = document.getElementById("btn-right");

let prev = 0;
let curr = 1;
let next = 2;

to_prev = () => {
    curr > 0 ? to_curr(curr, -1) : to_curr(slides.length, -1);
}

to_next = () => {
    curr < slides.length - 1 ? to_curr(curr, 1) : to_curr(-1, 1);
}

to_curr = (idx, direct) => {
    btn_left.removeEventListener('click', to_prev);
    btn_right.removeEventListener('click', to_next);
    curr = idx + direct;
    prev = curr - 1;
    next = curr + 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slide-prev');
        slides[i].classList.remove('slide-curr');
        slides[i].classList.remove('slide-next');
        slides[i].classList.remove('opa-0');
        slides[i].classList.remove('opa-1');
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot-curr');
    }
    next >= slides.length ? next = 0 : next;
    prev < 0 ? prev = slides.length - 1 : prev;
    if (direct == 1){
        slides[prev].classList.add('slide-prev', 'opa-1');
        slides[next].classList.add('slide-next', 'opa-0');
    }
    else if (direct == -1){
        slides[prev].classList.add('slide-prev', 'opa-0');
        slides[next].classList.add('slide-next', 'opa-1');
    }
    slides[curr].classList.add('slide-curr');
    dots[curr].classList.add('dot-curr');
    setTimeout(() => {
        btn_left.addEventListener('click', to_prev);
        btn_right.addEventListener('click', to_next);
    }, 200);
}

spin_to = (idx) => {
    let t_curr = curr;
    let len = Math.abs(t_curr - idx);
    let left;
    idx > t_curr ? left = false : left = true;
    for (let i = 0; i < len; i++){
        if (left) {
            setTimeout(() => {
                to_curr(t_curr, -1);
                t_curr--;
            }, 100*i);
        }
        else{
            setTimeout(() => {
                to_curr(t_curr, 1);
                t_curr++;
            }, 100*i);
        }
    }
}

btn_left.addEventListener('click', to_prev);
btn_right.addEventListener('click', to_next);