function printName(){
	//print hello in console
	console.log('Hello');
}
function Hello(){
	//print good morning in console
	console.log('Good Morning');
}
function Display(){
	var Name = document.getElementById('fname').value;
	console.log(Name);
}
function Clone(){
	var lname = document.getElementById('fname').value;
	document.getElementById('lname').value=lname;
}
function Clear(){
	document.getElementById('fname').value="";
	document.getElementById('lname').value="";
}
function Swap(){
	var box1 = document.getElementById('lname').value;                                    //stored the fetch lname value in box 1
	var box2 = document.getElementById('fname').value;
	document.getElementById('fname').value=box1;                                          //assign value of fname in box1
	document.getElementById('lname').value=box2;
}