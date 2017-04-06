---
layout: null
---
$(document).ready(function () {



  $('a.blog-button').click(function (e) {
    currentWidth = $('.panel-cover').width();
    $('.content-wrapper__inner').show();
    $('.resume').hide();
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
      $('.content-wrapper').removeClass('animated slideInDown');
      $('.content-wrapper').addClass('animated slideInRight');
      return;
    }
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 800, swing = 'swing', function () {})
    }
  })

  $('a.resume-button').click(function (e) {
    currentWidth = $('.panel-cover').width();
    $('.resume').show();
    $('.content-wrapper__inner').hide();
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
      $('.content-wrapper').removeClass('animated slideInRight');
      $('.content-wrapper').addClass('animated slideInDown');

      return;
    }
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInDown');
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 800, swing = 'swing', function () {})
    }
  })

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
})
