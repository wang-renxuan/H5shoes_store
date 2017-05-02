/**
 * Created by hxsd on 2017/3/9.
 */

$(function () {
	//===========================选项卡
	$("#fittings button").each(function (index) {
		$(this).on("mouseenter", function () {
			$(this).addClass("ac").siblings().removeClass("ac");
			$("#fittings .cont").eq(index).show().siblings().hide();
		})
	});
//=================================加购物车

	function lessCar(){//判断是否能继续减并disabled按钮
		if($("#numCar").val()<=1){
			$(".addBtn:last").attr("disabled","disabled");
		}else {
			$(".addBtn:last").removeAttr("disabled");
		}
	}


	$(".addBtn:first").on("click", function () {
		$("#numCar").val(parseInt($("#numCar").val())+1);
		lessCar()
	});
	$(".addBtn:last").on("click", function () {
		$("#numCar").val(parseInt($("#numCar").val())-1);
		lessCar()
	});
	$("#numCar").on("change", function () {
		lessCar()
		});


//=================================选择商品型号
	$("#choose_type").find("dd").each(function () {
		$(this).on("click", function () {
			$(this).addClass("ac_click").siblings().removeClass("ac_click")
		});
		$(this).on("mouseenter", function () {
			$(this).addClass("ac").siblings().removeClass("ac")
		})
	});
	$("#choose_type").on("mouseleave", function () {

		$(this).find(".ac").removeClass("ac")

	});
//=================================级联菜单

	var myhash = new Array();   // 创建数组对象
	myhash["北京"] = ["朝阳","海淀","东城","西城"];
	myhash["河北"] = ["石家庄","保定","邢台","唐山"];
	myhash["广西"] = ["桂林","南宁","柳州","北海"];

	// 绑定事件
	$("#provinces").on("change",function(){
		var selectValue = $(this).val();       // jQuery方式
		if(selectValue != ""){
			fillCitys(myhash[selectValue]);     // 将对应的城市填充到第二个select中
		}
	});

	function fillCitys(cities){
		// 遍历所有的城市，构造option，填充
		var content = '<option value="">--请选择城市--</option>';
		// 遍历数组
		$.each(cities,function(index,value){
			content += '<option value="' + cities[index] + '">' + cities[index] + '</option>';
		});

		$("#cities").html(content);
	}
//====================================换预览图
	$(".thumb").find("li").each(function () {
		$(this).on("mouseenter", function () {
			$(this).addClass("th_ac").siblings().removeClass("th_ac");
			$(".zoom_small").find("img").attr("src",$(this).find("img").attr("src"));
			$(".zoom_big").find("img").attr("src",$(this).find("img").attr("src"));
		})
	});
//==================================放大镜
	$(".zoom_small").hover(function () {
		$(this).find("span").show();
		$(".zoom_big").show();
		//移动
		$(this).on("mousemove",event, function () {
			//console.log(event.y);

			var t=parseInt(event.y-$(".zoom_small").offset().top+$(document).scrollTop());
			var l=parseInt(event.x-$(".zoom_small").offset().left+$(document).scrollLeft());
			var span_t=t-$(".zoom_small").find("span").height()/2;
			var span_l=l-$(".zoom_small").find("span").width()/2;
			if(span_l<=0){
				span_l=0
			}
			if(span_t<=0){
				span_t=0
			}
			if(span_l>=parseInt($(".zoom_small").width()-$(".zoom_small").find("span").width())){
				span_l=parseInt($(".zoom_small").width()-$(".zoom_small").find("span").width())
			}
			if(span_t>=$(".zoom_small").height()-$(".zoom_small").find("span").height()){
				span_t=$(".zoom_small").height()-$(".zoom_small").find("span").height()
			}
			$(this).find("span").css({"top":span_t,"left":span_l});
			//
			var rote_t=span_t/($(".zoom_small").height()-$(".zoom_small").find("span").height());
			var rote_l=span_l/($(".zoom_small").width()-$(".zoom_small").find("span").width());
			console.log(rote_t);
			var img_t=($(".zoom_big").find("img").height()-$(".zoom_big").height())*rote_t;
			var img_l=($(".zoom_big").find("img").width()-$(".zoom_big").width())*rote_l;
			$(".zoom_big").find("img").css({"top":-img_t,"left":-img_l})
		})
	}, function () {
		$(this).find("span").hide();
		$(".zoom_big").hide();

	})

});
