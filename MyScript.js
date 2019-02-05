$(window).scroll(function() {
    var scroll = $(window).scrollTop();
      $(".ZOOm img").css({
          transform: 'translate3d(0%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/10)/100+')',
          //Blur suggestion from @janwagner: https://codepen.io/janwagner/ in comments
          "-webkit-filter": "blur(" + (scroll/200) + "px)",
          filter: "blur(" + (scroll/200) + "px)"
      });
  })