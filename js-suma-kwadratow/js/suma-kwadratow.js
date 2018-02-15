function sumaKwadratow(liczby) {
    var dodawanieKwadratow = 0;//tutaj musi być '0', gdy podstawimy coś innego, wynik końcowy zmieni się o tą wartość --- np. kiedy damy tu '2' zamiast === sumy kwadratów w consoli równej 55, pojawi się 57
    var odKtorejLiczymy = 0;
    for (var i = odKtorejLiczymy; i < liczby.length; i++) {
        dodawanieKwadratow += (Math.pow(liczby[i], 2));

    }
    return dodawanieKwadratow;
}
var jakiWynik = sumaKwadratow(liczby = [0, 1, 2, 3, 4, 5]);

console.log('Suma kwadratów wynosi --- ' + jakiWynik);

//==================================================================
//Przykład z internetu
//'use strict' ;
//
//var array = [0,1,2,3,4,5] ;
//
//function addSquares(array = [0,1,2,3,4,5]){
//  
//  var addSquaresResult = 0 ;
//  
//  for(var i = 0 ; i < array.length ; i++){
//    addSquaresResult += Math.pow(array[i],2);
//  }
//  
//  return addSquaresResult ;
//}
//
//var result = addSquares(array);
//console.log(result);