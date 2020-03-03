$(document).ready(function () {
  
      $('.bgimg-1').parallax();
  
      $('.arrow').smoothScroll();
      
      

      $('#hamburger').click(function () {
        
      $(this).toggleClass('open');
      $('nav').toggleClass('show');
      
      

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

