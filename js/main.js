$(function(){

  $('.header_slider').slick({
    infinite: true,
    fade: true,
    nextArrow: '<img class="slider_arrows slider_arrow_right" src="img/radical_arrow.svg" alt="">',
    prevArrow: '<img class="slider_arrows slider_arrow_left" src="img/left_arrow.svg" alt="">',
    asNavFor: '.slider_dots',

});

$('.slider_dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header_slider',
});

$('.surf_slider').slick({
    nextArrow: '<img class="slider_arrows slider_arrow_surf_right" src="img/radical_arrow.svg" alt="">',
    prevArrow: '<img class="slider_arrows slider_arrow_surf_left" src="img/left_arrow.svg" alt="">',
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor:'.slider_map',
    responsive: [
      {
        breakpoint:900,
        settings: {
          slidesToShow:3,
        }
      }
    ]

});

$('.slider_map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor:'.surf_slider',
    focusOnSelect: true,

});

$('.travel_slider').slick({
    infinite: true,
    fade: true,
    nextArrow: '<img class="slider_arrows slider_arrow_travel_right" src="img/radical_arrow.svg" alt="">',
    prevArrow: '<img class="slider_arrows slider_arrow_travel_left" src="img/left_arrow.svg" alt="">',
   

});

$('.sleep_slider').slick({
  infinite: true,
  fade: true,
  nextArrow: '<img class="slider_arrows slider_arrow_travel_right" src="img/radical_arrow.svg" alt="">',
  prevArrow: '<img class="slider_arrows slider_arrow_travel_left" src="img/left_arrow.svg" alt="">',
 

});

$('.shop_slider').slick({
  infinite: true,
  fade: true,
  nextArrow: '<img class="slider_arrows slider_arrow_travel_right" src="img/radical_arrow.svg" alt="">',
  prevArrow: '<img class="slider_arrows slider_arrow_travel_left" src="img/left_arrow.svg" alt="">',
 

});



$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/Plus.png" alt=""></div><div class="quantity-button quantity-down"><img src="img/Minus.png" alt=""></div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});

$('.quantity-button').on('click', function(){

  let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
  $('.summ').html('$' + summ);

});

let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');

$('.summ').html('$' + summ);

  $('.surfboard_circle').on('click', function(){
    $(this).toggleClass('active')
  });

});


$('.burger_menu').on('click', function(){
  $('.nav_menu2').slideToggle('active');
});


new WOW().init();
