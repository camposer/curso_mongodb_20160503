db.inventario.aggregate([
	{ 
		$group: { 
			_id: { "mitipo": "$tipo" }, 
			cantidad: { $sum: 1 }, 
			existencia: { $sum: "$cantidad" },
			total: { $avg: "$cantidad" }
		} 
	}
])

