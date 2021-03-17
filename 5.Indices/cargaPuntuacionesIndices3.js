function cargaPuntuaciones() {
	db = db.getSiblingDB('curso');

	db.puntuacionesIndices3.drop();

	var tiposEjercicios = [ "pregunta" , "ejercicio" , "tarea" , "examen" ];

	
	var cargaMasiva = db.puntuacionesIndices3.initializeUnorderedBulkOp();
	for ( var i = 0 ; i < 5000 ; i++ ) { 
		for (var j = 0 ; j < 4 ; j++ ) { 
			cargaMasiva.insert( { 
				idEstudiante : i + 1 , 
				tipo : tiposEjercicios[j] , 
				puntuacion : 100 * Math.random() 
			} ) 
		}
	};
	cargaMasiva.execute();
		
};

cargaPuntuaciones();