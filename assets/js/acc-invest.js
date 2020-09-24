$(document).ready(function(){

  $('#navigation-without-full > li').removeClass('active')
  $('.invest-nav').addClass('active')


  var customSelect = $('.select1');
  jcf.setOptions('Select', {
    wrapNative: false,
    wrapNativeOnMobile: false,
    fakeDropInBody: false,
    maxVisibleItems: 5
  });
  
  jcf.replace(customSelect);

  $('#select-img').ddslick({
    imagePosition: "left",
    selectText: "Select your favorite social network",
  });

});
