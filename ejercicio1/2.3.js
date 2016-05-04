db.inventario.find({ "lugar.id": 1 }).count()

db.inventario.aggregate([
	{ 
		$match: { "lugar.id": 1 } 
	},
	{ 
		$group: { _id: null, count: { $sum: 1 } } 
	},
	{
		$project: { _id: 0, count: 1 }
	}
])

