## ver 0.0.1 ##
PC端实现涂抹擦除效果, 超过50%的涂抹面积可以查看全部. 涂抹颜色和背景图片手动指定. 2018-11-12
## ver 1.0.0 ##
1. 实现了对移动端的支持
1. 函数优化
## var 2.0.0  ##
实现了面向对象方式，
增加了参数配置
## var3.0.0 ##
1、浏览器在滚动距离下bug修复
2、canvas画布在有偏移和绝对定位下bug修复
3、增加了回调函数，让用户可以自己完成后继功能


使用步骤说明：
1、在html中添加指定id的canvas标签
例如
``` 
<canvas id="cas" width="375" height="665"></canvas>
 ```

2、编辑配置文件： 
``` 
属性名取值类型备注
id              字符串             canvas标签的id
covertype       字符串          取值"color"或"image"
color           字符串          十六进制颜色吗，或rgb()|git 
imgUrl          字符串           前面的覆盖图片
backImgUrl      字符串           canvas背景图片
width           字符串         canvas宽度，必须和canvas标签宽度一致
height          字符床          canvas高度，必须和canvas标签高粗一致
radius          字符串          涂抹笔的半径
transpercent    数值            透明面积占整个画布的百分比，超出此数值显示全部化布
callback、       函数            用户自定义回调函数名称
 ```

``` 
var wipeConfjg = {
	id:"cas",
	coverType:"image",   //取值类型color,image
	color:"#fff66",
	imgUrl:"image/wipe2.jpg",   //前面的覆盖图
	backImgUrl:"image/wipe1.jpg",  //背景图片
	width:"375",                   //canvas宽
	height:"665",                 //canvas高
	radius:"25",            //涂抹笔的半径
	percent:55, //透明面积占整个面积画布的百分比，超出此数字显示全部名称
	callback:wibedCallbackk //用户自定义回调函数
	}
 ``` 
 
 3、初始化wipe插件，并将上一步的配置作为变量传入例如：
 ``` 
new wipe（wipeConfig）
 ```
 4、编写回调函数，在用户在涂抹完成后继续操作必须写次回调函数
 ``` 
	function wibedCallbackk(percent){
	if (percent >50) {

	}
 ```
## var3.0.1 ##

 5、编写定位滚动偏移量
 ``` 
    var	allTop = this.cas.offsetTop;
	var allLeft = this.cas.offsetLeft;
	var scrollTop;
	var scrollLeft;
 ```