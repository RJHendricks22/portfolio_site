$( document ).ready(function() {

  console.log('Ready!!')
  var aboveHeight = $('.topbackground').outerHeight();
  console.log(aboveHeight)
  
  $("#frontend").hover(function(){
    $("#frontskills").animate({width:'toggle'}, 400);
    $("#backskills").css({display: 'none'});
    $("#otherskills").css({display: 'none'});
    return false;
  });
  $("#backend").hover(function(){
    $("#backskills").animate({width:'toggle'}, 400);
    $("#frontskills").css({display: 'none'});
    $("#otherskills").css({display: 'none'});
    return false;
  });
  $("#others").hover(function(){
    $("#otherskills").animate({width:'toggle'}, 400);
    $("#backskills").css({display: 'none'});
    $("#frontskills").css({display: 'none'});
    return false;
  });
  
  $(window).scroll(function(){
    if ($(window).scrollTop() > (aboveHeight - (0.10246082 * aboveHeight))){
      console.log('top')
      // if yes, add “fixed” class to the <nav>
      // add padding top to the #content 
      $('.navbar').addClass('fixed');
    } else {
      // when scroll up or less than aboveHeight,
      console.log('bottom')
      $('.navbar').removeClass('fixed');
    }
  });
  
  
  
});