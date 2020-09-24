$(document).ready(function(){

  $('#navigation-without-full > li').removeClass('active')
  $('.finance-nav').addClass('active')


  $( ".title-row" ).click(function(event) {
    $(this).parent().toggleClass('open-table');
  });

});


