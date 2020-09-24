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


  $( ".all-links > a" ).click(function(event) {
    $('.all-links > a').removeClass('active');
    $(this).addClass('active');
  });



  var customSelect = $('.select-pop');
  jcf.setOptions('Select', {
    wrapNative: false,
    wrapNativeOnMobile: false,
    fakeDropInBody: false,
    maxVisibleItems: 5
  });
  
  jcf.replace(customSelect);

  $( ".open-pop-create-ticket" ).click(function(event) {
    $('.pop-up').removeClass('open-pop');
    $('.pop-up2').removeClass('open-pop2');
    $('.burg-menu').removeClass('open-nav-personal');
    $('.back-dark').addClass('op-back');
    $('.create-ticket').addClass('open-pop2');
    $('body').css('overflow','hidden');
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
  
  $( ".open-mob-balance" ).click(function(event) {
    $('.pop-up').removeClass('open-pop');
    $('.pop-up2').removeClass('open-pop2');
    $('.burg-menu').removeClass('open-nav-personal');
    $('.back-dark').addClass('op-back');
    $('.balance-pop').addClass('open-pop2');
    $('body').css('overflow','hidden');
  });
 
});

