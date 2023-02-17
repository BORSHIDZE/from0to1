$(function name(params) {

  $('.user__link--menu__btn').on('click', function () {
    $('.menu__list-header').toggleClass('menu__list-header--active');
  })

  $('.related__btn').on('click', function() {
    $('.related__btn').removeClass('related__btn--active');
    $(this).addClass('related__btn--active'); 
  })

  $('.detalis__down-btn').on('click', function (e) {
    e.preventDefault();
    $('.detalis__down-btn').removeClass('detalis__down-btn--active');
    $(this).addClass('detalis__down-btn--active');

    $('.detalis__down-text__box').removeClass('detalis__down-text__box--active');
    $($(this).attr('href')).addClass('detalis__down-text__box--active')
  })

  $('.detalis__quantity').styler();


  $('.detalis__min').slick({
    asNavFor: '.detalis__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    arrows: false,
  });

  $('.detalis__big').slick({
    asNavFor: '.detalis__min',
    draggable: false,
    arrows: false,
    fade: true,

  });

  $('.star').rateYo({
    readOnly: true,
    starWidth: "13px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });

  $('.buy-page__star').rateYo({
    readOnly: true,
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });

  $('.detalis__star').rateYo({
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",

    onStart: function (data) {
      $('.filter-price__from').text(data.from),
        $('.filter-price__to').text(data.to)
    },

    onChange: function (data) {
      $('.filter-price__from').text(data.from),
        $('.filter-price__to').text(data.to)
    },
  });

  $('.slider').slick({
    dots: true,
    arrows: false
  });


  var mixer = mixitup('.product__list');
  var mixer = mixitup('.design__box');
})




