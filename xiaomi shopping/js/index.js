//监听到每个li事件
var tabs = document.getElementById("tabs").getElementsByTagName("li");
console.log(tabs);
var lists = document.getElementById("lists").getElementsByTagName("ul");
console.log(lists)


//遍历每个li
for(var i = 0;i<tabs.length;i++){
	tabs[i].onclick = showlist;//绑定点击事件
}


function showlist(){//点击之后，执行showlist()
	for(var i = 0;i<tabs.length;i++){//便利每个li
		if(tabs[i] === this)//this是点击的对象，如果点击对象是tabs[i]，则active
		{
			tabs[i].className = "active";
			lists[i].className = "clearfix active"
		}
		else{
			tabs[i].className = "";//清除li的class
			lists[i].className = "clearfix";  
		}		
	}
}

//轮播图
var tiems = document.getElementsByClassName("circle-tiem");//图片
var points = document.getElementsByClassName("point");//点小圆点切换
var goproBtn = document.getElementById("gopro");
var gonextBtn = document.getElementById("gonext");
//index表示第几张图片在展示，第几个图片就有active这个类
var index = 0;//第一张图片在展示，第一张图片就有active
//第几个点在展示
var time = 0;//定时器图片跳转参数
var clearActive = function(){
	for(var i = 0;i<tiems.length;i++){//全部li去掉active
		tiems[i].className = "circle-tiem";
	}
	for(var i = 0;i<points.length;i++){//全部li去掉active
		points[i].className = "point";
	}
}
var goIndex = function(){
	clearActive();
	console.log(index);
	points[index].className = "point active"
	tiems[index].className = "circle-tiem active";
}
var gonext = function(){
	if(index<4){
		index++;
	}
	else{
		index=0;
	}
	goIndex();
}
var gopro = function(){
	if(index==0){
		index=4;
	}
	else{
		index--;
	}
	goIndex();
}
//图片下一张展示
gonextBtn.addEventListener("click",function(){
	gonext();
});
goproBtn.addEventListener("click",function(){
	gopro();
});

//给每个小圆点绑定点击事件
for(var i=0 ; i<points.length;i++){
	points[i].addEventListener("click",function(){
		var pointIndex = this.getAttribute('data-index');//获取data-index的值
		index = pointIndex;
		goIndex();
		time=0;//time重新计数，让点击圆点之后能停顿，再启用自动轮播
	});
}

var time = 0;

//2000ms,自动轮播
setInterval(function(){
	time++;
	if(time == 20){
		gonext();
		time=0;
	}
	
},100)

//获取系统时间并倒计时
function _fresh()
{
	 var endtime=new Date("2019/6/25,22:33:12");
	 var nowtime = new Date();
	 var leftsecond=parseInt((endtime.getTime()-nowtime.getTime())/1000);
	 __d=parseInt(leftsecond/3600/24);
	 __h=parseInt((leftsecond/3600)%24);
	 __m=parseInt((leftsecond/60)%60);
	 __s=parseInt(leftsecond%60);
	var c=new Date();
	var q=((c.getMilliseconds())%10);
	 document.getElementById("times").innerHTML=__d+"天 "+__h+"小时"+__m+"分"+__s+"."+q+"秒";
	 if(leftsecond<=0){
	 document.getElementById("times").innerHTML="抢购已结束";
	 clearInterval(sh);
	 }
}
_fresh()
var sh;
sh=setInterval(_fresh,100);

