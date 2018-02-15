function sumaIloczyn(liczby) {
    var suma = 0;
    var iloczyn = 1;
    var odKtorejLiczymy = 0;
    for (var i = odKtorejLiczymy; i < liczby.length; i++) {
        suma = suma + liczby[i];
        iloczyn = iloczyn * liczby[i];
    }

    console.log('suma wynosi --- ' + suma);
    console.log('iloczyn wynosi --- ' + iloczyn);
}

sumaIloczyn([1, 2, 3, 4, 5, 6]);