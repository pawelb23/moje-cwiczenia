'use strict';

var tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log('przed sortowaniem --- ' + tablica);

function sortowanieBabelkowe(tablica) {
    for (var i = 0; i < tablica.length; i++) { //indeks, który pozwala przeskakiwać w pętli po kolejnych wartościach

        for (var n = 0; n < tablica.length; n++) { //n - odnosi się do kolejnych wartości w tablicy (czyli 12,67,34 itp.)

            if (tablica[n] > tablica[n + 1]) { //porównanie kolejnych liczb czyli np. 24 > 2 jeżeli tak to
                var zmiennaCzasowa; //wprowadzenie zmiennej aby było jak przyrównać liczby
                zmiennaCzasowa = tablica[n];   //ZC jest równa np. 24 
                tablica[n] = tablica[n + 1]; //nasze 24 musi wynieść 2 gdyż pierwsza liczba musi być mniejsza
                tablica[n + 1] = zmiennaCzasowa; //nasze 2 musi być równe ZC czyli 24 gdyż ta liczba musi być większa jako kolejna w ciągu
            }
        }
    }
    console.log('po sortowaniu --- ' + tablica);
}
sortowanieBabelkowe(tablica);

//
////
////
//sortowanieBabelkowe(tablica);



////funkcja sortująca liczby w przekazanej tablicy
//
//function sortowanieTablicy(tablica) {
//    //zmienna i to indeks przejścia po tablicy liczb
//    var i;
//    for (i = 0; i < tablica.length; i++) {
//
//        //zmienna n to indeks wartości w tablicy
//        var n;
//        for (n = 0; n < tablica.length; n++) {
//            if (tablica[n] > tablica[n + 1]) {
//                // zmienna tymcz to chwilowa przechowalnia wartości zmiennej, która pozwala na zamianę wartości dwóch porównywanych zmiennych
//                var tymcz;
//                tymcz = tablica[n];
//                tablica[n] = tablica[n + 1];
//                tablica[n + 1] = tymcz;
//            }
//        }
//    }
//
//    //wysłanie do konsoli posortowanej tablicy
//    console.log(tablica);
//}
//
////tablica do posortowania
//var tablicaLiczb = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
//
////wywołanie funkcji sortującej
//sortowanieTablicy(tablicaLiczb);