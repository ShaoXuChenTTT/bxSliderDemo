// 根据属性值设定一个新的bxSlider
function apply(){
	$('#bxslider').bxSlider(property);
}
// 属性变量
var property = {};
// 用户改变的属性值保存到属性变量中
$("input").on("change",function(){
	var proName = $(this)[0].className;
	var proValue = getVal($(this).val(),proName);
	eval("property."+proName+" = "+proValue);
})
// 将字符型的true,false以及null转换成对应的类型
function ifBoolean(str){
	if(str=="'true'"){
		return true;
	}
	else if(str=="'false'"){
		return false;
	}
	else if(str=="'null'"){
		return null;
	}
	else{
		return str;
	}
}
// 将字符型的数字以及boolean型和null转换成对应的类型
function getVal(value,key){
	switch (key) {
		case 'speed':
		case 'slideMargin':
		case 'startSlide':
		case 'adaptiveHeightSpeed':
		case 'swipeThreshold':
		case 'pause':
		case 'autoDelay':
		case 'maxSlides':
		case 'minSlides':
		case 'moveSlides':
		case 'slideWidth':
			value = parseInt(value);
			return value;
			break;
		default:
			value = "'" + value + "'";
			value = ifBoolean(value);
			return value;
			break;
	}
}
// 经过试验发现不清楚第一次生成的bxSlider代码的话第二次改新的设置会导致错误
// 删除之前一个slider
function reset(){
	var slider = $('#bxslider').bxSlider();
	slider.destroySlider();
	$('.bx-wrapper').remove();
	$('.bx-content').append('<ul class="bxslider" id="bxslider"><li><img src="img/1.jpg" /></li><li><img src="img/2.jpg" /></li><li><img src="img/3.jpg" /></li></ul>');
	
}
// 还原默认值
function initPro(){
	property = {};
	var inputArr = $('.bx-control').find('input');
	for(var i = 0;i < inputArr.length;i++){
		inputArr.eq(i).val(inputArr.eq(i).attr('default'));
	}
	if($('.bx-wrapper').length>0){
		reset();
	}
	apply();
}
var count = 1;
// 将设定的属性应用到新的bxSlider上
function changePro(){
	reset();
	apply();
}
// 第一次进入页面初始化属性并创建bxSlider
$(document).ready(function() {
	initPro();
});