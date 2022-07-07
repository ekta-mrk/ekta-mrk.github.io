function Sort(){
	var n1 = document.getElementById('name1').value;
	var n2 = document.getElementById('name2').value;
	
	if(n2.length > n1.length){
		document.getElementById('name1').value = n2;
		document.getElementById('name2').value = n1;
	}
}

function SortAsc(){
	var m1 = document.getElementById('name1').value;
	var m2 = document.getElementById('name2').value;
	
	if(m1.length > m2.length){
		document.getElementById("name1").value = m2;
		document.getElementById("name2").value = m1;
	}
}

function SortDes(){
	var m1 = document.getElementById('name1').value;
	var m2 = document.getElementById('name2').value;
	
	if(m2.length > m1.length){
		document.getElementById("name2").value = m1;
		document.getElementById("name1").value = m2;
	}
}