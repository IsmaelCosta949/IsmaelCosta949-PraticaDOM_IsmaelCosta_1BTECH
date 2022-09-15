"use strict";
const td1 = (document.getElementById("t1").getElementsByTagName("td"));

console.log(td1[0])

td1[0].innerHTML = 

td1[1].innerHTML = Math.round(Math.random()*10)

td1[2].innerHTML = Math.round(Math.random()*10)

if(td1[0] > td1[1] && td1[0] > td1[2]){
    console.log (td1[0])

}