"use strict"
let doc = document;
let time = 1000;
let step = 20;
function outNum (num, elem) {
    let l = doc.querySelector('#' + elem);
    let n = 0;
    let t =  Math.round(time / (num/step));
    let interval = setInterval(() => {
        n = n + step;
        if (n === 1000) {
            clearInterval(interval);
        }
        l.innerHTML = n;
    }, t);
    
}
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