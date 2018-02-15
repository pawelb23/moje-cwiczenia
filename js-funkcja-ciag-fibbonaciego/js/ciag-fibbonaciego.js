function ciagFibbonaciego(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        for (i = 0; i < n - 1; i++) {
            var f = ciagFibbonaciego;
            wynik = f(n - 1) + f(n - 2);

            return wynik;
        }

    }
}

console.log(ciagFibbonaciego(19))

//========================================================
//Orginalna wersja, z której korzystałem
    
function fib(arg) {

    if (arg <= 0) return 0;

    if (arg === 1) return 1;

    return fib(arg - 1) + fib(arg - 2);
}
//function ciagFibonacciego(n) {
//    if (n == 0) {
//        wynik = 0;
//    } else if (n == 1) {
//        wynik = 1;
//    } else {
//        var x = 0; //tak liczony jest wzór Fibbonacciego więc '0' i '1' są stałymi wartościami
//        var y = 1;
//        var odKtorejLiczbyLiczymy = 0; //od której liczby w pętli zaczynamy - możemy zmienić na '2' tylko wtedy trzeba zmienić również 'i' poniżej na zapis 'i<=n'
//
//        var staleWartosci = [0, 1];
//        for (var i = odKtorejLiczbyLiczymy; i < n - 1; i++) {
//            //            wynik = x + y;
//            //            x = y;
//            //            y = wynik;
//            wynik = (x[i - 1]) + (y[i - 2]);
//        }
//
//    }
//    return wynik;
//}
//
//console.log(ciagFibonacciego(19));
////===============================================
//
////    function ciagFibonacciego(n) {
////    var wynik;
////    if (n==0){ 
////       wynik = 0;
////    } else if (n==1){
////        wynik = 1;
////    } else {
////        var x=0, y=1;
////        var odKtorejLiczbyLiczymy = 0;
////        for( var i = odKtorejLiczbyLiczymy; i<n-1; i++){
////            wynik = x + y;
////            x=y;
////            y=wynik;
////        }    
////    }
////    return wynik;
////}
////
////console.log(ciagFibonacciego(5));
//
////=================================================
//
//function fibonacci(n) {
//    if (n == 0) {
//        console.log(0);
//    } else if (n == 1) {
//        console.log(1);
//    } else {
//        var tablica = [0, 1];
//        var i = 2;
//
//        while (i <= n) {
//            tablica.push(tablica[i - 1] + tablica[i - 2]);
//            i++;
//        }
//
//        console.log(tablica[n]);
//    }
//}
//
//fibonacci(19);
//
////==============================================
//////Zadanie z internetu
////
//function ciagFibonacciego(n) {
//    var wynik;
//    if (n==0){ 
//        wynik=0;
//    } else if(n==1){
//        wynik = 1;
//    } else {
//        var x=0, y=1;
//        for( var i = 2; i<=n; i++){
//            wynik = x + y;
//            x=y;
//            y=wynik;
//        }    
//    }
//    return wynik;
//}
//
//console.log(ciagFibonacciego(19));
