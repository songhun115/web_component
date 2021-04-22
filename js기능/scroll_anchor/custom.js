$(document).ready(function() {
    

    $(".nav_list li").click(function(){
       $(this).addClass("on").siblings().removeClass("on");
    });
    
    $(window).scroll(function(){
        if($(this).scrollTop() >= 100) {
            $("#header").addClass("active");
        }else {
            $("#header").removeClass("active");
        }
        
        var home_hei = $("#home").offset().top - 40,
            aboutme_hei = $("#about").offset().top - 40,
            portfolios_hei = $("#project").offset().top - 40,
            contact_hei = $("#skills").offset().top - 40,
            ability_hei = $("#ability").offset().top - 40,
            work_hei = $("#work").offset().top - 40;
            
        if( $(this).scrollTop() >= home_hei ) {
            $(".nav_list li:nth-child(1)").addClass("on").siblings().removeClass("on");
        }
        if( $(this).scrollTop() >= aboutme_hei ) {
            $(".nav_list li:nth-child(2)").addClass("on").siblings().removeClass("on");
        }
        if( $(this).scrollTop() >= portfolios_hei ) {
            $(".nav_list li:nth-child(3)").addClass("on").siblings().removeClass("on");
        }
        if( $(this).scrollTop() >= contact_hei ) {
            $(".nav_list li:nth-child(4)").addClass("on").siblings().removeClass("on");
        } 
        if( $(this).scrollTop() >= ability_hei ) {
            $(".nav_list li:nth-child(5)").addClass("on").siblings().removeClass("on");
        } 
        if( $(this).scrollTop() >= work_hei ) {
            $(".nav_list li:nth-child(6)").addClass("on").siblings().removeClass("on");
        } 
   
    });
    
        $(".nav_list li").click(function () {
          var scrollPosition = $($(this).attr("data-target")).offset().top;
          window.scrollTo({top:scrollPosition, behavior:'smooth'});
        })

        $(".mb_nav_btn").click(function () {
            $(this).toggleClass('active');
            $(".nav_list").toggleClass('active');
        });
        $(".nav_item").click(function () {
            $(".nav_list").removeClass('active');
        });
        
});