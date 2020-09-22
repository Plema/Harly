$(document).ready(function(){

  $( ".right-part > p" ).click(function(event) {
    $('.right-part > p').removeClass('active');
    $(this).addClass('active');
  });

  $( ".title-row" ).click(function(event) {
    $(this).parent().toggleClass('open-table');
  });

});
