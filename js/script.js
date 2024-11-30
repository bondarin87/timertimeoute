"use strict";


let timer = document.querySelector('#timer');




let i=0;
function wrap() {
setTimeout(()=>{
   timer.textContent = i++;
   wrap()
},i*1000);
}
 wrap();
