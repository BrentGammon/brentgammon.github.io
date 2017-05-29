//online text editor	
$(document).ready(function(){

$(".size").click(function(){
	var size = $(this).attr("value") + "px";
	$("#textInput").css("font-size",size);
});
	
$(".fontFamily").click(function(){
	var font = $(this).attr("value") ;
	$("#textInput").css("font-family",font);
});

$(".textTransform").click(function(){
	var transform = $(this).attr("value") ;
	$("#textInput").css("text-transform",transform);
});

$(".color").click(function(){
	var color = $(this).attr("value") ;
	$("#textInput").css("color",color);
});

$(".textAlign").click(function(){
	var align = $(this).attr("value") .substr(8);
	$("#textInput").css("text-align",align);
});

$(".decoration").click(function(){
	var decoration= $(this).attr("value") ;
	$("#textInput").css("text-decoration",decoration);
});
	
$(".backgroundColor").click(function(){
	var length = $(this).attr("value").length;
	var color = $(this).attr("value").substr(0,length-5).toLowerCase();
	$("#textInput").css("background-color", color);
});

$(".fontWeight").click(function(){
	var weight = $(this).attr("value").toLowerCase();
	$("#textInput").css("font-weight",weight);
});

$(".italic").click(function(){
	var italic = $(this).attr("value");
	$("#textInput").css("font-style",italic);
});

$(".save").click(function(){
	var x = [];
	x[0] = document.getElementById("textInput").value;
	x[1] = document.getElementById("textInput").style.color;
	x[2] = document.getElementById("textInput").style.backgroundColor;
	x[3] = document.getElementById("textInput").style.textAlign;
	x[4] = document.getElementById("textInput").style.fontWeight;
	x[5] = document.getElementById("textInput").style.fontStyle;
	x[6] = document.getElementById("textInput").style.textDecoration;
	x[7] = document.getElementById("textInput").style.fontSize;
	x[8] = document.getElementById("textInput").style.textTransform;
	x[9] = document.getElementById("textInput").style.fontFamily;
	
	//alert(x[0]);
	
	for(i=0;i<10;i++){
		localStorage.setItem(i, x[i]);
		
	}
	
});


$(".load").click(function(){
	var x = [];		
	for(i=0;i<10;i++){
		
		x[i]= localStorage.getItem(i);
		//alert(x[i]);
	}
	document.getElementById("textInput").value = x[0];
	document.getElementById("textInput").style.color = x[1];
	document.getElementById("textInput").style.backgroundColor = x[2];
	document.getElementById("textInput").style.textAlign = x[3];
	document.getElementById("textInput").style.fontWeight = x[4];
	document.getElementById("textInput").style.fontStyle = x[5];
	document.getElementById("textInput").style.textDecoration = x[6];
	document.getElementById("textInput").style.fontSize = x[7];
	document.getElementById("textInput").style.textTransform = x[8];
	document.getElementById("textInput").style.fontFamily = x[9];
	

	
});



});



























	