// 图片轮播
$(function(){
	var zzlTimer = null;
 var zzlNum = 0;
 zzlTimer = setInterval(function(){
 	if(zzlNum>1){
 		zzlNum=0;
 		$('.lunbo>img').eq(zzlNum).show().siblings("img").hide();
 		$('.lunbo>span').attr({'class':'iconfont icon-imagevector1'});
 	}
		$('.lunbo>img').eq(zzlNum).show().siblings("img").hide();
		$('.lunbo>span').attr({'class':'iconfont icon-imagevector'});
	zzlNum++;
},2000)
// 工艺部分开始
 var $li =$('#wrap ul li');
			$li.hover(function (ev) {

				move.call(this , ev , true);

			},function (ev) {
				move.call(this , ev , false);
			});
			function move( ev , bool) {

				var top = $(this).offset().top;
				var bottom = top + $(this).height();
				var left = $(this).offset().left;
				var right = left + $(this).width();
				
				var x = ev.pageX,
					y = ev.pageY;

				var sT = Math.abs(y - top),
					sB = Math.abs(y - bottom),
					sL = Math.abs(x - left),
					sR = Math.abs(x - right);

				var a = Math.min( sT , sB , sL , sR );

				switch( a ){

					case sT:
						if (bool) {
							$(this).find('.cove').css({
								left:0,
								top:'-637px'
							}).animate({
								top:0
							},200);
						} else {
							$(this).find('.cove').stop(1,1).animate({
								top:'-637px'
							},400);
						}
					break;

					case sB:
						if ( bool ) {
							$(this).find('.cove').css({
								left:0,
								top:'637px'
							}).animate({
								top:0
							},200);							
						} else {
							$(this).find('.cove').stop(1,1).animate({
								top:'637px'
							},400);	
						}

					break;
					case sL:
						if ( bool ) {
							$(this).find('.cove').css({
								left:'-322px',
								top:0
							}).animate({
								left:0
							},200);							
						} else {
							$(this).find('.cove').stop(1,1).animate({
								left:'-322px'
							},400);	
						}

					break;
					case sR:
						if ( bool ) {
							$(this).find('.cove').css({
								left:'322px',
								top:0
							}).animate({
								left:0
							},200);							
						} else {
							$(this).find('.cove').stop(1,1).animate({
								left:'322px'
							},400);	
						}

					break;



				}

			};
 
     	$('.zzlNew_left_img').mouseenter(function(){
     		$(this).find('b').css({"bottom":"225px","left":"354px"});
     	})
     	$('.zzlNew_left_img').mouseleave(function(){
     		$(this).find('b').css({"bottom":"0px","left":"0px"});
     	})
// 右上角部分
 	$('#guding').find("dd").mouseenter(function(){
 		$(this).find('span').css({'display':'block'});
 	})
  $('#guding dl').find("dd").mouseleave(function(){
 		$(this).find('span').css({'display':'none'});
 		$('#guding dl dd').eq(0).find('span').css({'display':'block'});
 	})
 
  $('#guding>span').click(function(){
  	if ($(this).attr('class')=='iconfont icon-benjiekejian') {
  		$('#guding>dl').show(500);
     	$(this).removeAttr('class').text('×').css({'font-size':'20px','padding-top':'10px'});
  	} else{
  		$('#guding>dl').hide(500);
  		$(this).attr('class','iconfont icon-benjiekejian').text("").css({'font-size':'18px','padding-top':'10px'});;
  	}
  		
  })
  
 
  $('.raedMore').mouseenter(function(){
  	$(this).find('b').css({'height':'90px','background':'red'});
  	$(this).find('a').css({'color':'red'});
  })
  $('.raedMore').mouseleave(function(){
  	$(this).find('b').css({'height':'72px','background':'#ccc'});
  	$(this).find('a').css({'color':'#ccc'});
  })
  
  
 
})
 
