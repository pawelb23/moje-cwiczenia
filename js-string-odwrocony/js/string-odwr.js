function nieoczekiwanaZmiana(nazwaPoczatkowa) {

    //    var nazwaPoczatkowa = "Akademia 108";

    var rozdzielenie = nazwaPoczatkowa.split("");

    //console.log(rozdzielenie);

    var literOdwrocenie = rozdzielenie.reverse();
    //console.log(literOdwrocenie);

    var przestawionyNapis = literOdwrocenie.join("");

    console.log(przestawionyNapis);
}

nieoczekiwanaZmiana('Akademia 108');

//============================================================
//    Wzór od Mariana


function odwracanieStringa(napis) {
    //zamiana otrzymanego napisu na tablicę złożoną z jego znaków
    var tablicaZeStringa = napis.split("");

    //odwrócenie kolejności elementów tablicy
    var odwrocenieTablicy = tablicaZeStringa.reverse();

    //zamiana tablicy na napis
    var odwroconyNapis = odwrocenieTablicy.join("");

    //wysłanie napisu do konsoli
    console.log(odwroconyNapis);
}

odwracanieStringa("Akademia 108");


//----------------------------------------------
//tak jest zgodnie z wzorem.

function ulozenieZnakow(haslo) {
    
    return haslo.split('').reverse().join('');
}
console.log(ulozenieZnakow('Akademia 108'));