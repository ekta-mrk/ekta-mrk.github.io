function circle(){
	const rad = document.getElementById('radius').value;
	const area = 3.14*parseInt(rad)*parseInt(rad);
	const perimeter = 2*3.14*parseInt(rad);
	console.log('Area of Circle ' + '= ' + area);
	console.log('Perimeter of Circle ' + '= ' + perimeter);
}


function square(){
	var side = document.getElementById('length').value;
	var area = parseInt(side)*parseInt(side);
	console.log('Area of square ' + '= ' + area);
}


function rectangle(){
	var lengt = document.getElementById('leng').value;
	var widt = document.getElementById('wid').value;
	var arear = parseInt(lengt)*parseInt(widt);
	var peri = parseInt(lengt)+parseInt(widt);
	console.log('Area of Rectangle = ' + arear);
	console.log('Perimeter of Rectangle =' + peri);
}

function cylinder(){
	const radi = document.getElementById('rad').value;
	const hei = document.getElementById('height').value;
	const arear = 2*3.14*parseInt(radi)*parseInt(hei);
	const volume = 3.14*parseInt(radi)*parseInt(radi)*parseInt(hei);
	console.log('Area of Cylinder = ' + arear);
	console.log('Volume of Cylinder = ' + volume);
}

function compoundintrest(){
	var pri = document.getElementById('p').value;
	var rate = document.getElementById('r').value;
	var nti = document.getElementById('n').value;
	var time = document.getElementById('t').value;
	var d = parseInt(rate)/parseInt(nti);
	var nt = parseInt(nti)*parseInt(time);
	var fA = Math.pow((parseInt(pri)*(1+parseInt(d))),nt);
	document.getElementById('A').value=fA;
}