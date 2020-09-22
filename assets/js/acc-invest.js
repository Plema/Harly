$(document).ready(function(){

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
