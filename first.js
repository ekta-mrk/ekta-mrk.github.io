function sum(){
	console.log('Hello! Welcome to Mirketa');
}
function printName(){
	var fName = document.getElementById('firstname').value;
	var lName = document.getElementById('lastname').value;
	console.log('Hello! ' + fName,lName);
}
function printAdd(){
	var fName = document.getElementById('firstname').value;
	var lName = document.getElementById('lastname').value;
	const sum= parseInt(fName)+ parseInt(lName);
	console.log('Addition ' + sum);
}
function printSub(){
	var fName = document.getElementById('firstname').value;
	var lName = document.getElementById('lastname').value;
	sub = fName-lName;
	console.log('Substraction ' + sub);
}
function printMul(){
	var fName = document.getElementById('firstname').value;
	var lName = document.getElementById('lastname').value;
	console.log('Multiplication ' + fName * lName);
}
function printDiv(){
	var fName = document.getElementById('firstname').value;
	var lName = document.getElementById('lastname').value;
	console.log('Division ' + fName / lName);
}