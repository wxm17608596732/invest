//写入cookies
	function setCookie(name,value){
	    var Days = 30;
	    var exp = new Date();
	    exp.setTime(exp.getTime() + Days*24*60*60*1000);
	    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	}
//获取cookie中的数据方法
	function getCookie(name){
	    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	    if(arr=document.cookie.match(reg))
	        return unescape(arr[2]);
	    else
	        return null;
	}
//base地址的拼接
//var host= 'https://emergency.aroundme.tv/emergency-toucu';
var host= 'https://testemergency.aroundme.tv/emergency-toucu';

function getUrl(url){
	return host+url+"?req_t=ajax"
}
//时间戳
//var timeStamp=new Date().getTime();

//获取cookie中的传值
var adminId=getCookie("adminId");
var token=getCookie("jybToken");

