function inicio(){
	var boton = document.getElementById("boton");
	boton.addEventListener("click",guardar,false);
}

function guardar(){
	
	var fechas = Date("m/d/Y");

	var nom = document.getElementById("nombre").value;
	var tip = document.getElementById("tipo").value;
	var valor = document.getElementById("movimiento").value;

	
	localStorage.setItem("Nombre",nom);
	localStorage.setItem("Tipo",tip);
	localStorage.setItem("Valor",valor);
	localStorage.setItem("Fecha",fechas);
				
	leer();	
	
	document.getElementById("nombre").value="";
	document.getElementById("tipo").value="";
	document.getElementById("movimiento").value="";
}
		

function leer(nom){	
	var zona = document.getElementById("zona");
	
	zona.innerHTML = '<th scope="row" >'+1+'</th><td></td><td></td><td></td><td></td><td><button type="button" class="btn btn-primary" onClick="eliminar()">'+ "Eliminar" +'</button></td>';
			
	for(i=0; i<localStorage.length;i++){
				var nom = localStorage.key(i);
				var tip = localStorage.getItem(nom);
				
				
				
		zona.innerHTML = '<th scope="row">'+1+'</th>'+localStorage.getItem("Nombre")+'<td>'+localStorage.getItem("Tipo")+'</td>'+localStorage.getItem("Valor")+'<td>'+localStorage.getItem("Fecha")+'</td><td><button type="button" class="btn btn-primary" onClick="eliminar()">' + "Eliminar" +'</button></td>';
								
				console.log(tip);
				
			}
}

function recargar(){
	location.reload(true);
}
		
		
function eliminar(){
	if(confirm("¿Desea eliminar los datos?")){
	 localStorage.clear();
	  }
	leer();
}

window.addEventListener("load",inicio,false);