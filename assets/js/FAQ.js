$(document).ready(function(){

  $( ".title-quest" ).click(function(event) {
    $(this).parent().toggleClass('open')
  });

  $( ".gen-nav" ).click(function(event) {
    $('.block').css('display','none');
    $('.FAQ_nav > p').removeClass('active')
    $(this).addClass('active')
    $('.general').css('display','block')
  });

  $( ".acc-nav" ).click(function(event) {
    $('.block').css('display','none');
    $('.FAQ_nav > p').removeClass('active')
    $(this).addClass('active')
    $('.account').css('display','block')
  });

  $( ".fin-nav" ).click(function(event) {
    $('.block').css('display','none');
    $('.FAQ_nav > p').removeClass('active')
    $(this).addClass('active')
    $('.finance').css('display','block')
  });

  $( ".com-nav" ).click(function(event) {
    $('.block').css('display','none');
    $('.FAQ_nav > p').removeClass('active')
    $(this).addClass('active')
    $('.command').css('display','block')
  });

  $( ".sec-nav" ).click(function(event) {
    $('.block').css('display','none');
    $('.FAQ_nav > p').removeClass('active')
    $(this).addClass('active')
    $('.seciruty').css('display','block')
  });

});


