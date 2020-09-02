$(document).ready(function(){

  $('.slider-plans').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
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

  $( ".numb-pag" ).click(function(event) {
    $('.numb-pag').removeClass('active');
    $(this).addClass('active');
  });


  if($(window).width() >= '1024' && $(window).width()<='1399') {
    $( "#navigation-without-full > li" ).click(function(event) {
      $('#navigation-without-full > li').removeClass('active');
      $(this).addClass('active');
    });
  }

  var height1 = $(window).height(); 
  var width1 = $(window).width();
    if(height1 >= '899' && width1>='1399') {
      $('#fullpage').fullpage({
        anchors : [ 'Home','About_Us','Plans_And_Priciing','Affilates','News', 'Contact_Us'],
        navigation: true,
        menu:'#navigation',
        verticalCentered:true,
        scrollOverflow:true,
        scrollingSpeed : 1200 ,
        afterLoad : function(origin, destination, direction){
          var loadedSection = this;
          if(origin.anchor == 'Plans_And_Priciing'){
            $('.pr1').addClass('pr70');
            $('.pr2').addClass('pr30');
            $('.pr3').addClass('pr20');
          }
        }
      });
    };      

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
                thousandSeparator: "",
                duration: 4500
            });
             
            show = false;
            console.log('win')
        }
        else{
          console.log('fail')
        }
    });

    
  var navSection = '#navigation-without-full';

  function onScroll(){
  $(navSection + ' a').each(function(){
      var anchor      = $(this).attr('href').replace('index.html','');
      console.log(anchor)
      var scrollTop   = $(document).scrollTop();
      var positionTop = $(anchor).offset().top;
      var outerHeight = $(anchor).outerHeight();

      if ((positionTop-$(window).height()/2 <= scrollTop) && (positionTop + outerHeight > scrollTop)) {
        $(navSection + 'li.active').removeClass('active');
        $($(this).parent()).addClass('active');
      } else {
        $($(this).parent()).removeClass('active');
      }
    });
  }

  $(document).on('scroll', onScroll);
});
