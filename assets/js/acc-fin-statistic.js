$(document).ready(function(){

  var customSelect = $('.select1');
  jcf.setOptions('Select', {
    wrapNative: false,
    wrapNativeOnMobile: false,
    fakeDropInBody: false,
    maxVisibleItems: 5
  });
  
  jcf.replace(customSelect);

  $( ".left-part > p" ).click(function(event) {
    $('.left-part > p').removeClass('active');
    $(this).addClass('active');
  });

  $( ".numb-pag" ).click(function(event) {
    $('.numb-pag').removeClass('active');
    $(this).addClass('active');
  });

});
