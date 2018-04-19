'use strict';
console.log('czy działa');

var myVar1 = 3;
var myVar2 = 2;
var myVar3 = 'string';
console.log(myVar1 + myVar2); //5
console.log(myVar1 - myVar2); //1
console.log(myVar1 * myVar2); //6
console.log(myVar1 / myVar2); //1.5
console.log(typeof myVar1); //typ
console.log(typeof myVar2); //typ
console.log(typeof myVar3); //typ

//=============================
//funkcja z clickiem --- tekst przy buttonie i przy paragrafie zmieni się kiedy naciśniemy na guzik lub paragraf (czyli tekst poniżej guzika)

document.getElementById("nacisnij").addEventListener("click", myFunction);

document.getElementById("wcisnij").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("nacisnij").innerHTML = "YOU CLICKED ME!";
    document.getElementById("wcisnij").innerHTML = "YOU CLICKED IT!";
};
//============================
//metoda onclick

document.getElementById("demo").onclick = function() {abcFunction()};

function abcFunction() {
    document.getElementById("demo").innerHTML = "Bang,Bang!!!";
}
//==============================
function ewarFunction() {
    var x = 10;
    var y = 20;
    var a = eval("x * y") + "<br>";
    var b = eval("2 + 2") + "<br>";//<br> tutaj sprawia, że wynik a + b + c nie dodaje się tylko każda z liczb pokazuje się osobno 
    var c = eval("x + 17") + "<br>";

    var res = a + b + c;// czyli tu w konsoli są trzy wyniki
    document.getElementById("wynik").innerHTML = res;
}
//======================
//innerHTML wyświetla cały kod w konsoli
var probka = document.getElementById('nazwa');

console.log(probka.innerHTML);
console.log(nazwa.innerHTML);
console.log(wynik.innerHTML);