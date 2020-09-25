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

  document.querySelector('#input1').addEventListener('keyup', function(){
    this.value = this.value.replace(/[^\d]/g, '');
  });
  document.querySelector('#input2').addEventListener('keyup', function(){
    this.value = this.value.replace(/[^\d]/g, '');
  });

});
