  'use strict';

var jsonOsoby = {
    "pracownicy": [
        {
            "firstName": "Krystian",
            "lastName": "Dziopa"
        },
        {
            "firstName": "Anna",
            "lastName": "Szapiel"
        },
        {
            "firstName": "Piotr",
            "lastName": "Żmuda"
        }
    ]
}

//console.log(jsonOsoby.pracownicy);

jsonOsoby.pracownicy.forEach(function (element, index) {
    console.log('Index ' + index + ' --- ' + element.firstName + ' ' + element.lastName);
});

//======================================================
//Poniżej drugi sposób fajniejszy z index-em rozpoczynającym się od 1, a nie od zera.

var jsonOsoby = {
    "pracownicy": [
        {
            "firstName": "Krystian",
            "lastName": "Dziopa"
        },
        {
            "firstName": "Anna",
            "lastName": "Szapiel"
        },
        {
            "firstName": "Piotr",
            "lastName": "Żmuda"
        }
    ]
}

console.log('');

//console.log(jsonOsoby.pracownicy);

jsonOsoby.pracownicy.forEach(function (element, index) {
    var iteracja = index + 1;
    console.log('Numer ' + iteracja + ' --- ' + element.firstName + ' ' + element.lastName);
});