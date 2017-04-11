---
layout: null
---
$(document).ready(function () {



  $('a.blog-button').click(function (e) {
    currentWidth = $('.panel-cover').width();
    $('.content-wrapper__inner').show();
    $('.resume').hide();
    $('.projects').hide();
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
    $('.projects').hide();
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

  $('a.projects-button').click(function (e) {
    currentWidth = $('.panel-cover').width();
    $('.projects').show();
    $('.content-wrapper__inner').hide();
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

  $('#demoLink').click(function (e) {
    e.preventDefault();

    if ($('#demoLink').hasClass('expanded')) {
      $('#demoLink').removeClass('expanded');
      $('#demoLink').text('Demo')
      $('#demoVideo').empty();
    } else {
    $('#demoLink').addClass('expanded');
    $('#demoLink').text('Remove')
    $('#demoVideo').append('<p><iframe width="560" height="315" src="https://www.youtube.com/embed/psGGQQ7luvk" frameborder="0" allowfullscreen></iframe></p>')
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

  $('.navigation-wrapper .resume-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .projects-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })
})
