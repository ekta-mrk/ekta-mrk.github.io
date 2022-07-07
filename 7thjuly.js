function add(){
	console.log('Hello Mirketa');
}
function calculate(){
	var text = document.getElementById('text1').value;
	var mul = 2*text;
	document.getElementById('text1').value = mul;
	console.log('Multiply = ' + mul);
}

function double(){
	//document.getElementById('text1').value=""; //clear function
	//document.getElementById('text1').value=20; //20 in box on click
	var b1 = document.getElementById('text1').value;
	var b2 = 2*b1;
	document.getElementById('result').textContent= 'Result is '+ b2;
}