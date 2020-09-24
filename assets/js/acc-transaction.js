$(document).ready(function(){

  $('#navigation-without-full > li').removeClass('active')
  $('.transaction-nav').addClass('active')

  $( ".numb-pag" ).click(function(event) {
    $('.numb-pag').removeClass('active');
    $(this).addClass('active');
  });

  $('#data1').datepicker({
    defaultDate: new Date()
  })
  $('#data2').datepicker({
    defaultDate: new Date()
  })

  $('#select-img').ddslick({
    imagePosition: "left",
  });

  $('#select-without-img').ddslick({
    imagePosition: "left",
  });

});
