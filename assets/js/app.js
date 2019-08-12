$(function() {
  $(".menu li").mouseenter(function(){
    console.log('li');
    $(this).siblings().find("ul").hide();  // 兄弟要素に含まれるサブメニューを全部消す。
    $(this).find("ul").slideDown(150);
  });

  $(".menu").mouseleave(function() {
    $(".menu li").siblings().find("ul").slideUp(150);
  })
})