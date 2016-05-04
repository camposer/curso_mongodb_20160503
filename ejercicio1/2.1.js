db.inventario.find({ "lugar.id": 1 }, { nombre: 1 })

db.inventario.aggregate([
	{ 
		$match: { "lugar.id": 1 } 
	},
	{ 
		$project: { nombre: 1 } 
	}
])
