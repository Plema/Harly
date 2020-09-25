$(document).ready(function(){
  $('#navigation-without-full > li').removeClass('active')
  $('.partners-nav').addClass('active')

  $( ".right-part > p" ).click(function(event) {
    $('.right-part > p').removeClass('active');
    $(this).addClass('active');
  });

  $( ".title-row" ).click(function(event) {
    $(this).parent().toggleClass('open-table');
  });

  $( ".my-struct" ).click(function(event) {
    $('.my-structure').css('display','block');
    $('.tree-partners').css('display','none');
    $('.right-part > p').removeClass('active');
    $(this).addClass('active');
  });

  $( ".tree-part" ).click(function(event) {
    $('.my-structure').css('display','none');
    $('.tree-partners').css('display','block');
    $('.right-part > p').removeClass('active');
    $(this).addClass('active');
  });

  $( ".open-list" ).click(function(event) {
    $(this).parent().toggleClass('open');
  });

});
