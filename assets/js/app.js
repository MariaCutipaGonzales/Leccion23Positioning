function cargarDiv(){
	var rojo = document.createElement('div');
	var morado = document.createElement('div');
	var amarillo = document.createElement('div');
	var negro = document.createElement('div');
	var azul = document.createElement('div');
	var verde = document.createElement('div');

	rojo.setAttribute("id","rojo");
	morado.setAttribute("id","morado");
	amarillo.setAttribute("id","amarillo");
	negro.setAttribute("id","negro");
	azul.setAttribute("id","azul");
	verde.setAttribute("id","verde");

	rojo.appendChild(morado);
	morado.appendChild(amarillo);
	azul.appendChild(verde);
	azul.appendChild(negro);

	document.getElementsByTagName("body")[0].appendChild(rojo);
	document.getElementsByTagName("body")[0].appendChild(azul);
}
cargarDiv(); 

