$(document).ready(function () {
      $('.bgimg-1').parallax();
      $('.arrow').smoothScroll();
           
      $('#toggle').click(function() {
        $('#overlay').toggleClass('open');
      });

      $('.overlay ul li a').click(function() {
        $('#overlay').toggleClass('open');
      });
  });

  $(document).ready(function() {

    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('#topBtn').fadeIn();
      } else {
        $('#topBtn').fadeOut();
      }
      
    });

    $('#topBtn').click(function(){
      $('html, body').animate({ scrollTop : 0}, 50);

    });
});

