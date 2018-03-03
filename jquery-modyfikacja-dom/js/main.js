'use strict';


console.log('JQuery - manipulacja DOM');

$(function manipulacjaParagrafami() {
    $('button#gora').click(function () {
    $('p:last').insertBefore('p:first');
});
    $('button#dol').click(function() {
       $('p:first').insertAfter('p:last'); 
    });
});