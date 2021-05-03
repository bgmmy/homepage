$(function() {
    
    $('.menu-icon').click(function() {
      let $answer = $(".menu-icon-list");
      if($answer.hasClass('open')) {
        $answer.removeClass('open');
        // slideUpメソッドを用いて、$answerを隠してください
        $answer.slideUp();
        
        // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
        $(".menu-icon").html('<span class="fa fa-bars"></span>');
        
      } else {
        $answer.addClass('open'); 
        // slideDownメソッドを用いて、$answerを表示してください
        $answer.slideDown();
        
        // 子要素のspanタグの中身をtextメソッドを用いて書き換えてください
        $(".menu-icon").html('<span class="fas fa-times"></span>');
        
      }
    });


});
  
// if (window.outerWidth > 1000) {
//   $("#hide").hide();