function cargaPuntuaciones2() {
	db = db.getSiblingDB('curso');

	db.puntuacionesIndices.drop();
	
	var cargaMasiva = db.puntuacionesIndices.initializeUnorderedBulkOp();
	for ( var i = 0 ; i < 1500000 ; i++ ) { 
		puntuacionesEstudiante = {
			preguntas : 100 * Math.random(),
			ejercicios : 100 * Math.random(),
			tareas : 100 * Math.random(),
			examen : 100 * Math.random()
		};
		cargaMasiva.insert( { 
			idEstudiante : i + 1 , 
			puntuaciones : puntuacionesEstudiante 
		} )
	};
	cargaMasiva.execute();
};

cargaPuntuaciones2();