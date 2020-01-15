'use strict';
//console.log('czy działa');

var inputActionString = document.getElementById('wynik');

function dzial(btn) {

    if (btn == '=') {

        // --- ZNAK RÓWNANIA --- po naciśnięciu wykonuje dziłanie widoczne w <input id="wynik">
        document.getElementById('wynik').value = eval(document.getElementById('wynik').value);

        if (document.getElementById('wynik').value == 'undefined') {

            return document.getElementById('wynik').value = '';

        } else if (document.getElementById('wynik').value === 'Infinity' || document.getElementById('wynik').value === '-Infinity') {

            document.querySelector('button.rowna-sie').setAttribute('onclick', "dzial('0')");

            //document.querySelector('button.rowna-sie').classList.add('rowna-sie-na-zero');

            return document.getElementById('wynik').value = 'ERROR';

            //        } else if (document.getElementById('wynik').value == 'ERROR') {
            //
            //            document.getElementById('wynik').value = '0';

        } else {
            document.getElementById('wynik').value = eval(document.getElementById('wynik').value)

        }

        // --- ZNAK DEL ---
    } else if (btn == 'del') {

        document.querySelector('button.rowna-sie').setAttribute('onclick', "dzial('=')");

        document.getElementById('wynik').value = '0';

        // --- ZNAK PRECENT ---
    } else if (btn == '%') {

        //zamiana na procenty
        document.getElementById('wynik').value = eval(document.getElementById('wynik').value);

        document.getElementById('wynik').value = (document.getElementById('wynik').value) / 100;

        // --- WARTOŚĆ ZERO ---
    } else if (btn == '0') {

        document.querySelector('button.rowna-sie').setAttribute('onclick', "dzial('=')");

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

        } else if (document.getElementById('wynik').value === 'ERROR') {

            document.getElementById('wynik').value = '';

            return document.getElementById('wynik').value += btn;

        } else if (document.getElementById('wynik').value !== '') {

            //            console.log('Spr/0');
            if (document.getElementById('wynik').value.match(/\/0/g)) {
                //                console.log('mat /');
                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\/0$/, '/');

                return document.getElementById('wynik').value += btn;

            } else if (document.getElementById('wynik').value.match(/\*0/)) {
                //                console.log('mat *');
                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\*0$/, '*');

                return document.getElementById('wynik').value += btn;

            } else if (document.getElementById('wynik').value.match(/\+0/)) {
                //                console.log('mat +');
                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\+0$/, '+');

                return document.getElementById('wynik').value += btn;

            } else if (document.getElementById('wynik').value.match(/\-0/)) {
                //                console.log('mat -');
                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\-0$/, '-');

                return document.getElementById('wynik').value += btn;

            } else {

                return document.getElementById('wynik').value += btn;

            }

        } else {

            return document.getElementById('wynik').value += btn;

        }

        // --- WARTOSCI OD 1 DO 9 ---

    } else if (btn == '1' || btn == '2' || btn == '3' || btn == '4' || btn == '5' || btn == '6' || btn == '7' || btn == '8' || btn == '9') {

        document.querySelector('button.rowna-sie').setAttribute('onclick', "dzial('=')");

        //             console.log('1.0');

        if (document.getElementById('wynik').value === '0' || document.getElementById('wynik').value == 'ERROR') {

            document.getElementById('wynik').value = '';

            document.getElementById('wynik').value += btn;

        } else if (document.getElementById('wynik').value === '-0') {

            document.getElementById('wynik').value = '-';

            return document.getElementById('wynik').value += btn;

        } else if (document.getElementById('wynik').value !== '') {

            //            console.log('Spr/0');
            if (document.getElementById('wynik').value.match(/\/0/g)) {
                //                console.log('mat /');
                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\/0$/, '/');

                return document.getElementById('wynik').value += btn;

            } else if (document.getElementById('wynik').value.match(/\*0/)) {
                //                console.log('mat *');
                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\*0$/, '*');

                return document.getElementById('wynik').value += btn;

            } else if (document.getElementById('wynik').value.match(/\+0/)) {
                //                console.log('mat +');
                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\+0$/, '+');

                return document.getElementById('wynik').value += btn;

            } else if (document.getElementById('wynik').value.match(/\-0/)) {
                //                console.log('mat -');
                document.getElementById('wynik').value = document.getElementById('wynik').value.replace(/\-0$/, '-');

                return document.getElementById('wynik').value += btn;

            } else {

                return document.getElementById('wynik').value += btn;

            }

        } else {

            return document.getElementById('wynik').value += btn;

        }

        // --- ZNAK MINUS ---
    } else if (btn == '-') {

        if (document.getElementById('wynik').value === '0' || document.getElementById('wynik').value === 'ERROR') {

            document.getElementById('wynik').value = '';

            document.getElementById('wynik').value += btn;

        } else {

            document.getElementById('wynik').value += btn;

        }

    } else {

        //odpowiada za to co widzimy w <input id="wynik">
        document.getElementById('wynik').value += btn;
        console.log(btn);

    }

}

//function isEqualToClick (e) {
//    
//    e.preventDefault();
//    
// if (document.querySelector('button.rowna-sie-na-zero')){
//     
//     document.querySelector('button.rowna-sie').classList.remove('rowna-sie-na-zero');
//     
//     document.querySelector('button.rowna-sie').setAttribute('onclick', "dzial('=')");
//        
//    }
//    
//}
//
//document.querySelector('button.rowna-sie').addEventListener('click', isEqualToClick);