class Auto {
  constructor(marka, spalanie, przebieg, rokProdukcji, uszkodzony) {
    this.marka = marka;
    this.spalanie = spalanie;
    this.przebieg = przebieg;
    this.rokProdukcji = rokProdukcji;
    this.uszkodzony = uszkodzony;
}
}
var komis = [];
komis[0] = new Auto('VW', 8, 123000, 2006, true);//słówko new powoduje, że uruchamia się constructor
komis[1] = new Auto('Toyota', 7.5, 216998, 1997, false);

var autoBMW = new Auto('BMW', 10, 80567, 2012, false); // inny sposób zapisu
komis[2] = autoBMW;
komis[3] = new Auto('Mazda', 6.9, 10800, 2008, false);
komis[4] = new Auto('Polonez', 11.2, 23884, 1995, true);

var komisMiki = [];
komisMiki[0] = new Auto('Porsche', 18, 223000, 2016, true);//słówko new powoduje, że uruchamia się constructor
komisMiki[1] = new Auto('Fiat', 6.5, 243598, 2002, false);

var autoBMW = new Auto('Fiat', 8, 180567, 2011, false); // inny sposób zapisu
komisMiki[2] = autoBMW;
komisMiki[3] = new Auto('Peugeot', 9.6, 124000, 2009, true);
komisMiki[4] = new Auto('Polonez', 11.2, 23884, 1995, true);

//=============================== powyżej dane

function jakieSpalanie(autaZKomisu) {   //funkcje
  autaZKomisu.forEach(function(element, index) { //możemy 'element' czy 'index' zmienić na dowolną wartość np. 'x' czy 'y'
    console.log(element.spalanie)
  });
  
  //console.log('funkcja uruchomiona');
  //console.log(autaZKomisu);
}

function ileJestUszkodzonych(autaZKomisu) {
  var licznik = 0;
  autaZKomisu.forEach(function(element, index) {
    if (element.uszkodzony) {
    licznik++; //---nie może być licznik = licznik++ bo nie działa
  }
  
  });
  console.log(licznik);
}


//console.log(autaZKomisu); //---autaZKomisu po za funkcą wyrzucą błąd
ileJestUszkodzonych(komis);
//jakieSpalanie(komis);

//console.log(komis.length); //--- wyświetli ilość obiektów
//console.log(komis); //---wyświetli wszystkie dane o obiektach z komisu

function sredniRocznyPrzebieg(autko) {
  var obecnyRok = (new Date()).getFullYear();
  var iloscLat = obecnyRok - autko.rokProdukcji;
  var sredniPrzebieg = autko.przebieg / iloscLat;
    
if (iloscLat == 0) {
    sredniPrzebieg = autko.przebieg;
} else {                                        //od if do else zapis pozwala zabezpieczyć się przed dzieleniem przez zero
    sredniPrzebieg = autko.przebieg / iloscLat;
}
    
   console.log(sredniPrzebieg);
  console.log(iloscLat);        //---console.log wrzucamy przed returnem, po returnie dane nie wyświetlą się
    
    return sredniPrzebieg;
    
}

sredniRocznyPrzebieg(komisMiki[2]); // wyświetla funkcję po z returnem
console.log(sredniRocznyPrzebieg(komisMiki[1]));//--- wyświetla wynik w koncoli pomimo wcześcniejszego return = musi być w nawiasach
console.log('------------');
for (var b=0; b < komisMiki.length; b++) {
    console.log( sredniRocznyPrzebieg(komis[b]) );
    console.log('---------');
    console.log(komisMiki[b].przebieg);
}

