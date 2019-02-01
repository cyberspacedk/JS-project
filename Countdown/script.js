"use strict";

let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds'); 
let tic = new Audio();

const deadline = new Date(2019, 2, 31, 12, 0, 0); 

function timer () {
    let today = Date.now();
    let delta = deadline - today; 

    let S = Math.floor(delta /1000 % 60);
    let M = Math.floor(delta / 60000 % 60);
    let H = Math.floor(delta / 3600000 % 24);
    let D = Math.floor(delta / 86400000); 

    seconds.textContent = S >= 10 ? S : `0${S}`;
    minutes.textContent = M >=10 ? M : `0${M}`;
    hours.textContent = H >= 10 ? H : `0${H}`;
    days.textContent = D >= 10 ? D : `0${D}`;
    tic.src = './sound.mp3';
    tic.play();
}


setInterval(timer,1000);