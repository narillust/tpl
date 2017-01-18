// JavaScript Document

$(document).ready(function () {

var topBtn = $('#page-top');    
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
     topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
//page scroll top
 $('#page-top').click(function () {
   $('html,body').animate({ scrollTop: 0 }, 'fast');
   return false;
 });
 
 //
 var fh = $('.footer').outerHeight();
 $('#page-top').css('bottom',fh+10+'px');

});