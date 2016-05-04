var map = function() {
	if (this.tipo == "tipo1")
		emit("productos", this.cantidad);
}

var reduce = function(key, values) {
	var count = 0;
	for (var i in values)
		count += values[i];
	return count; 
}

db.inventario.mapReduce(map, reduce, { out: { inline: 1 }})

