'use strict';

$('button').click(function () {
    $('div').animate({
        marginLeft: '166px',
        height: '100px',
        width: '100'
    }, 3000);
})
$('button').click(function () {
$('div').animate({
    backgroundColor: 'blue'
}, 5000, callbackEnd);
})

function callbackEnd(){
    $('div').html('<h2>"Animacja zakończona!"</h2>');
};

//$(function() {
//    function callbackEnd(){
//    $('div').html('<h2>"Animacja zakończona!!! :)"</h2>');
//};
//    
//}