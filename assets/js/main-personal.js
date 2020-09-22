$(document).ready(function(){
  $('body').css('opacity','1')

  $( ".showText" ).click(function(event) {
    event.preventDefault();
    $('.all-hidd').stop().slideToggle();
  });

  $( ".hiddenText" ).click(function(event) {
    var x = $(this).text();
    var y = $(".showText").text();
    $(this).text(y);
    $(".showText").text(x);
    $('.all-hidd').stop().slideToggle();
  });

  $( "main" ).click(function(event) {
    $('.all-hidd').slideUp();
  });
 
  $( ".burger" ).click(function(event) {
    $('.burg-menu').stop().toggleClass('open-nav-personal');
  });
 
  $( ".mob-nav-ul > li > a" ).click(function(event) {
    $('.burg-menu').stop().removeClass('open-nav');
  });


  $( ".show-block" ).click(function(event) {
    $('.balance-block').toggleClass('open-balance-block');
  });
 
});

