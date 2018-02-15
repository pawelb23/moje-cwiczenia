function nieoczekiwanaZmiana (nazwaPoczatkowa = ["Akademia 108"]) {

//    var nazwaPoczatkowa = "Akademia 108";
    
    var rozdzielenie = nazwaPoczatkowa.split("");

    //console.log(rozdzielenie);

    var literOdwrocenie = rozdzielenie.reverse();
    //console.log(literOdwrocenie);

    var przestawionyNapis = literOdwrocenie.join("");

    return przestawionyNapis;

}

var coWyszlo = nieoczekiwanaZmiana;
console.log(coWyszlo);


//console.log(przestawionyNapis);
//nieoczekiwanaZmiana();