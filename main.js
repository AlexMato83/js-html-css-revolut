$(document).ready(function(){

  $("#header-dx a").click(
    function(){
      $("#header-dx > ul li ul").hide();
      $(this).siblings("ul").toggle();
    }
  )
});
