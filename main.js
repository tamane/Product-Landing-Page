$( document ).ready(function() {
  
  $(window).on("scroll",function(){
    
    var scroll = $(window).scrollTop();
    
    if(scroll > 60){
      
      $("#header").addClass("darkbg");
      
    }
    
    else{
      $("#header").removeClass("darkbg");
    }
    
  });
  
});