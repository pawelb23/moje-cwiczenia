
//przypisuję każdemu przyciskowi event click i każę mu iść do funkcji pokaz
var znaki = document.getElementsByClassName("a");
var i;
for (i=0; i<znaki.length; i++) {
    'use strict';
    znaki[i].addEventListener("click", pokaz);
}

function pokaz(){
    
    //budowanie działania
    wynik.innerHTML += this.innerText;
    
    // akcja przycisku obliczającego
    var rowna_sie = document.getElementById("rowna_sie");
    rowna_sie.addEventListener("click", oblicz);
    
    //funckja obliczająca
    function oblicz(){
        wynik.innerHTML = eval(wynik.innerHTML);
    }
    
    //akcja przycisku czyszczącego
    var del = document.getElementById("del");
    del.addEventListener("click", wyczysc);
    
    //funkcja czyszcząca
    function wyczysc() {
        wynik.innerHTML = "";
    }
}