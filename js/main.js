"use strict";

$(function () {
    let loader = $('.loader-wrap');

    
    setTimeout(function(){
      loader.fadeOut();
    }, 3000);

    // マウスカーソルのコード
    let cursorR = 4;
    const cursor = document.getElementById('cursor');
    // divタグをマウスに追従させるコード
    document.addEventListener('mousemove', function(e) {
      cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });
    // リンクにホバー時はクラス付与
    const linkElem = document.querySelectorAll('a');
    for (let i = 0; i < linkElem.length; i++) {
      linkElem[i].addEventListener('mouseover', function(e) {
        cursor.classList.add('hov_');
      });
      linkElem[i].addEventListener('mouseout', function(e) {
        cursor.classList.remove('hov_');
      });
    }
    const linkElem2 = document.querySelectorAll('div');
    for (let i = 0; i < linkElem.length; i++) {
      linkElem2[i].addEventListener('mouseover', function(e) {
        cursor.classList.add('hov_');
      });
      linkElem2[i].addEventListener('mouseout', function(e) {
        cursor.classList.remove('hov_');
      });
      
    }
    // ハンバーガーメニュ
    // $('.header-hamburger').click(function () {
    //   $(this).toggleClass('active');
    //   if($(this).hasClass('active')) {
    //     $('.header-hamburger-nav').addClass('active');
    //   } else {})
    // });
    let hamburger = $('.header-hamburger');
    let hamburgerNav = $('.header-hamburger-nav')
      hamburger.click(function() {
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
          hamburgerNav.addClass('active');
      } else {
          hamburgerNav.removeClass('active');
      }
     
  });
  $('.header-hamburger-nav a').click(function (){
    hamburgerNav.removeClass('active');
    hamburger.removeClass('active');
  });


    let nowPage = 0;
    let nextPage = 1;
    const slides = $("#slideShow img");
    const slideLength = slides.length;
    const fadeTime = 4000;
    const showTime = 4000;
    slides.hide();
    slides.eq(nowPage).show();

    const slidesShow = () => {
      slides.eq(nextPage).fadeIn(fadeTime);
      slides.eq(nowPage).fadeOut(fadeTime);
      nowPage = nextPage;
      nextPage = (nextPage + 1) % slideLength;
      console.log(nextPage);
    };
    setInterval(slidesShow, showTime);

    $(function () {
      $('.ac-parent').on('click', function () {
      $(this).next().slideToggle();
      $(this).toggleClass('active');
    });
  });
  // スクロールでスキルのfadein
    
  $(window).scroll(function (){
    $('.fadein').each(function(){
        let elemPos = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight / 2 ){
            $(this).addClass('scrollin');
        } else {
          $(this).removeClass('scrollin');
        }
    });
  });
  let programing = $('.skill-container-area-box');
  let boxTitle = $('.skill-container-area-box-title');
  programing.mouseover(function (){
   $(this).find(boxTitle).addClass('active');
  }).mouseout(function(){
    $(this).find(boxTitle).removeClass('active');
  });
  
  $(window).scroll(function (){
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if(scroll > 500){
      $('#top-btn').addClass('active');
    } else {
      $('#top-btn').removeClass('active');
    }
  });
  $('#top-btn').on('click', function (){
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
});