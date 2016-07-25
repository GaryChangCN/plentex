$(document).ready(function() {
    //布局控制
    (function() {
        function layout() {
            var windowHeight = $(window).height();
            var height = parseInt(windowHeight) - 78;
            $(".lunbo").css('height', height + "px");
            var marginTop = (height - parseInt($(".lunboDoc").height())) / 2;
            $(".lunboDoc").css('marginTop', marginTop + "px");
            var windowWidth = parseInt($(window).width());
            $(".lunboControl").css('top', marginTop + 60 + "px").css('left', (windowWidth - 1200) / 2 + "px");
            $(".lunbo").css('width', windowWidth * 4 + "px");
            $(".slideDown").css('top',windowHeight/3+"px");
            $(".lunbo>li").css('width', windowWidth);
        }
        layout();
        window.onresize = function() {
            layout();
        }
    })();
    //轮播控制
    (function(){
    	function next(){
    		var windowWidth = parseInt($(window).width());
    		var marginLeft=parseInt($(".lunbo").css('margin-left'));
    		var allWidth=-(windowWidth*3);
    		var lunboPWidth=parseInt($(".lunboP>span").css('width'));
    		var lunboPLeft=parseInt($(".lunboP>span").css('left'));
    		if(marginLeft>allWidth){
    			$(".lunbo").css('margin-left',marginLeft-windowWidth+"px");
    			$(".lunboP>span").css('left',lunboPLeft+lunboPWidth+"px");
    		}else{
    			$(".lunboP>span").css('left',"0px");
    			$(".lunbo").css("margin-left","0px");
    		}
    	}
    	var int=setInterval(next,2000);
    	$(".right").click(function(){
    		next();
    	});
    	$(".left").click(function(){
    		var windowWidth = parseInt($(window).width());
    		var marginLeft=parseInt($(".lunbo").css('margin-left'));
    		var lunboPWidth=parseInt($(".lunboP>span").css('width'));
    		var lunboPLeft=parseInt($(".lunboP>span").css('left'));
    		if(marginLeft<0){
    			$(".lunbo").css('margin-left',marginLeft+windowWidth+"px");
    			$(".lunboP>span").css('left',lunboPLeft-lunboPWidth+"px");
    		}else{
    			$(".lunbo").css("margin-left","0px");
    		}
    	});
    })();
    //滚动控制
    (function(){
    	var height=parseInt($(".banner").height())+72;
    	$(".slideDown").click(function(){
    		$("body").animate({"scrollTop":height},"1000","linear");
    		// $("body").scrollTop(height);
    	});
    })();

});
