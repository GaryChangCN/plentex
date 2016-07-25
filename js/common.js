$(document).ready(function() {
    //导航条效果
    (function() {
        //第一个
        $(".company>a:first-child").mouseover(function() {
            $(".menu").css('display', 'none');
            $("#first1").slideToggle(100);
        });
        $("#first1").mouseleave(function() {
            $(this).slideUp(100);
        });
        //第二个
        $(".company>a:nth-child(2)").mouseover(function() {
            $(".menu").css('display', 'none');
            $("#second1").slideToggle(100);
        });
        $("#second1").mouseleave(function() {
            $(this).slideUp(100);
        });
        //第三个
        $(".company>a:nth-child(3)").mouseover(function() {
            $(".menu").css('display', 'none');
            $("#third1").slideToggle(100);
        });
        $("#third1").mouseleave(function() {
            $(this).slideUp(100);
        });
        $(".banner,.container").mouseover(function() {
            $(".menu").slideUp(100);
        });
    })();
});
