$(function(){
		// h1◊Óœ¬dlœ¬±ﬂøÚ»•≥˝
	$(".banner .hide").each(function(){
		$("dd",this).last().css("border",0);
	})
	// banner¬÷≤•
	function banner(){
		var slide=$(".banner .slid");
		$(".imgs",slide).eq(0).css("opacity",1);
		$("li",slide).eq(0).css("background","#b61b1f");
		var flag=true;
		var now=0;
		function opmove(){
			if (flag) {
				var next=now+1;
				flag=false;
				if(next>=$(".imgs",slide).length){
					next=0
				}
				$(".imgs",slide).eq(now).animate({"opacity":0});
				$("li",slide).eq(next).css("background","#b61b1f");
				$("li",slide).eq(now).css("background","#3e3e3e");
				$(".imgs",slide).eq(next).animate({"opacity":1},function(){
					now=next;
					flag=true;
				});
			}else{
				return;
			};
		}
		function opmoveback(){
			if (flag) {
				var next=now-1;
				flag=false;
				if(next<0){
					next=$(".imgs",slide).length-1;
				}
				$(".imgs",slide).eq(now).animate({opacity:0});
				$("li",slide).eq(next).css("background","#b61b1f");
				$("li",slide).eq(now).css("background","#3e3e3e");
				$(".imgs",slide).eq(next).animate({"opacity":1},function(){
					now=next;
					flag=true;
				});
			}else{
				return;
			};
		}
		$("li",slide).each(function(index){
			var index=index;
			$(this).mouseover(function(){
				if(flag){
					flag=false;
					if(now!=index){
						$(this).css("background","#b61b1f");
						$("li",slide).eq(now).css("background","#3e3e3e");
						$(".imgs",slide).eq(now).animate({opacity:0});
						$(".imgs",slide).eq(index).animate({"opacity":1},function(){
							now=index;
							flag=true;
						});
					}else{
						flag=true;
					}
				}
			})
		})
		var t=setInterval(opmove,3000);
		slide.hover(function(){
			clearInterval(t);
			$(".btnl",slide).css("display","block");
			$(".btnr",slide).css("display","block");
		},function(){
			t=setInterval(opmove,3000);
			$(".btnl",slide).css("display","none");
			$(".btnr",slide).css("display","none");
		})
		$(".btnl",slide).click(opmoveback);
		$(".btnr",slide).click(opmove);
	}
	banner();
	// —°œÓø®
	$(".hide").hover(function(){
		$(".h1",this).css("display","block");
	},function(){
		$(".h1",this).css("display","none");
	})
	// ≤¬ƒ„œ≤ª∂ªª“ª≈˙
	$(".cnxhb .imgs").each(function(){
		$("span",this).last().css("border","none")
	})
	var now=0
	$(".cnxht .right").click(function(){
		var next=now+1;
		if(next>=$(".cnxhb .imgs").length){
			next=0;
		}
		$(".cnxhb .imgs").eq(now).css("display","none");
		$(".cnxhb .imgs").eq(next).css({"display":"block"},function(){
			now=next;
		})
	})
	// ¬•≤„¬÷≤•Õº
	function ff(obj){
		var flag=true;
		var now=0;
		$(".wflb",obj).each(function(){
			var xx=this;
			var mw=$(".imgs",xx).width();
			$(".imgs",xx).css({"left":mw,"display":"block"}).first().css("left",0);
			$("li",xx).first().css("background","#b61b1f");
			function move(){
				if (flag) {
					var next=now+1;
					flag=false;
					if(next>=$(".imgs",xx).length){
						next=0;
					}
					$(".imgs",xx).eq(now).animate({"left":-mw});
					$("li",xx).eq(next).css("background","#b61b1f");
					$("li",xx).eq(now).css("background","#3e3e3e");
					$(".imgs",xx).eq(next).animate({"left":0},function(){
						$(".imgs",xx).eq(now).css("left",mw);
						now=next;
						flag=true;
					});
				}else{
					return;
				};
			}
			function moveback(){
				if (flag) {
					var next=now-1;
					flag=false;
					if(next<0){
						next=$(".imgs",xx).length-1;
					}
					$(".imgs",xx).eq(next).css("left",-mw);
					$("li",xx).eq(now).css("background","#3e3e3e");
					$("li",xx).eq(next).css("background","#b61b1f");
					$(".imgs",xx).eq(now).animate({"left":mw});
					$(".imgs",xx).eq(next).animate({"left":0},function(){
						now=next;
						flag=true;
					});
				}else{
					return;
				};
			}
			$("li",xx).each(function(index){
				var index=index;
				$(this).mouseover(function(){
					if(flag){
						flag=false;
						if(now!=index){
							$(this).css("background","#b61b1f");
							$("li",xx).eq(now).css("background","#3e3e3e");
							if(now>index){
								$(".imgs",xx).eq(index).css({"left":-mw});
								$(".imgs",xx).eq(now).animate({"left":mw});
								$(".imgs",xx).eq(index).animate({"left":0},function(){
									now=index;
									flag=true;
								});
							}else{
								$(".imgs",xx).eq(now).animate({"left":-mw});
								$(".imgs",xx).eq(index).animate({"left":0},function(){
									$(".imgs",xx).eq(now).css({"left":mw});
									now=index;
									flag=true;
								});
							}
						}else{
							flag=true;
						}
					}
				})
			})
			var t=setInterval(move,3000);
			$(xx).hover(function(){
				clearInterval(t);
				$(".btnl",xx).css("display","block");
				$(".btnr",xx).css("display","block");
			},function(){
				t=setInterval(move,3000);
				$(".btnl",xx).css("display","none");
				$(".btnr",xx).css("display","none");
			})
			$(".btnl",xx).click(moveback);
			$(".btnr",xx).click(move);
		})	
	}
	$(".f").each(function(){
		ff(this);
	})
	
	
	// a¡¥Ω”∆¡±ŒÃ¯◊™
	$("a").attr("href","javascript:;").attr("rel","noopener noreferrer").attr("target","_blank");
	// // ¬•≤„—°œÓø®
	$(".f").each(function(){
		var yy=this;
		$(".hiddenl",yy).eq(0).css({
				"border-top":"3px solid #c81623",
				"border-right":"1px solid #c81623",
				"border-left":"1px solid #c81623",
				"height":"34px",
				"color":"#c81623",
				"line-height":"16px",
				"margin-top":"-1px",
				"line-height":"34px",
			})
		$(".floor",yy).eq(0).css("display","block");
		$(".hiddenl",yy).last().css({
			"border-right":"none",
		})
		$(".hidden",yy).each(function(index){
			$(this).mouseover(function(){
				$(".hiddenl",yy).css({
					"border":"none",
					"border-right":"1px solid #ededed",
					"height":"16px",
					"color":"#666",
					"margin-top":"10px",
					"line-height":"16px",
				});
				$(".floor",yy).css("display","none");
				$(".hiddenl",yy).last().css({"border":"none","margin-right":"1px"})
				$(".hiddenl",yy).eq(index).css({
					"border-top":"3px solid #c81623",
					"border-right":"1px solid #c81623",
					"border-left":"1px solid #c81623",
					"height":"34px",
					"color":"#c81623",
					"margin-top":"-1px",
					"line-height":"34px",
				})
				$(".hiddenl",yy).eq(index).css("margin-right",0)
				$(".floor",yy).eq(index).css("display","block");
				if(index>0){
					$(".hiddenl",yy).eq(index-1).css({
						"border-right":"none",
						"paddingRight":"16px"
					})
				}
			})
		})
	})
	// ¬•≤„Ã¯◊™
	function jump(){
		var flag=true;
		$(window).scroll(function(){
			if($(window).scrollTop()>1200){
				$(".fixed").css({"display":"block"});
				if(flag){	
					$(".fixed .clickl").css("display","none").eq(0).css("display","block").attr("aa","bb");
					$(".fixed .click").eq(0).css("opacity",0).attr("aa","bb");
					$(".f").each(function(index){
						var bb=index;
						if($(window).scrollTop()>$(this).offset().top-200){
							$(".fixed .click[aa='bb']").css("opacity",1).removeAttr("aa");
							$(".fixed .clickl[aa='bb']").css("display","none").removeAttr("aa");
							$(".fixed .click").eq(index).css("opacity",0).attr("aa","bb");
							$(".fixed .clickl").eq(index).css("display","block").attr("aa","bb");
						}
					})
				}
			}else{
				$(".fixed").css("display","none");
			}
		})
		$(".fixed .click").each(function(index){
			var index=index;
			$(this).click(function(){
				flag=false;
				$("body").animate({scrollTop:$(".f").eq(index).offset().top-199+"px"},function(){
					flag=true;
				})
			})
		})
		$(".fixed .click").each(function(index){
			var index=index;
			$(this).hover(function(){
				$(this).css("opacity",0);
				$(".fixed .clickl").eq(index).css({
					"display":"block",
					"background":"#c81623",
					"color":"#fff"
				})
			},function(){
				$(".fixed .click[aa!='bb']").css("opacity",1)
				$(".fixed .clickl").css({
					"display":"none",
					"background":"none",
					"color":"#c81623"
				})
				$(".fixed .clickl[aa='bb']").css({
					"display":"block",
				});
				$(".fixed .click[aa='bb']").css("opacity",0)
			})
		})
	}
	jump();
	// ∑µªÿ∂•≤ø
	$("#all_right .xia:first").click(function(){
		$("body").animate({scrollTop:"0px"})
	})
	$(".f .hiddenl:last()").css("border","none")
	// Õº∆¨¿¡º”‘ÿ
	
    $("img").lazyload({effect: "fadeIn"});
})