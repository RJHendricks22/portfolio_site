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
      $('.navbar').addClass('fixed');
    } else {
      $('.navbar').removeClass('fixed');
    }
  });


  let projArray = $("#projects .projectlist")
  let projectWindow = $("#projects")
  let x=1;

  $('#rightchev').click(function(){
    if (x < 4){
      x++
      $('#project1').css({display:'none'})
      $('#project2').css({display:'none'})
      $('#project3').css({display:'none'})
      $('#project4').css({display:'none'})
      $('#project' + (x)).css({display: 'block'})
    } else {
      x = 0
      x++
      $('#project1').css({display:'none'})
      $('#project2').css({display:'none'})
      $('#project3').css({display:'none'})
      $('#project4').css({display:'none'})
      $('#project' + (x)).css({display: 'block'})
    }
  })
  
  $('#leftchev').click(function(){
    if (x > 1){
      x--
      $('#project1').css({display:'none'})
      $('#project2').css({display:'none'})
      $('#project3').css({display:'none'})
      $('#project4').css({display:'none'})
      $('#project' + (x)).css({display: 'block'})
    } else {
      x = 5
      x--
      $('#project1').css({display:'none'})
      $('#project2').css({display:'none'})
      $('#project3').css({display:'none'})
      $('#project4').css({display:'none'})
      $('#project' + (x)).css({display: 'block'})
    }
  })
 

});