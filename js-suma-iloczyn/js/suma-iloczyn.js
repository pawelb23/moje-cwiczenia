function sumaIloczyn (liczby) {
    var liczby = [ 1, 2, 3, 4, 5, 6 ];  //------ to zmienna, którą ja umiemieściłem, w przykładzie jej nie było
    var suma = 0;
    var odKtorejLiczymy = 0;
    for(var i = odKtorejLiczymy; i < liczby.length; i++) {
        var iteracja = i + 1;                       //ta linijka nie należała do zadania, chciałem tylko sprawdzić czy się da
        console.log('numer ' + iteracja + ' liczba ' + liczby[i]);// ta linijka również nie należała do zadania --- te dwie linijki pomagają wyświetlić listę, która rozpoczyna liczenie(indeks) od jednego, a nie jak normalnie jest w systemie od zera.
        suma = suma + liczby[i];
    }
        
        console.log('suma wynosi --- ' + suma);

    var iloczyn = 1;
    for(var i = odKtorejLiczymy; i < liczby.length; i++) {
        iloczyn = iloczyn * liczby[i];
    }
        console.log('iloczyn wynosi --- ' + iloczyn);
    }

sumaIloczyn();

//function suma (tablica = [1,2,3,4,5,6]) {
//var suma = 0;
//for(var i = 0; i < tablica.length; i++) { 
//  suma = suma + tablica[i]; 
//}
//console.log('Suma elementów w tablicy wynosi: ' + suma);
//console.log('------------');
//var iloczyn = 1;
//for(var j = 0; j < tablica.length; j++) { 
//  iloczyn = iloczyn * tablica[j]; 
//}
//console.log('Iloczyn elementów w tablicy wynosi: ' + iloczyn);
//}
//suma();

//=======================================================================
    
// Pytanie 1)
function sumaIloczynOwa (liczby) {
    var liczby = [ 1, 2, 3, 4, 5, 6 ]; 
    var suma = 0;
    var odKtorejLiczymy = 0;
    for(var i = odKtorejLiczymy; i < liczby.length; i++) {
        sumaZmiana = suma + liczby[i];//dlaczego po zmianie nazwy działania na sumaZmiana w konsoli pokazuje się 6 (czyli ilość elementów) - jest to moim zdaniem kompletnie nielogiczne
    }
        
        console.log('suma wynosi --- ' + sumaZmiana);

    var iloczyn = 1;
    for(var i = odKtorejLiczymy; i < liczby.length; i++) {
        iloczynZmiana = iloczyn * liczby[i]; // jak w przypadku z dodawaniem
    }
        console.log('iloczyn wynosi --- ' + iloczynZmiana);
    }

sumaIloczynOwa();