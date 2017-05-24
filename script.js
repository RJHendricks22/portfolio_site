$( document ).ready(function() {

  console.log('Ready!!')

  $("#frontend").click(function()
                       {
    $("#frontskills").animate({width:'toggle'}, 400);
    $("#backskills").css({display: 'none'});
    $("#otherskills").css({display: 'none'});
    return false;
  });
  $("#backend").click(function()
                       {
    $("#backskills").animate({width:'toggle'}, 400);
    $("#frontskills").css({display: 'none'});
    $("#otherskills").css({display: 'none'});
    return false;
  });
  $("#others").click(function()
                       {
    $("#otherskills").animate({width:'toggle'}, 400);
    $("#backskills").css({display: 'none'});
    $("#frontskills").css({display: 'none'});
    return false;
  });
});