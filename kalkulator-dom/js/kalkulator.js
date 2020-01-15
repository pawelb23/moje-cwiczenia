'use strict';

function dzial(btn) {

    if (document.getElementById("wynik").value) {
        
        document.getElementById("wynik").value.substring(0,2) !== '00';

    } else if (btn == "=") {
        //        wynik równania
        document.getElementById("wynik").value = eval(document.getElementById("wynik").value);
    } else if (btn == "del") {
        document.getElementById("wynik").value = "";
    }

    else if (btn == "=") {
        //        wynik równania
        document.getElementById("wynik").value % eval(document.getElementById("wynik").value);
        //        modulo
    } else {
        document.getElementById("wynik").value += btn;

    }
}