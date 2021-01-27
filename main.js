"use strict"
let doc = document;
let time = 4000;
let step = 20;
let timeOut = doc.querySelector('.timeout');

let timeOutInterval = setInterval(() => {
    let timeOutNum = +doc.querySelector('.timeout').innerHTML;
    if (timeOutNum === 1) {
        clearInterval(timeOutInterval);
    }
    let a = timeOutNum - 1;
    timeOut.innerHTML = a;
}, 1000);

function outNum (num, elem) {
    let l = doc.querySelector('#' + elem);
    let n = 0;
    let t =  Math.round(time / (num/step));
    setTimeout(() => {
        let interval = setInterval(() => {
            n = n + step;
            if (n === 1000) {
                clearInterval(interval);
            }
            l.innerHTML = n;
        }, t);
    }, 3000);

}
outNum (1000, 'out-1');
// -----------v1.0------------
// outNum (1000, 'out-1');
// let int = +doc.querySelector('#out-1').innerHTML;
// let interval = setInterval(() => {
//     if (int === 100) {
//         step = 0;
//         clearInterval(interval);
//     }
//     int += step;
//     doc.querySelector('#out-1').innerHTML = int;
// }, time);