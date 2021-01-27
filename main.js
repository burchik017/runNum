"use strict"
let doc = document;
let time = 1000;
let step = 20;
let int = +doc.querySelector('#out-1').innerHTML;
let interval = setInterval(() => {
    if (int === 100) {
        step = 0;
        clearInterval(interval);
    }
    int += step;
    doc.querySelector('#out-1').innerHTML = int;
}, time);