function sumaIloczyn(liczby) {
    'use strict';
    var suma = 0;
    var iloczyn = 1;
    var odKtorejLiczymy = 0;
    for (var i = odKtorejLiczymy; i < liczby.length; i++) {
    suma += liczby[i];
        console.log(suma);
// to działa tak 0 += 1 = 1, teraz już suma wynosi 1 += 2 = 3, dalej 3 += 3 = 6, następnie 6 += 4 = 10, potem 10 += 5 = 15, na koniec 15 += 6 = 21 ----- i to jest wynik!!!
    iloczyn *= liczby[i];
        console.log(iloczyn);
//podobnie jak w przypadku dodawania 1 *= 1 = 1, 1 *= 2 = 2, 2 *= 3 = 6, 6 *= 4 = 24, 24 *= 5 = 120, 120 *= 6 = 720!!!
    }

    console.log('suma wynosi --- ' + suma);
    
    console.log('iloczyn wynosi --- ' + iloczyn);
}

sumaIloczyn([1, 2, 3, 4, 5, 6]);

//====================================
