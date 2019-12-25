 'use strict';

 //CIĄG FIBONACCIEGO

 //Początek tego ciągu tworzą następujące liczby:

 //1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144… itd.

 //Aby wyznaczyć liczby Fibonacciego, zaczynamy od następującego założenia:

 //Fibonacci(0) wynosi 1
 //Fibonacci(1) wynosi 1

 //Wszystkie kolejne liczby Fibonacciego wyznacza się poprzez zsumowanie dwóch poprzednich.
 //Przykładowo:

 //Fibonacci(2) to Fibonacci(1) + Fibonacci(0), czyli 2
 //Fibonacci(3) to Fibonacci(2) + Fibonacci(1), czyli 3
 //Fibonacci(4) to Fibonacci(3) + Fibonacci(2), czyli 5 itd.

 function fibonacci(n) {

     if (n === 0 || n === 1) {

         return 1;

     } else {

         return (fibonacci(n - 1) + fibonacci(n - 2));
         //Jeżeli pod n podstawimy np. 5 ale w parametrze funkcji, to zapis przy return oznacza, że dodajemy do siebie nie 5-1 + 5-2 bo to wychodzi 7, tylko poprzednie wyniki liczb fibonacciego - czyli w przypadku 5 (jak widać na górze w początku ciągu fibonaciego) 3, które jest cyfrą w ciągu fibonacciego dla 3 oraz 5, które jest cyfrą w ciągu fibonacciego dla 4. Oznacza to, że dla 5 liczbą fibonacciego będzie 8.
     }

 }

 for (var i = 0; i <= 20; i++) {

     console.log("Liczba Fibonacciego dla " + i + " to: " + fibonacci(i));

 }

 console.log(fibonacci(19));