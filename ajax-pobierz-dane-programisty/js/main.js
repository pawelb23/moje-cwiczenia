'use strict';


console.log('AJAX - pobierz dane programisty');

//{"imie":"Piotr","nazwisko":"Szapiel","zawod":"Programista","firma":"Akademia 108"}

$('#pobierz-dane').click(function () {



    $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (dane) {
        //console.log(dane);

        $('#dane-programisty').append('<p><b>Imię:</b> ' + dane.imie + '</p>');
        $('#dane-programisty').append('<p><b>Nazwisko:</b> '  + dane.nazwisko + '</p>');
        $('#dane-programisty').append('<p><b>Zawód:</b> ' + dane.zawod + '</p>');
        $('#dane-programisty').append('<p><b>Firma:</b> ' + dane.firma + '</p>');
        $('#dane-programisty').append('<p><b>================</b></p>');
    });

})