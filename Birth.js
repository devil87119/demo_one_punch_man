
function start() {
	var dead = "1900/1/2";
	var t = 0;
    var birth = prompt("请输入您的生日","1900/1/1");	
	while (isNaN(Date.parse(birth))||Date.parse(birth).valueOf()<Date.parse(dead).valueOf()) {
		if(Date.parse(birth).valueOf()<Date.parse(dead).valueOf()){if(t<2)alert("唬爛啦!");}
		else {if(t<2)alert("日期格式錯誤!");}
		if(t>2&&t<4){alert("屁孩掰掰!");}
		if(t==3){console.log("start");window.location.href='https://4thminato.github.io/Naruto/';console.log("end");break;}
		if(t<2){var birth = prompt("请输入您的生日","1900/1/1");}
		t++;
	} 
	if(t<2){
		var year = 1000 * 60 * 60 * 24 * 365;
		var age = parseInt((now - birthday) / year);
		var now = new Date();
		var birthday = new Date(birth);
		var age = parseInt((now - birthday) / year);
		if(age<18){
			alert("警告!!!你小於18歲!乖乖玩遊戲吧~~");
			window.location.href='https://4thminato.github.io/Naruto/';
		}
		else {
			alert("你"+age+"歲了!");
		}
	}
}

window.addEventListener( "load", start, false );
/*$(document).ready(function() {


$(“table tr:nth-child(even)”).addClass(“even”); 
});
*/