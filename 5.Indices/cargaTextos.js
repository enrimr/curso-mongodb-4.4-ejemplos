function cargaTextos() {
	db = db.getSiblingDB('curso');

	db.textos.drop();

	var palabras = [ "café" , "té" , "leche" , "con", "al", "poleo", "manzanilla", "tila", "mate", "azúcar" ];
	var numeroPalabras = palabras.length;

	var cargaMasiva = db.textos.initializeUnorderedBulkOp();
	for ( var i = 0 ; i < 5000 ; i++ ) { 
		var numeroPalabrasTexto = Math.ceil( 5 * Math.random() );
		var palabrasTexto = [];
		for ( var j = 0 ; j < numeroPalabrasTexto ; j++ ) {
			var indicePalabra = Math.floor( numeroPalabras * Math.random() );
			palabrasTexto.push( palabras[indicePalabra] );
		}
		cargaMasiva.insert( { 
			_id : i + 1 , 
			tipo : Math.ceil( 140 * Math.random() ) % 7 , 
			texto : palabrasTexto.join( " " ) 
		} );
	};
	cargaMasiva.execute();
};

cargaTextos();