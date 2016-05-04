db.inventario.find(
	{ 
		"tipo": "tipo1",
		"cantidad" : { $gt: 40 }
	} , 
	{ 
		nombre: 1 
	}
)

db.inventario.aggregate([
	{ 
		$match: { 
			"tipo": "tipo1",
			"cantidad" : { $gt: 40 }
		} 
	},
	{ 
		$project: { nombre: 1 } 
	}
])
