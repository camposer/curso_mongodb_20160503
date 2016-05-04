db.inventario.find({ "lugar.id": 1 }, { nombre: 1 });

/*
var imprimir = function() {
	var cursor = db.inventario.find();
	
	while (cursor.hasNext()) {
		var producto = cursor.next();
	
		for (var i in producto.lugar) {
			if (producto.lugar.id == 1)
				print(producto)
		}
	}
}
*/
