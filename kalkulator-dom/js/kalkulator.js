'use strict';
//console.log('czy działa');

function dzial(btn) {
    if(btn == "=") {
//        wynik równania
        document.getElementById("wynik").value = eval(document.getElementById("wynik").value);     
    } 
    else if(btn=="del") {
        document.getElementById("wynik").value = "";
    }
//    else if(btn=="=") {
//        document.getElementById("wynik").value / 0;
//    }
    else if(btn == "=") {
//        wynik równania
        document.getElementById("wynik").value % eval(document.getElementById("wynik").value);
//        modulo
    } 

    else{
        document.getElementById("wynik").value += btn;
        
    }   
}