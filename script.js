'use strict';
$(document).ready(function(){
    $('.btn1').click(function(){
        $('.hidediv').fadeTo(2000, 1);
        $('.d2').fadeIn()
    });
    $('.btn2').click(function(){
        $('.d2').fadeOut()
    })
})