db.inventario.find({ "tipo": "tipo1" }).count()

db.inventario.aggregate([
	{ 
		$match: { "tipo": "tipo1" } 
	},
	{ 
		$group: { _id: null, count: { $sum: 1 } } 
	},
	{
		$project: { _id: 0, count: 1 }
	}
])

