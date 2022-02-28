function display(val){
	document.getElementById('output').value += val;
}

function del(){
	document.getElementById("output").value = "";
}

function result(){
	var x = document.getElementById('output').value;
	var y = eval(x);
	document.getElementById('output').value = y;
}

function clr(){
	var a = document.getElementById('output').value;
	var c = a.substring(0, a.length - 1);
	document.getElementById('output').value = c;
}