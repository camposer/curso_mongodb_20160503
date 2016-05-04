db.inventario.aggregate([
	{ 
		$match: { "tipo": "tipo1" } 
	},
	{ 
		$sort: { cantidad: -1 } 
	},
	{
		$project: { _id: 0, nombre: 1, numero: "$cantidad" }
	}
])

