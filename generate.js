function f1(){
	var a = document.getElementById('text1').value;
	document.getElementById('s1').textContent= 'Hii '+a;
}

function f2(){
	var x = 'Apple';
	x = x + ' Banana';
	x = x + ' Orange';
	document.getElementById('s1').textContent = x;
}


function f3(){
	var a = 1;
	a = a + 3;
	a = a + 1;
	a++;
	a = a + 2;
	a = a+' is Lucky number';
	document.getElementById('s1').textContent = a;
}

function f4(){
	var a = 0; 
	var t = 'Ekta '
	var c = document.getElementById('text1').value;
	var d = document.getElementById('text2').value;
	for(a=1; a<=d; a++){
		t = t + '<br>' + c +'  x  ' + ' ' + a + ' = ' +(c * a);
		
	}
	document.getElementById('s1').innerHTML = t;
	console.log(t);
}
