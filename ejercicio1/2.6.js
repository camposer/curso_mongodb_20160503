db.inventario.aggregate([
	{ 
		$group: { 
			_id: null, 
			cantidad: { $sum: 1 }, 
			existencia: { $sum: "$cantidad" },
			total: { $avg: "$cantidad" }
		} 
	},
	{
		$out: "resultado"
	}
])

