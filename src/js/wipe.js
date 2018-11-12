var canvas = document.getElementById('cas');
var context = canvas.getContext("2d");
var _w=canvas.width;
var _h=canvas.height;
var num=0;
// 涂抹的半径
var radius=20;
var RX=0;
var RY=0;
// 鼠标的状态
var ismouseDown=false;
// 默认是未按下去false，按下去true
//生成画布上的遮罩，默认颜色#666 ;
function drawmask(context){
	context.fillStyle="#666";
	context.fillRect(0,0,_w,_h);
	context.globalCompositeOperation="destination-out";
}
function drawPoint(context,RX,RY){
	context.save();
	context.beginPath();
	context.arc(RX,RY,radius,0,2*Math.PI);
	context.fillStyle="red";
	context.fill();
	context.restore();
}
function drawxian(context,starX,starY,endX,endY){
	context.save();
	context.lineCap="round";
	context.lineWidth=2*radius;
	context.beginPath();
	context.moveTo(starX,starY);
	context.lineTo(endX,endY);
	context.stroke();
	context.restore();
}
// 在canvas中添加自定义监听事件"mousedown",调用drawPoint函数 
canvas.addEventListener("mousedown",function(evt){
	ismouseDown=true;
	var event=evt||window.event;
	//获取鼠标在视口的坐标，传递参数到drawPoint;
	RX=event.clientX;
	RY=event.clientY;
	drawPoint(context,RX,RY);
	
},false);
//增加监听“mousemove”，调用drawpoint
canvas.addEventListener("mousemove",function(evt){
	var event=evt||window.event;
	// var aX=event.clientX;
	// var aY=event.clientY;
	// drawPoint(context,aX,aY);
	if (ismouseDown==true) {	
	var aX2=event.clientX;
	var aY2=event.clientY;
	drawxian(context,RX,RY,aX2,aY2);
	//每次的结束点变成下一次开始的点。
	RX=aX2;
	RY=aY2;
	}else{
		return false;
	}
},false);
canvas.addEventListener("mouseup",function(){
	//还原ismouseDown，为false。
	ismouseDown=false;
	if (getTRansparencyPercent(context)>50) {
		alert("超过50%面积");
		clear(context);
	}
},false);
function getTRansparencyPercent(context){
	var Imgdata = context.getImageData(0,0,_w,_h);
	for (var i = 0; i < Imgdata.data.length; i+=4) {
		var a =Imgdata.data[i+3];
		if (a===0) {
			num++;
		}
	}
	var percent=(num/(_w*_h))*100;
	console.log("透明点的个数："+num);
	console.log("占的面积"+Math.ceil(percent)+"%");
	// return percent.toFixded(2);
	return Math.round(percent);
}
function clear(context){
	context.clearRect(0,0,_w,_h);
}
window.onload=function(){
	drawmask(context);
	drawPoint(context);	
	drawxian(context);
}