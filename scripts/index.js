
let hamburgerOpen = 0;

$(document).ready(function(){
      $("#quick-links-nav").hide();
      $("#main-menu").hide();

 
  });
// hide nav
  $("#quick-links-title").click( function(){
    if($("#quick-links-nav").is(":hidden")){
        $("#quick-links-nav").show();
    }
   else {
    $("#quick-links-nav").hide();
   }
  }
  );

// onclik hamburger menu
$("#hamburger-menu").click( function(){
    if(hamburgerOpen <= 0){
        hamburgerOpen++;
        $("header").addClass("whole-screen-menu");
        $("#main-menu").show();
        $("section").css("display","none");
        $("#hamburger-menu img").attr("src","../images/close.svg")
    } else {
        $("header").removeClass("whole-screen-menu");
        $("#main-menu").hide();
        $("section").css("display","flex");
        $("#hamburger-menu img").attr("src","../images/menu.svg");
        hamburgerOpen = 0;
    }
  

}
)


