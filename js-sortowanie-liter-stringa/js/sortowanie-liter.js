function ulozenieZnakow(nazwaPoczatkowa) {

    //var nazwaPoczatkowa = "Akademia 108";

    var rozdzielenie = nazwaPoczatkowa.split("");

    var sortujemyDane = rozdzielenie.sort();

    var przestawionyNapis = sortujemyDane.join("");


    console.log(sortujemyDane);//to ja sobie wyświetlam w zadaniu nie jest raczej wymagane
    console.log(przestawionyNapis);

}

ulozenieZnakow('Akademia 108');


//----------------------------------------------
//tak jest zgodnie z wzorem.

function coWyjdzie(haslo) {
    
    return haslo.split('').sort().join('');
}
console.log(coWyjdzie('Akademia 108'));