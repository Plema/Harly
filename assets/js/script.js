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
 
  $( ".burger" ).click(function(event) {
    $('.burg-menu').stop().toggleClass('open-nav');
  });
 
  $( ".mob-nav-ul > li > a" ).click(function(event) {
    $('.burg-menu').stop().removeClass('open-nav');
  });
 
  $( "main" ).click(function(event) {
    $('.all-hidd').slideUp();
  });
 
  $( ".open-log" ).click(function(event) {
    $('.pop-up').removeClass('open-pop');
    $('.burg-menu').removeClass('open-nav');
    $('.back-dark').addClass('op-back');
    $('.login-pop').addClass('open-pop');
    $('body').css('overflow','hidden');
  });

  $( ".open-reg" ).click(function(event) {
    $('.pop-up').removeClass('open-pop');
    $('.burg-menu').removeClass('open-nav');
    $('.back-dark').addClass('op-back');
    $('.registration-pop').addClass('open-pop');
    $('body').css('overflow','hidden')
  });

  $( ".open-rec" ).click(function(event) {
    $('.pop-up').removeClass('open-pop');
    $('.burg-menu').removeClass('open-nav');
    $('.back-dark').addClass('op-back');
    $('.rec-pop').addClass('open-pop');
    $('body').css('overflow','hidden')
  });


  $( ".open-pop-video" ).click(function(event) {
    $('.pop-up').removeClass('open-pop');
    $('.burg-menu').removeClass('open-nav');
    $('.back-dark').addClass('op-back');
    $('.video-pop').addClass('open-pop2');
    $('body').css('overflow','hidden')

  });
  
  $( ".close-pop" ).click(function(event) {
    $('.pop-up').removeClass('open-pop');
    $('.pop-up2').removeClass('open-pop2');
    $('.back-dark').removeClass('op-back');
    $('body').css('overflow','auto')

  });
  
  $( ".back-dark" ).click(function(event) {
    $('.back-dark').removeClass('op-back');
    $('.pop-up2').removeClass('open-pop2');
    $('.pop-up').removeClass('open-pop');
    $('body').css('overflow','auto')
  });


});

