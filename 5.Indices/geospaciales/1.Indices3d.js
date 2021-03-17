function cargaTiendas() {
	db = db.getSiblingDB('curso');

	db.tiendas3d.drop();

	var tiposTienda = [ "Comida" , "Deporte" , "Calzado" , "Ropa", "Restaurante", "Juguetes", "Herramientas", "Gafas", "Ordenadores", "Móviles" ];
	var numeroTipos = tiposTienda.length;
	var zonasTienda = [
		{ longitud : { min : -10 , max : 3 } , latitud : { min : 37 , max : 43 } } , 
		{ longitud : { min : -75 , max : -35 } , latitud : { min : -55 , max : 11 } }
	];
	var numeroZonas = zonasTienda.length;
	
	if ( version26Post() ) {
		var cargaMasiva = db.tiendas3d.initializeUnorderedBulkOp();
		for ( var i = 0 ; i < 5000 ; i++ ) { 
			var indiceTipo = Math.floor( numeroTipos * Math.random() );
			var tipoTienda = tiposTienda[ indiceTipo ];
			var indiceZona = Math.floor( numeroZonas * Math.random() );
			var zonaTienda = zonasTienda[ indiceZona ];
			var longitudTienda = zonaTienda.longitud.min + ( ( zonaTienda.longitud.max - zonaTienda.longitud.min ) * Math.random() );
			var latitudTienda = zonaTienda.latitud.min + ( ( zonaTienda.latitud.max - zonaTienda.latitud.min ) * Math.random() );
			var coordenadasTienda = [ longitudTienda , latitudTienda ];
			cargaMasiva.insert( { 
				idTienda : i + 1 , 
				tipo : tipoTienda , 
				localizacion : { 
					type : "Point" , 
					coordinates : coordenadasTienda 
				} 
			} );
		};
		cargaMasiva.execute();
	}
	else {
		for ( var i = 0 ; i < 5000 ; i++ ) { 
			var indiceTipo = Math.floor( numeroTipos * Math.random() );
			var tipoTienda = tiposTienda[ indiceTipo ];
			var indiceZona = Math.floor( numeroZonas * Math.random() );
			var zonaTienda = zonasTienda[ indiceZona ];
			var longitudTienda = zonaTienda.longitud.min + ( ( zonaTienda.longitud.max - zonaTienda.longitud.min ) * Math.random() );
			var latitudTienda = zonaTienda.latitud.min + ( ( zonaTienda.latitud.max - zonaTienda.latitud.min ) * Math.random() );
			var coordenadasTienda = [ longitudTienda , latitudTienda ];
			db.tiendas3d.insert( { 
				idTienda : i + 1 , 
				tipo : tipoTienda , 
				localizacion : { 
					type : "Point" , 
					coordinates : coordenadasTienda 
				} 
			} );
		};
	}
};

function version26Post() {
	var partesVersion = version().split( "." );
	return partesVersion[0] + partesVersion[1] >= 26;
};

cargaTiendas();