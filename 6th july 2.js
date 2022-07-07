function calculate(){
	console.log('Hello!! Calculator')
}
function Value(){
	var t1 = document.getElementById('text1').value;
	var t2 = document.getElementById('text2').value;
	var t3 = document.getElementById('text3').value;
	
	if(t1 && t2 && t3 !=""){
	var sum = (parseInt(t1)*parseInt(t2)*parseInt(t3))/100;
	document.getElementById('text4').value = sum;
	}
	else{
		document.getElementById('text4').value = "Enter All Values"
	}
}