$(document).ready(function() {
//	banner轮播图
    var length, currentIndex = 0,
        interval, hasStarted = false,
        t = 3000;
    length = $('.c_slider-panel').length;
    $('.c_slider-panel:not(:first)').hide();
    $('.c_slider-item:first').addClass('c_slider-item-selected');
//  $('.c_slider-page').hide();
    $('.c_slider-panel, .c_slider-pre, .c_slider-next').hover(function() {
        stop();
        $('.c_slider-page').show()
    }, function() {
//      $('.c_slider-page').hide();
        start()
    });
    $('.c_slider-item').hover(function(e) {
        stop();
        var preIndex = $(".c_slider-item").filter(".c_slider-item-selected").index();
        currentIndex = $(this).index();
        play(preIndex, currentIndex)
    }, function() {
        start()
    });
    $('.c_slider-pre').unbind('click');
    $('.c_slider-pre').bind('click', function() {
        pre()
    });
    $('.c_slider-next').unbind('click');
    $('.c_slider-next').bind('click', function() {
        next()
    });

    function pre() {
        var preIndex = currentIndex;
        currentIndex = (--currentIndex + length) % length;
        play(preIndex, currentIndex)
    }

    function next() {
        var preIndex = currentIndex;
        currentIndex = ++currentIndex % length;
        play(preIndex, currentIndex)
    }

    function play(preIndex, currentIndex) {
        $('.c_slider-panel').eq(preIndex).fadeOut(500).parent().children().eq(currentIndex).fadeIn(1000);
        $('.c_slider-item').removeClass('c_slider-item-selected');
        $('.c_slider-item').eq(currentIndex).addClass('c_slider-item-selected')
    }

    function start() {
        if (!hasStarted) {
            hasStarted = true;
            interval = setInterval(next, t)
        }
    }

    function stop() {
        clearInterval(interval);
        hasStarted = false
    }
    start()
});

//===========================================================
	//产品展示轮播图
	$(function(){
		//滚动元素id，左切换按钮，右切换按钮，切换元素个数id,滚动方式，切换方向，是否自动滚动，滚动距离，滚动时间，滚动间隔，显示个数
		LbMove('c_BoxUl','btnl','btnr','c_BoxSwitch',true,'left',true,270,1000,50000,4);
	})

//====================================================================
	//产品展示hover块
	$(function(){
		$("#c_BoxUl>ul>li").mouseenter(function(){
			$(this).children().children(".c_pro_hover").show();
		})
		$("#c_BoxUl>ul>li").mouseleave(function(){
			$(this).children().children(".c_pro_hover").hide();
		})
	})
