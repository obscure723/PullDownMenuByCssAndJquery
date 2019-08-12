$(function() {
  $(".menu li").mouseenter(function(){
    $(this).siblings().find("ul").hide();
    $(this).find("ul").slideDown(150);
  });

  $(".menu").mouseleave(function() {
    $(".menu li").siblings().find("ul").slideUp(150);
  })
})