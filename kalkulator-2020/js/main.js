'use strict';
//console.log('czy działa');

var inputActionString = document.getElementById('wynik');

function dzial(btn) {

    if (btn == '=') {


        //po naciśnięciu wykonuje dziłanie widoczne w <input id="wynik">
        document.getElementById('wynik').value = eval(document.getElementById('wynik').value);

        if (document.getElementById('wynik').value == 'undefined') {

            return document.getElementById('wynik').value = '';

        } else if (document.getElementById('wynik').value == 'Infinity' || document.getElementById('wynik').value == '-Infinity') {

            return document.getElementById('wynik').value = 'Nooooo!!!';

            //        } else if (document.getElementById('wynik').value == 'Nooooo!!!') {
            //
            //            document.getElementById('wynik').value = '0';

        } else {
            document.getElementById('wynik').value = eval(document.getElementById('wynik').value)

        }

    } else if (btn == 'del') {

        document.getElementById('wynik').value = '0';

    } else if (btn == '%') {

        //zamiana na procenty
        document.getElementById('wynik').value = eval(document.getElementById('wynik').value / 100);


    } else if (btn == '0') {

        //             console.log('0.0');

        if (document.getElementById('wynik').value === '') {

            //             console.log('0.1');

            return document.getElementById('wynik').value += btn;

        } else if (document.getElementById('wynik').value === '0') {

            document.getElementById('wynik').value = '';

            return document.getElementById('wynik').value += btn;

        } else if (document.getElementById('wynik').value === '-0') {

            document.getElementById('wynik').value = '-';

            return document.getElementById('wynik').value += btn;

        } else {

            return document.getElementById('wynik').value += btn;

        }

    } else if (btn == '1' || btn == '2' || btn == '3' || btn == '4' || btn == '5' || btn == '6' || btn == '7' || btn == '8' || btn == '9' || btn == '-') {

        //             console.log('1.0');

        if (document.getElementById('wynik').value === '0' || document.getElementById('wynik').value === 'Nooooo!!!') {

            document.getElementById('wynik').value = '';

            document.getElementById('wynik').value += btn;

        } else if (document.getElementById('wynik').value === '-0') {

            document.getElementById('wynik').value = '-';

            return document.getElementById('wynik').value += btn;

        } else {

            document.getElementById('wynik').value += btn;

        }

    } else {

        //odpowiada za to co widzimy w <input id="wynik">
        document.getElementById('wynik').value += btn;
        console.log(btn);

    }

}
