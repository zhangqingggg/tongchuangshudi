// 系统时间（英文格式）
function getSystemTime(){
	
	/* 获取当前的系统时间，为英文格式。
		当前时间：Mon Dec 05 2022 16:18:19 GMT+0800 (中国标准时间) */
	var now = new Date();		// 英文系统时间	 
		
	// 把编辑后的时间显示在id为p1的标签里		
	document.getElementById("p1").innerHTML = "当前时间：" + now;		
			
	// 每隔一秒钟（1000毫秒）调用一次函数
	setTimeout("getSystemTime()", 1000); // 单位为毫秒
}

// 系统时间（中文格式）
function getSysTime(){
	
		/* 获取当前的系统时间，默认为英文格式：
		当前时间：Mon Dec 05 2022 16:18:19 GMT+0800 (中国标准时间)
	*/
	var now = new Date();		// 英文系统时间
		
	/* 目标格式：当前时间：2022年12月5日16时18分19秒 星期1 */

	var y = now.getFullYear();	// 年
	var m = now.getMonth() + 1;	// 月
	var d = now.getDate();		// 日
	var h = now.getHours();		// 时
	var mm = now.getMinutes();	// 分
	var ss = now.getSeconds();	// 秒
	var e = now.getDay();		// 星期
	var ds = y + "年" + m + "月" + d + "日" + 
			h + "时" + mm + "分" + ss + "秒 星期" + e;		
	
	// 把编辑后的时间显示在id为p1的标签里		
	document.getElementById("p1").innerHTML = "当前时间：" + ds;
	
	// 每隔一秒钟（1000毫秒）调用一次函数
	setTimeout("getSysTime()", 1000); // 单位为毫秒
}
