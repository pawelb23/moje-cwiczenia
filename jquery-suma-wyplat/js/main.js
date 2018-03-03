'use strict';
console.log('JQuery - suma wypłat');


//==================================
//Zaprogramuj przycisk #count-sum aby po kliknięciu pobrał wypłaty wszystkich pracowników i je zsumował.
//Uzyskany wynik wyświetl w elemencie o ID #sum.
//
//Zadanie zrób z wykorzystaniem biblioteki jQuery.
//
//Podpowiedzi:
//- oprogramuj zdarzenie "click" przycisku #count-sum
//- pobierz wszystkie wypłaty i za pomocą pętli je zsumuj
//- pobierz element o ID #sum i podmień mu treść na obliczoną sumę
//
//span

$('button#count-sum').click(function () {
    var suma = 0; //var suma musi buć w tym miejscu, aby wszystkie salary później sumowały się, gdyż inaczej wyskakuje tylko ostatnie salary
    $('span.salary').each(function () {
        //console.log($('span.salary').text());

        suma += parseInt($(this).text()); //zamiast parseInt może być tkaże znak plus (+) --- nie wiem jak parseInt to robi ale dodaje wszystkie wypłaty
        $('#sum').text(suma); //pod span z sumą podstawiamy sumę dodawania wypłat
    });
});

//$('#count-sum').click(function(){
//      // console.log('test');
//       getSalary();     
//    });
//    
//    function getSalary() {
//    var sum = 0;
//    $('.salary').each(function(){
//      sum += +$(this).text()
//    });
//    
//    $('#sum').text(sum);
//    }