// Uncomment to initialise WOW.js
new WOW().init();

$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: 2500,
  });
});

$('a.nojump').click(function(e)
{
   e.preventDefault();
});
