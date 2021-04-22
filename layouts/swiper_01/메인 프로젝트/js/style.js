$(function(){
	
	var obj_list = {},
		count = 0,
		_clickNum = 4,
		times;
	
	var click_callback = function(){
		var xxx = $(this).attr('value');
		var getCategroyIndex = $(this).attr('data-category_index');
		var getCategroyName = $(this).attr('data-category-name');
		var getCategoryAll = $(this).attr('data-all');
		///console.log( 'lilalala' );
		$.ajax( {
			url: "/index.php/home/ajax_list",
			type: "POST", 
			data: {
					category_index: getCategroyIndex,
					parent_category : getCategroyName,
					get_all_category : getCategoryAll
				}, 
			success: function(data){
				
				
				console.log( 'result => ' , data  );
				//var result = $(data).find(".ts:eq(" + xxx + ")");
				var result = $(data).find("."+getCategroyIndex);
				$(".modal-body").html( result );
				
				add_bind();
				
				
			}
		});
		
	}

	//map size seting
	if(!navigator.userAgent.match(/mobile/i)) {  
		$("#map").css("height",$("#contactus").outerHeight());
	};
	//num seting 
	$('.counter').countUp({
		delay: 10,
		time: 2000
	});  
	//scroll animation seting
	$('.animate').scrolla();
	//menu scroll seting
	$('body').scrollspy({ target: '#navbar-example'});
	// ajax
	
	function add_bind(){
		
		var _$;
		
		$(".img-popup").each(function( key , value ){
			
			_$ = $( value );
			
			if( !_$.data( 'times' ) ){
			
				console.log( 'new bind' , _$ );
				
				_$.data( 'times' , count ++ );
			
				_$.click( click_callback );
				
			}
			
		});
		
	};
	
	add_bind();
	/*XiangFeng Code Test 2017.10.26 modify am 11:06*/
	$(".xiang").click(function(){
		var getCategroyIndex = $(this).attr('data-category-index');
		var offset = $('.tab__'+getCategroyIndex).length;
		var getAllNumbers = $(this).attr('data-all-numbers');
		console.log("壤볟뎺�녺굳ID竊�"+getCategroyIndex+"<br/>壤볟뎺���됬쉪�녺굳�삥빊"+getAllNumbers+"<br/>孃ょ렞凉�冶뗧쉪��"+offset);
		if( getAllNumbers == offset ){
			alert("留덉�留� �ы듃�대━�� �낅땲��"); //�닷쩀�좄슬若뚧닇�먪ㅊ瑥�펷竊�
		}
		$.ajax( {
			url: "/index.php/home/ajax_more",
			type: "POST", 
			data: { category_index:getCategroyIndex, getOffset:offset },
			success: function(data){
				console.log( 'result => ' , data  );
				var result = $(data).find("li");
				$(".tab-pane ul#"+getCategroyIndex).append(result);
				add_bind();
			}
		});
	});
	/*XiangFeng Code Test 2017.10.26 modify am 13:36 the end*/

	/*XiangFeng Code Test 2017.10.11 am 11:06*/
	$("#more_all_id").click(function(){

		var getCategroyIndex = $(this).attr('data-category-index');
		var offset = $('.tab__3').length;
		var getAllNumbers = $(this).attr('data-all-numbers');
		if( getAllNumbers == offset ){
			alert("留덉�留� �ы듃�대━�� �낅땲��");
		}
		$.ajax( {
			url: "/index.php/home/xiangfeng_test_ajax_all",
			type: "POST", 
			data: { category_index:getCategroyIndex,getOffset:offset},
			success: function(data){
				var result = $(data).find("li");
				$(".tab-pane ul#allcategorylist").append(result);
				
				add_bind();
			}
		});


	});
	/*XiangFeng Code Test 2017.10.11 am 11:09*/
	
	//menu anchor animate
	var $root = $('html, body');
	$('.navbar .nav a,#home .item4 a,.fixedbar .btn1').click(function() {
		$root.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		},1000,'easeInOutQuint');
		return false;
	});
	
	//video size setting
	if(navigator.userAgent.match(/mobile/i)) {  
		$("#home .banner video").hide();
		$("#home .banner").append('<div class="videobg"></div>')
	};
	$("#scrollbutton").click(function(){
		$("body").animate({scrollTop:$(window).height()},1000,'easeInOutQuint');
	})
	$(".banner").addClass("active");
	
	$("#home").css("height",$(window).height());
	$(window).resize(function () {  
		$("#home").css("height",$(window).height());
	}); 
	
	if(!navigator.userAgent.match(/mobile/i)) {  
		if($(window).width()>1024){
			$("#bannervideo").css("width",$(window).width());
		}
		else{
			$("#bannervideo").css("height",$(window).height());
			$("#bannervideo").css("margin-left",0-$(window).height()*1.7777/2/2);
		}
	}
	else{
		$("#bannervideo").css("height",$(window).height());
		$("#bannervideo").css("margin-left",0-$(window).height()*1.7777/2/2);
	};
	
	
	//menu fided
	var menufixed = true;
	var numanimation =true;
	var fixedbaropen = true
	$(window).scroll(function(){
		//fixed bar close
		if($(window).scrollTop()>$("#contactus").offset().top-$("#contactus").outerHeight() ){
			if(fixedbaropen){
				$(".fixedbar").addClass("barclose");
				fixedbaropen = false;
			};
		}else {
			if(!fixedbaropen){
				$(".fixedbar").removeClass("barclose");
				fixedbaropen = true;
			};
		};
		//menufixed
		if($(window).scrollTop()>1){ 
			if(menufixed){
			$("#navbar-example").addClass("fixed-menu");
			menufixed = false;
			}
		}else{
			if(!menufixed){
			$("#navbar-example").removeClass("fixed-menu");
			menufixed = true;
			}
		};
	});  
	//
	document.oncontextmenu=new Function('event.returnValue=false;');
	document.onselectstart=new Function('event.returnValue=false;');
	//window load
	$('html,body').animate({scrollTop: '0px'},1000,'easeInOutQuint');
	$(window).on('load', function () {
        $('.spinner').fadeOut();
        $('.model-3').delay(100).fadeOut('slow');
    });
	
	
	
	
});