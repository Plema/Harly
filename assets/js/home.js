$(document).ready(function(){

  $('.slider-plans').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a class ="link">' +(i+1)+' <span> /3</span></a>';
      },
  });

  $('.slick-arrow').empty();
  $('.slick-dots > li > button').empty();


  $( ".first-ben" ).click(function(event) {
    $('.all-sel2 > p').removeClass('showText2').addClass('hiddenText2');
    $(this).removeClass('hiddenText2').addClass('showText2');
    $('.block-image > div').css('display','none')
    $('.block-image > .first').css('display','block')
  });
  $( ".sec-ben" ).click(function(event) {
    $('.all-sel2 > p').removeClass('showText2').addClass('hiddenText2');
    $(this).removeClass('hiddenText2').addClass('showText2');
    $('.block-image > div').css('display','none')
    $('.block-image > .second').css('display','block')
  });
  $( ".third-ben" ).click(function(event) {
    $('.all-sel2 > p').removeClass('showText2').addClass('hiddenText2');
    $(this).removeClass('hiddenText2').addClass('showText2');
    $('.block-image > div').css('display','none')
    $('.block-image > .third').css('display','block')
  });
  $( ".fourth-ben" ).click(function(event) {
    $('.all-sel2 > p').removeClass('showText2').addClass('hiddenText2');
    $(this).removeClass('hiddenText2').addClass('showText2');
    $('.block-image > div').css('display','none')
    $('.block-image > .fourth').css('display','block')
  });

  $( ".links-news > a" ).click(function(event) {
    $('.links-news > a').removeClass('active');
    $(this).addClass('active');
  });

  $( "#navigation-without-full > li > a" ).click(function(event) {
    $('#navigation-without-full > li').removeClass('active');
    $(this).parent().addClass('active');
  });

  $( ".numb-pag" ).click(function(event) {
    $('.numb-pag').removeClass('active');
    $(this).addClass('active');
  });

  var customSelect = $('.name-money');
  jcf.setOptions('Select', {
    wrapNative: false,
    wrapNativeOnMobile: false,
    fakeDropInBody: false,
    maxVisibleItems: 5
  });
  
  jcf.replace(customSelect);

    $(window).scroll(function() {

      var anchor      = $('#aff');
      var scrollTop   = $(document).scrollTop();
      var positionTop = $(anchor).offset().top;
      var outerHeight = $(anchor).outerHeight();
  
      var a = positionTop + (outerHeight/2) + (outerHeight/4);
        
        if(scrollTop >= a) {
          $('.pr1').removeClass('pr70');
          $('.pr2').removeClass('pr30');
          $('.pr3').removeClass('pr20');
        }
  
        else if ((positionTop-$(window).height()/2 <= scrollTop) && (positionTop + outerHeight > scrollTop)) {
          $('.pr1').addClass('pr70');
          $('.pr2').addClass('pr30');
          $('.pr3').addClass('pr20');
        } 
      
        else {
          $('.pr1').removeClass('pr70');
          $('.pr2').removeClass('pr30');
          $('.pr3').removeClass('pr20');
        }
      });

    var show = true;
    var countbox = ".quantity";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top +700 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.count-spin').css('opacity', '1');
            $('.count-spin').spincrement({
                thousandSeparator: " ",
                complete: null,
                duration: 4500
            });
             
            show = false;
            console.log('win')
        }
        else{
          console.log('fail')
        }
    });

    document.querySelector('.only-number').addEventListener('keyup', function(){
      this.value = this.value.replace(/[^\d]/g, '');
    });

    
    var navSection = '#navigation-without-full';
    function onScroll(){
    $(navSection + ' a').each(function(){
        var anchor      = $(this).attr('href');
        var scrollTop   = $(document).scrollTop();
        var positionTop = $(anchor).offset().top;
        var outerHeight = $(anchor).outerHeight();


        if ((positionTop-$(window).height()/2 <= scrollTop) && (positionTop + outerHeight > scrollTop)) {
          console.log(anchor)
        $(navSection + ' li.active').removeClass('active');
        $($(this).parent()).addClass('active');
        } else {
        $($(this).parent()).removeClass('active');
        }
    });
    }

    $(document).on('scroll', onScroll);

    var navSection2 = '#navigation-without-full2';
    function onScroll2(){
    $(navSection2 + ' a').each(function(){
        var anchor2      = $(this).attr('href');
        var scrollTop2   = $(document).scrollTop();
        var positionTop2 = $(anchor2).offset().top;
        var outerHeight2 = $(anchor2).outerHeight();


        if ((positionTop2-$(window).height()/2 <= scrollTop2) && (positionTop2 + outerHeight2 > scrollTop2)) {
          console.log(anchor2)
        $(navSection2 + ' li.active').removeClass('active');
        $($(this).parent()).addClass('active');
        } else {
        $($(this).parent()).removeClass('active');
        }
    });
    }

    $(document).on('scroll', onScroll2);
});
