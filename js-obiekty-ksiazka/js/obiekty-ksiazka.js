class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana; //typ Boolean
        this.opiszKsiazke = function () {
            if (this.przeczytana === true) {
                return ('Książka ma tyutuł ' + this.tytul + ', autorem jest ' + this.autor + ' i została przeczytana.')
            } else {
                return ('Książka ma tyutuł ' + this.tytul + ', autorem jest ' + this.autor + ' i nie została przeczytana.')
            }

        }

    }
}

var tadek = new Ksiazka ('Pan Tadeusz', 'Adam Mickiewicz', true);
var potopieni = new Ksiazka ('Potop', 'Henryk Sienkiewicz', false);
var wiedzma = new Ksiazka ('Wiedźmin', 'Andrzej Sapkowski', false);

var wszystkieKsiazki = [tadek, potopieni, wiedzma];

function iloscPrzeczytanych(n) {
    var ilosc = 0; //wartość początkowa
    for (i = 0; i < n.length; i++) {
        if (n[i].przeczytana === true) { //musi być n[i].przeczytana --- taki zapis oznacza (n - niewiadoma = ilość true lub false, [i] pozwala przemieszczać się po kolejnych rzędach tablicy, .przeczytana - pozwala zdefiniować, na której z pozycji program ma szukać inforamacji true lub false))
            ilosc++//oznacza wartość +1 do przeczytanych pozycji
        }
        console.log(n[i].opiszKsiazke());
    }
    console.log("Ilość przeczytanych książek --- " + ilosc);
    return (ilosc);
}

iloscPrzeczytanych(wszystkieKsiazki);

//==================================================

////class Ksiazka {
////  constructor(tytul, autor, przeczytana) {
////   this.tytul = tytul;
////   this.autor = autor;
////   this.przeczytana = przeczytana;
////   this.opiszKsiazke = function() {
////     if (this.przeczytana === true) {
////        return("Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i została przeczytana.")
////      } else {
////        return("Książka ma tytuł " + this.tytul + ", autorem jest " + this.autor + " i nie została przeczytana.")
////      }
////    }
////  }
////}
////
////var naDrodze = new Ksiazka('Na drodze do biegłości', 'Kyle Simpson', true);
////var rownania = new Ksiazka('Równania różniczkowe', 'Marian Gewert', true);
////var moloch = new Ksiazka('Moloch', 'Stanisław Lem', false);
////
////var ksiazki = [naDrodze, rownania, moloch];
////
////function iloscPrzeczytanych(n) {
////    var ilosc = 0;
////    for (i = 0; i < n.length; i++) {
////        if (n[i].przeczytana === true) {
////            ilosc++
////        }
////        console.log(n[i].opiszKsiazke());
////    }
////    console.log("Liczba przeczytanych książek jest równa " + ilosc + ".");
////    return (ilosc);
////}
////iloscPrzeczytanych(ksiazki);
////
////==========================
//
////  stworzenie klasy ksiazka
//class Ksiazka {
//    constructor(tytul, autor, Boolean) {
//        this.tytul = tytul;
//        this.autor = autor;
//        this.przeczytana = Boolean; //type Boolean
//    }
//    opiszKsiazke() {
//          
//          if (this.przeczytana === true) {
//          console.log('Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i została przeczytana.');
//          }
//          else {
//            console.log('Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i nie została przeczytana.');
//          }
//        }
//}
//
////  stworzenie 3 ksiazek dla klasy ksiazka
//var wiedzmin = new Ksiazka('Wiedźmin', 'Andrzej Sapkowski', true);
//var kosiarz = new Ksiazka('Kosiarz', 'Terry Pratchett', false);
//var mrocznaWieza = new Ksiazka('Mrocza Wieża', 'Stephen King', false);
//
////  tablica globalna z ksiazkami
//var ksiazki = [wiedzmin, kosiarz, mrocznaWieza];
//
//// funkcja zwracajaca ilosc przeczytanych ksiazek z tablicy globalnej oraz wyswietla wynik metody opiszKsiazke dla kazdej ksiazki
//function iloscPrzeczytanych () {
//  var iloscKsiazekPrzeczytanych = 0;
//  
//  for (var i=0; i<ksiazki.length; i++) {
//    if (ksiazki[i].przeczytana===true) {
//      iloscKsiazekPrzeczytanych += ksiazki[i].przeczytana;
//      ksiazki[i].opiszKsiazke();
//    } else {
//      ksiazki[i].opiszKsiazke();
//    }
//  }
//  return(iloscKsiazekPrzeczytanych);
//}
//
//// wyswietlanie wyniku dzialania funkcji w konsoli
//var wynikFunkcji = iloscPrzeczytanych(ksiazki);
//console.log("Ilosć książek przeczytanych to " +wynikFunkcji);
////wynikFunkcji
